// IMPORT PACKAGES
import { useCallback, useEffect, useState, memo } from 'react';
import { useController } from 'react-hook-form';
import PropTypes from 'prop-types';
import clsx from 'clsx';

// IMPORT HOOKS
import { useTheme } from 'shared/lib/use-theme';

// IMPORT UI-KIT
import Button from 'shared/ui/button';

// IMPORT ICONS
import { ReactComponent as EyeSlashIcon } from 'shared/ui/assets/icons/eye-slash.svg';
import { ReactComponent as EyeIcon } from 'shared/ui/assets/icons/eye.svg';

// IMPORT STYLES
import s from './input.module.scss';

// INPUT UI COMPONENT
function Input({ ...props }) {
  // HOOKS
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const [labelText, setLabelText] = useState('');
  const theme = useTheme();
  const {
    field,
    fieldState: { error },
  } = useController({
    name: props.inputId,
    control: props.control,
    defaultValue: '',
  });

  // SHOW/HIDE PASSWORD
  const handleButtonClick = useCallback(() => {
    setPasswordVisible(!isPasswordVisible);
  }, [isPasswordVisible]);

  // SET LABEL TEXT ON FOCUS EVENT
  const handleFocus = () => {
    setLabelText(props.placeholder);
  };

  // SET LABEL TEXT ON BLUR EVENT
  const handleBlur = () => {
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
  const handleButtonIcon = useCallback(() => {
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
        onFocus={handleFocus}
        onBlur={handleBlur}
        value={field.value}
      />
      {props.withButton && (
        <Button
          view='inInput'
          onClick={handleButtonClick}
          alt={isPasswordVisible ? 'Скрыть пароль' : 'Показать пароль'}
          content={handleButtonIcon()}
        />
      )}
      <span className={clsx(s.caption, s.error)}>{error?.message}</span>
    </label>
  );
}

export default memo(Input);

Input.propTypes = {
  inputId: PropTypes.string.isRequired,
  control: PropTypes.shape({}),
  label: PropTypes.string,
  inputType: PropTypes.string.isRequired,
  formName: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  isDisabled: PropTypes.bool.isRequired,
  withButton: PropTypes.bool,
};

Input.defaultProps = {
  control: {},
  label: '',
  placeholder: '',
  withButton: false,
};
