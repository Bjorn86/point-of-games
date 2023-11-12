// IMPORT PACKAGES
import { useCallback, useEffect, useState, useContext } from 'react';
import { useController } from 'react-hook-form';
import PropTypes from 'prop-types';
import clsx from 'clsx';

// IMPORT CONTEXT
import { ThemeContext } from 'app/contexts';

// IMPORT UI-KIT
import Button from 'shared/ui/button';

// IMPORT ICONS
import { ReactComponent as EyeSlashIcon } from 'shared/ui/assets/icons/eye-slash.svg';
import { ReactComponent as EyeIcon } from 'shared/ui/assets/icons/eye.svg';

// IMPORT STYLES
import s from './input.module.scss';

function Input({ ...props }) {
  // HOOKS
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const [labelText, setLabelText] = useState('');
  const theme = useContext(ThemeContext);
  const {
    field,
    fieldState: { error },
  } = useController({
    name: props.inputId,
    control: props.control,
    defaultValue: '',
    rules: props.validationRules,
  });

  // SHOW/HIDE PASSWORD
  const onClick = useCallback(() => {
    setPasswordVisible(!isPasswordVisible);
  }, [isPasswordVisible]);

  // SET LABEL TEXT ON FOCUS EVENT
  const onFocus = () => {
    setLabelText(props.placeholder);
  };

  // SET LABEL TEXT ON BLUR EVENT
  const onBlur = () => {
    if (props.label) {
      setLabelText(props.label);
    } else if (field.value) {
      setLabelText(props.placeholder);
    } else {
      setLabelText('');
    }
    field.onBlur();
  };

  // BUTTON ICON SELECTION HANDLER
  const showIcon = useCallback(() => {
    if (isPasswordVisible) {
      if (theme === 'dark') {
        return <EyeSlashIcon fill='#fff' />;
      }
      return <EyeSlashIcon />;
    }
    if (theme === 'dark') {
      return <EyeIcon fill='#fff' />;
    }
    return <EyeIcon />;
  }, [isPasswordVisible, theme]);

  // SETS THE LABEL TEXT IF IT IS PASSED BY A PROP
  useEffect(() => {
    if (props.label) {
      setLabelText(props.label);
    }
  }, [props.label]);

  return (
    <label className={s.wrapper} htmlFor={props.inputId}>
      <span className={s.caption}>{labelText}</span>
      <input
        className={clsx(s.input, { [s.inputDark]: theme === 'dark' })}
        id={props.inputId}
        type={
          props.inputType === 'password' && isPasswordVisible
            ? 'text'
            : props.inputType
        }
        form={props.formName}
        placeholder={props.placeholder}
        name={field.name}
        autoComplete='off'
        disabled={props.isDisabled}
        onChange={field.onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        value={field.value}
      />
      {props.withButton && (
        <Button
          view='inInput'
          onClick={onClick}
          alt={isPasswordVisible ? 'Скрыть пароль' : 'Показать пароль'}
          content={showIcon()}
        />
      )}
      <span className={clsx(s.caption, s.error)}>{error?.message}</span>
    </label>
  );
}

export default Input;

Input.propTypes = {
  inputId: PropTypes.string.isRequired,
  control: PropTypes.shape({}),
  validationRules: PropTypes.shape({}),
  label: PropTypes.string,
  inputType: PropTypes.string.isRequired,
  formName: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  isDisabled: PropTypes.bool.isRequired,
  withButton: PropTypes.bool,
};

Input.defaultProps = {
  control: {},
  validationRules: {},
  label: '',
  placeholder: '',
  withButton: false,
};
