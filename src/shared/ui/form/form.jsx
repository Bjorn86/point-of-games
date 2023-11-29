import { Children, cloneElement, memo } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Button from 'shared/ui/button/button';
import s from './form.module.scss';

function Form({ control, ...props }) {
  return (
    <form
      className={clsx(s.form, { [props.addFormClass]: props.addFormClass })}
      name={props.formName}
      id={props.formName}
      noValidate
      onSubmit={props.onSubmit}
    >
      {Children.map(props.children, (child) =>
        cloneElement(child, { control }),
      )}
      <Button
        addClass={clsx({
          [props.addButtonClass]: props.addButtonClass,
        })}
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
  control: PropTypes.shape({}),
  addFormClass: PropTypes.string,
  addButtonClass: PropTypes.string,
  formName: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  buttonText: PropTypes.string.isRequired,
  isDisabled: PropTypes.bool,
};

Form.defaultProps = {
  control: {},
  addFormClass: null,
  addButtonClass: null,
  isDisabled: false,
};
