import PropTypes from 'prop-types';
import { memo } from 'react';
import clsx from 'clsx';
import { useTheme } from 'shared/lib/use-theme';
import s from './genres.module.scss';

function Genres({ ...props }) {
  const theme = useTheme();

  const concatenateGenres = () => {
    const genresArr = props.genres.map((genre) => genre.name);
    return genresArr.join(', ');
  };

  return (
    <p
      className={clsx(
        s.genres,
        { [s.genresDark]: theme === 'dark' },
        { [props.addClass]: props.addClass },
      )}
    >
      {concatenateGenres()}
    </p>
  );
}

export default memo(Genres);

Genres.propTypes = {
  genres: PropTypes.arrayOf(PropTypes.object).isRequired,
  addClass: PropTypes.string,
};

Genres.defaultProps = {
  addClass: null,
};
