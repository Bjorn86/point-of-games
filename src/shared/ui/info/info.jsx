import PropTypes from 'prop-types';
import s from './info.module.scss';

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
