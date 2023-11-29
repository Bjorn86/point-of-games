import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { memo } from 'react';
import clsx from 'clsx';
import { ReactComponent as BookmarkActive } from 'shared/ui/assets/icons/bookmark-x.svg';
import { ReactComponent as Bookmark } from 'shared/ui/assets/icons/bookmark.svg';
import { ReactComponent as Share } from 'shared/ui/assets/icons/share.svg';
import { useFavorites } from 'features/favorites/lib/use-favorites';
import Platforms from 'shared/ui/platforms/platforms';
import { useTheme } from 'shared/lib/use-theme';
import Release from 'shared/ui/release/release';
import Button from 'shared/ui/button/button';
import Genres from 'shared/ui/genres/genres';
import Score from 'shared/ui/score/score';
import s from './card.module.scss';

function Card({ ...props }) {
  const theme = useTheme();
  const { handleFavoriteButtonClick, isFavorite } = useFavorites(props.id);

  return (
    <div>
      {props.bgImage ? (
        <img className={s.image} src={props.bgImage} alt={props.name} />
      ) : (
        <p className={clsx(s.plug, { [s.plugDark]: theme === 'dark' })}>
          No images yet
        </p>
      )}
      <div
        className={clsx(s.infoWrapper, {
          [s.infoWrapperDark]: theme === 'dark',
        })}
      >
        <div className={s.headerWrapper}>
          <Platforms platforms={props.platforms} />
          <div className={s.scoreWrapper}>
            <Score score={props.metacritic} source='metacritic' />
            <Score score={props.rating} source='rawg' />
          </div>
        </div>
        <div className={s.bodyWrapper}>
          <Link className={s.link} to={`/games/${props.id}`}>
            <h3 className={clsx(s.title, { [s.titleDark]: theme === 'dark' })}>
              {props.name}
            </h3>
          </Link>
          <Genres genres={props.genres} />
        </div>
        <div className={s.footerWrapper}>
          <p
            className={clsx(s.description, {
              [s.descriptionDark]: theme === 'dark',
            })}
          >
            Release date: <Release releaseDate={props.released} />
          </p>
          <div className={s.buttonsWrapper}>
            {isFavorite ? (
              <Button
                view='rounded'
                content={<BookmarkActive />}
                alt='Remove from favorites'
                onClick={handleFavoriteButtonClick}
              />
            ) : (
              <Button
                view='rounded'
                content={
                  theme === 'dark' ? <Bookmark fill='#fff' /> : <Bookmark />
                }
                alt='Add to favorites'
                onClick={handleFavoriteButtonClick}
              />
            )}
            <Button
              view='rounded'
              content={theme === 'dark' ? <Share fill='#fff' /> : <Share />}
              alt='Share'
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(Card);

Card.propTypes = {
  bgImage: PropTypes.string,
  name: PropTypes.string.isRequired,
  platforms: PropTypes.arrayOf(PropTypes.object),
  metacritic: PropTypes.number,
  rating: PropTypes.number,
  id: PropTypes.number.isRequired,
  genres: PropTypes.arrayOf(PropTypes.object),
  released: PropTypes.string,
};

Card.defaultProps = {
  bgImage: null,
  platforms: [],
  metacritic: null,
  rating: null,
  genres: [],
  released: null,
};
