import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { memo } from 'react';
import clsx from 'clsx';
import Platforms from 'shared/ui/platforms/platforms';
import { useTheme } from 'shared/lib/use-theme';
import Score from 'shared/ui/score/score';
import s from './suggest-card.module.scss';

function SuggestCard({ ...props }) {
  const theme = useTheme();

  return (
    <Link className={s.link} to={`/cards/${props.id}`}>
      {props.bgImage ? (
        <img className={s.image} src={props.bgImage} alt={props.name} />
      ) : (
        <p className={clsx(s.plug, { [s.plugDark]: theme === 'dark' })}>
          No images yet
        </p>
      )}
      <div className={s.wrapper}>
        <p className={clsx(s.title, { [s.titleDark]: theme === 'dark' })}>
          {props.name}
        </p>
        <div className={s.metaWrapper}>
          <Platforms platforms={props.platforms} />
          <div className={s.scoreWrapper}>
            <Score score={props.metacritic} source='metacritic' />
            <Score score={props.rating} source='rawg' />
          </div>
        </div>
      </div>
    </Link>
  );
}

export default memo(SuggestCard);

SuggestCard.propTypes = {
  bgImage: PropTypes.string,
  name: PropTypes.string.isRequired,
  platforms: PropTypes.arrayOf(PropTypes.object),
  metacritic: PropTypes.number,
  rating: PropTypes.number,
  id: PropTypes.number.isRequired,
};

SuggestCard.defaultProps = {
  bgImage: null,
  platforms: [],
  metacritic: null,
  rating: null,
};
