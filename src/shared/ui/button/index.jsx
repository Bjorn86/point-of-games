// IMPORT PACKAGES
import PropTypes from 'prop-types';
import clsx from 'clsx';

// IMPORT STYLES
import s from './button.module.scss';

// BUTTON UI COMPONENT
function Button({ ...props }) {
  return (
    <button
      className={clsx(
        s.button,
        { [s.rounded]: props.view === 'rounded' },
        { [s.inInput]: props.view === 'inInput' },
        { [s.withText]: props.view === 'withText' },
        { [props.addClass]: props.addClass },
      )}
      type={props.type === 'submit' ? 'submit' : 'button'}
      onClick={props.onClick}
      {...(typeof props.content === 'string'
        ? {}
        : { title: props.alt, 'aria-label': props.alt })}
    >
      {props.content}
    </button>
  );
}

export default Button;

Button.propTypes = {
  view: PropTypes.oneOf(['rounded', 'inInput', 'withText']).isRequired,
  addClass: PropTypes.string,
  type: PropTypes.string,
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
    .isRequired,
  onClick: PropTypes.func,
  alt: PropTypes.string,
};

Button.defaultProps = {
  addClass: null,
  type: 'button',
  onClick: null,
  alt: null,
};
