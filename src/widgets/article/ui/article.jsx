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
import s from './article.module.scss';

function Article({ ...props }) {
  const theme = useTheme();
  const { isFavorite, handleFavoriteButtonClick } = useFavorites(props.id);

  const renderPlatformsDetail = () => {
    const platformDetails = props.platformsDetail.map((p) => p.platform.name);
    return platformDetails.join(', ');
  };

  const renderDevelopers = () => {
    const developers = props.developers.map((d) => d.name);
    return developers.join(', ');
  };

  return (
    <article className={s.wrapper}>
      <div className={s.header}>
        <Platforms platforms={props.platforms} />
        <p className={clsx(s.playtime, { [s.playtimeDark]: theme === 'dark' })}>
          Average playtime:{' '}
          {props.playtime === 0 ? 'N/A' : `${props.playtime} hours`}
        </p>
      </div>
      <h2 className={clsx(s.title, { [s.titleDark]: theme === 'dark' })}>
        {props.name}
      </h2>
      <div className={s.twoColumns}>
        {props.bgImage ? (
          <img className={s.image} src={props.bgImage} alt={props.name} />
        ) : (
          <p className={clsx(s.plug, { [s.plugDark]: theme === 'dark' })}>
            No images yet
          </p>
        )}
        <div className={s.column}>
          <div>
            <div className={s.metaWrapper}>
              <p className={s.cation}>Platforms</p>
              <p className={clsx(s.text, { [s.textDark]: theme === 'dark' })}>
                {renderPlatformsDetail()}
              </p>
            </div>
            <div className={s.metaWrapper}>
              <p className={s.cation}>Genres</p>
              <Genres
                genres={props.genres}
                addClass={clsx(s.genres, { [s.textDark]: theme === 'dark' })}
              />
            </div>
            <div className={s.metaWrapper}>
              <p className={s.cation}>Release date</p>
              {props.tba ? (
                <p className={clsx(s.text, { [s.textDark]: theme === 'dark' })}>
                  TBA
                </p>
              ) : (
                <Release
                  releaseDate={props.released}
                  addClass={clsx(s.date, { [s.textDark]: theme === 'dark' })}
                />
              )}
            </div>
            <div className={s.metaWrapper}>
              <p className={s.cation}>Developer</p>
              <p className={clsx(s.text, { [s.textDark]: theme === 'dark' })}>
                {renderDevelopers()}
              </p>
            </div>
            <div className={s.metaWrapper}>
              <p className={s.cation}>Website</p>
              {props.website ? (
                <a
                  href={props.website}
                  className={clsx(s.link, { [s.linkDark]: theme === 'dark' })}
                  target='_blank'
                  rel='noreferrer'
                >
                  {props.website}
                </a>
              ) : (
                <p className={clsx(s.text, { [s.textDark]: theme === 'dark' })}>
                  Unknown
                </p>
              )}
            </div>
            <div className={s.metaWrapper}>
              <p className={s.cation}>Age rating</p>
              {props.esrbRating ? (
                <p className={clsx(s.text, { [s.textDark]: theme === 'dark' })}>
                  {props.esrbRating.name}
                </p>
              ) : (
                <p className={clsx(s.text, { [s.textDark]: theme === 'dark' })}>
                  Unknown
                </p>
              )}
            </div>
          </div>
          <div className={s.footer}>
            <div className={s.scoreWrapper}>
              <Score score={props.metacritic} source='metacritic' />
              <Score score={props.rating} source='rawg' />
            </div>
            <div className={s.buttonWrapper}>
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
      <div className={s.body}>
        <pre className={clsx(s.pre, { [s.preDark]: theme === 'dark' })}>
          {props.description}
        </pre>
      </div>
    </article>
  );
}

export default memo(Article);

Article.propTypes = {
  bgImage: PropTypes.string,
  name: PropTypes.string.isRequired,
  platforms: PropTypes.arrayOf(PropTypes.object),
  platformsDetail: PropTypes.arrayOf(PropTypes.object),
  metacritic: PropTypes.number,
  rating: PropTypes.number,
  id: PropTypes.number.isRequired,
  genres: PropTypes.arrayOf(PropTypes.object),
  released: PropTypes.string,
  tba: PropTypes.bool,
  description: PropTypes.string,
  website: PropTypes.string,
  developers: PropTypes.arrayOf(PropTypes.object),
  playtime: PropTypes.number,
  esrbRating: PropTypes.shape({ name: PropTypes.string }),
};

Article.defaultProps = {
  bgImage: null,
  platforms: [],
  platformsDetail: [],
  metacritic: null,
  rating: null,
  genres: [],
  released: null,
  tba: false,
  description: null,
  website: null,
  developers: [],
  playtime: null,
  esrbRating: null,
};
