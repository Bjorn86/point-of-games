// IMPORT PACKAGES
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

// IMPORT CONTEXT
import { ThemeContext } from 'app/contexts';

// IMPORT PATHS
import { paths } from 'shared/routing/paths';

// IMPORT STYLES
import s from './auth-section.module.scss';

function AuthSection({ ...props }) {
  // HOOKS
  const theme = useContext(ThemeContext);

  return (
    <section className={s.section}>
      <div className={s.wrapper}>
        <h1 className={clsx(s.title, { [s.titleDark]: theme === 'dark' })}>
          {props.title}
        </h1>
        {props.children}
        {props.title === 'Регистрация' ? (
          <p className={s.text}>
            Уже зарегистрированы?{' '}
            <Link className={s.link} to={paths.login}>
              Войти
            </Link>
          </p>
        ) : (
          <p className={s.text}>
            У вас нет аккаунта?{' '}
            <Link className={s.link} to={paths.registration}>
              Зарегистрироваться
            </Link>
          </p>
        )}
      </div>
    </section>
  );
}

export default AuthSection;

AuthSection.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
};

AuthSection.defaultProps = {
  title: '',
};
