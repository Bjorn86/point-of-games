import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { memo } from 'react';
import clsx from 'clsx';
import { ReactComponent as Bookmark } from 'shared/ui/assets/icons/bookmark.svg';
import { ReactComponent as Share } from 'shared/ui/assets/icons/share.svg';
import { useTheme } from 'shared/lib/use-theme';
import Platforms from 'shared/ui/platforms';
import Release from 'shared/ui/release';
import Button from 'shared/ui/button';
import Genres from 'shared/ui/genres';
import Score from 'shared/ui/score';
import s from './card.module.scss';

function Card({ ...props }) {
  const theme = useTheme();

  return (
    <div>
      <img className={s.image} src={props.bgImage} alt={props.name} />
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
          <Link className={s.link} to={`${props.id}`}>
            <h3 className={clsx(s.title, { [s.titleDark]: theme === 'dark' })}>
              {props.name}
            </h3>
          </Link>
          <Genres genres={props.genres} />
        </div>
        <div className={s.footerWrapper}>
          <Release releaseDate={props.released} />
          <div className={s.buttonsWrapper}>
            <Button
              view='rounded'
              content={
                theme === 'dark' ? <Bookmark fill='#fff' /> : <Bookmark />
              }
              alt='Add to favorites'
            />
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
  bgImage: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  platforms: PropTypes.arrayOf(PropTypes.object).isRequired,
  metacritic: PropTypes.number,
  rating: PropTypes.number,
  id: PropTypes.number.isRequired,
  genres: PropTypes.arrayOf(PropTypes.object).isRequired,
  released: PropTypes.string.isRequired,
};

Card.defaultProps = {
  metacritic: null,
  rating: null,
};
