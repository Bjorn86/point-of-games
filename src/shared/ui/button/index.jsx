// IMPORT PACKAGES
import PropTypes from 'prop-types';

// IMPORT STYLES
import s from './button.module.scss';

// BUTTON UI COMPONENT
/* TODO: Посмотреть в дальнейшем по интерфейсу нужно ли будет расширение для кнопки с текстом, если нет то удалить расширение на текст */
function Button({ ...props }) {
  return (
    <button
      className={s.button}
      type='button'
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
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
    .isRequired,
  onClick: PropTypes.func.isRequired,
  alt: PropTypes.string,
};

Button.defaultProps = {
  alt: null,
};
