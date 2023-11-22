import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { memo } from 'react';
import s from './header-link.module.scss';

function HeaderLink({ ...props }) {
  return (
    <NavLink
      to={props.href}
      className={({ isActive }) => clsx(s.link, { [s.linkActive]: isActive })}
    >
      {props.text}
    </NavLink>
  );
}

export default memo(HeaderLink);

HeaderLink.propTypes = {
  text: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
};
