// IMPORT PACKAGES
import { Children, cloneElement } from 'react';
import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types';

// IMPORT UI-KIT
import Button from 'shared/ui/button';

// IMPORT STYLES
import s from './form.module.scss';

function Form({ ...props }) {
  // HOOKS
  const { control, handleSubmit } = useForm({ mode: 'onBlur' });

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
      />
    </form>
  );
}

export default Form;

Form.propTypes = {
  formName: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  buttonText: PropTypes.string.isRequired,
};
