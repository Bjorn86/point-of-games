import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { useTheme } from 'shared/lib/use-theme';
import { paths } from 'shared/model/paths-config';
import s from './auth-section.module.scss';

export function AuthSection({ ...props }) {
  const theme = useTheme();

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

AuthSection.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
};

AuthSection.defaultProps = {
  title: '',
};
