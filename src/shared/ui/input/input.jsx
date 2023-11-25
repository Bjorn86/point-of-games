import { useCallback, useEffect, useState, memo } from 'react';
import { useController } from 'react-hook-form';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { ReactComponent as EyeSlashIcon } from 'shared/ui/assets/icons/eye-slash.svg';
import { ReactComponent as EyeIcon } from 'shared/ui/assets/icons/eye.svg';
import { useTheme } from 'shared/lib/use-theme';
import Button from 'shared/ui/button/button';
import s from './input.module.scss';

function Input({ ...props }) {
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

  const handleButtonClick = useCallback(() => {
    setPasswordVisible(!isPasswordVisible);
  }, [isPasswordVisible]);

  const handleFocus = () => {
    setLabelText(props.placeholder);
    if (props.handleFocusExtension) {
      props.handleFocusExtension();
    }
  };

  const handleBlur = () => {
    if (props.label) {
      setLabelText(props.label);
    } else if (field.value) {
      setLabelText(props.placeholder);
    } else {
      setLabelText('');
    }
    if (props.handleBlurExtension) {
      props.handleBlurExtension();
    }
    field.onBlur();
  };

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

  useEffect(() => {
    if (props.label) {
      setLabelText(props.label);
    }
  }, [props.label]);

  return (
    <label
      className={clsx(s.wrapper, {
        [props.addLabelClass]: props.addLabelClass,
      })}
      htmlFor={props.inputId}
    >
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
          alt={isPasswordVisible ? 'Hide password' : 'Show password'}
          content={handleButtonIcon()}
        />
      )}
      <span className={clsx(s.caption, s.error)}>{error?.message}</span>
    </label>
  );
}

export default memo(Input);

Input.propTypes = {
  addLabelClass: PropTypes.string,
  inputId: PropTypes.string.isRequired,
  control: PropTypes.shape({}),
  label: PropTypes.string,
  inputType: PropTypes.string.isRequired,
  formName: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  isDisabled: PropTypes.bool.isRequired,
  withButton: PropTypes.bool,
  handleBlurExtension: PropTypes.func,
  handleFocusExtension: PropTypes.func,
};

Input.defaultProps = {
  addLabelClass: null,
  control: {},
  label: '',
  placeholder: '',
  withButton: false,
  handleBlurExtension: null,
  handleFocusExtension: null,
};
