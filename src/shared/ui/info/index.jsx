// IMPORT PACKAGES
import PropTypes from 'prop-types';

// IMPORT STYLES
import s from './info.module.scss';

// INFO UI COMPONENT
function Info({ message }) {
  return <p className={s.info}>{message}</p>;
}

export default Info;

Info.propTypes = {
  message: PropTypes.string,
};

Info.defaultProps = {
  message: null,
};
