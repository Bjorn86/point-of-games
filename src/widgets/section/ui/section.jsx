import PropTypes from 'prop-types';
import { memo } from 'react';
import clsx from 'clsx';
import { useTheme } from 'shared/lib/use-theme';
import s from './section.module.scss';

function Section({ ...props }) {
  const theme = useTheme();

  return (
    <section
      className={clsx(s.section, {
        [props.addSectionClass]: props.addSectionClass,
      })}
      aria-label={props.label}
    >
      {props.title && (
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
  addSectionClass: PropTypes.string,
  title: PropTypes.string,
  label: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Section.defaultProps = {
  addSectionClass: null,
  title: null,
  label: null,
};
