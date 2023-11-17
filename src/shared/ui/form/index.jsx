// IMPORT PACKAGES
import { yupResolver } from '@hookform/resolvers/yup';
import { Children, cloneElement, memo } from 'react';
import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types';

// IMPORT UI-KIT
import Button from 'shared/ui/button';

// IMPORT STYLES
import s from './form.module.scss';

// FORM UI COMPONENT
function Form({ ...props }) {
  // HOOKS
  const { control, handleSubmit } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(props.validationSchema),
  });

  return (
    <form
      className={s.form}
      name={props.formName}
      id={props.formName}
      noValidate
      onSubmit={handleSubmit(props.onSubmit)}
    >
      {Children.map(props.children, (child) =>
        cloneElement(child, {
          control,
        }),
      )}
      <Button
        addClass={s.formButton}
        view='withText'
        type='submit'
        content={props.buttonText}
        isDisabled={props.isDisabled}
      />
    </form>
  );
}

export default memo(Form);

Form.propTypes = {
  validationSchema: PropTypes.shape({}),
  formName: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  buttonText: PropTypes.string.isRequired,
  isDisabled: PropTypes.bool,
};

Form.defaultProps = {
  validationSchema: {},
  isDisabled: false,
};
