// IMPORT PACKAGES
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// IMPORT STYLES
import s from './header-link.module.scss';

// HEADER LINK COMPONENT
function HeaderLink({ ...props }) {
  return (
    <Link to={props.href} className={s.link}>
      {props.text}
    </Link>
  );
}

export default HeaderLink;

HeaderLink.propTypes = {
  text: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
};
