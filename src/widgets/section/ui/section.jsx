import PropTypes from 'prop-types';
import { memo } from 'react';
import clsx from 'clsx';
import { useTheme } from 'shared/lib/use-theme';
import s from './section.module.scss';

function Section({ ...props }) {
  const theme = useTheme();

  return (
    <section className={s.section} aria-label={props.label}>
      {props.title
        ? !props.label && (
            <h1 className={clsx(s.title, { [s.titleDark]: theme === 'dark' })}>
              {props.title}
            </h1>
          )
        : props.label && (
            <h2 className={clsx(s.title, { [s.titleDark]: theme === 'dark' })}>
              {props.title}
            </h2>
          )}
      {props.children}
    </section>
  );
}

export default memo(Section);

Section.propTypes = {
  title: PropTypes.string,
  label: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Section.defaultProps = {
  title: null,
  label: null,
};
