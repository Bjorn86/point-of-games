import PropTypes from 'prop-types';
import { memo } from 'react';
import clsx from 'clsx';
import { useTheme } from 'shared/lib/use-theme';
import s from './release.module.scss';

function Release({ ...props }) {
  const theme = useTheme();

  const formatDate = () => {
    const parts = props.releaseDate.split('-');
    const year = parts[0];
    const month = parts[1];
    const day = parts[2];
    return `${day}.${month}.${year}`;
  };

  return (
    <span
      className={clsx(
        s.release,
        { [s.releaseDark]: theme === 'dark' },
        { [props.addClass]: props.addClass },
      )}
    >
      {props.releaseDate ? formatDate() : 'Unknown'}
    </span>
  );
}

export default memo(Release);

Release.propTypes = {
  releaseDate: PropTypes.string,
  addClass: PropTypes.string,
};

Release.defaultProps = {
  releaseDate: null,
  addClass: null,
};
