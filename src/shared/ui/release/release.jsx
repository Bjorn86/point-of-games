import PropTypes from 'prop-types';
import { memo } from 'react';
import clsx from 'clsx';
import { useTheme } from 'shared/lib/use-theme';
import s from './release.module.scss';

function Release({ releaseDate }) {
  const theme = useTheme();

  const formatDate = () => {
    const parts = releaseDate.split('-');
    const year = parts[0];
    const month = parts[1];
    const day = parts[2];
    return `${day}.${month}.${year}`;
  };

  return (
    <p className={clsx(s.release, { [s.releaseDark]: theme === 'dark' })}>
      Release date: {releaseDate ? formatDate() : 'Unknown'}
    </p>
  );
}

export default memo(Release);

Release.propTypes = {
  releaseDate: PropTypes.string,
};

Release.defaultProps = {
  releaseDate: null,
};
