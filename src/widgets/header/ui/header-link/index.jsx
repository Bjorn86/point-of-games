import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { memo } from 'react';
import s from './header-link.module.scss';

function HeaderLink({ ...props }) {
  return (
    <Link to={props.href} className={s.link}>
      {props.text}
    </Link>
  );
}

export default memo(HeaderLink);

HeaderLink.propTypes = {
  text: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
};
