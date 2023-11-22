import PropTypes from 'prop-types';
import { memo } from 'react';
import clsx from 'clsx';
import { ReactComponent as MetacriticLogo } from 'shared/ui/assets/icons/metacritic.svg';
import { useTheme } from 'shared/lib/use-theme';
import s from './score.module.scss';

function Score({ ...props }) {
  const theme = useTheme();

  const scoreRender = () => {
    if (props.score && props.source === 'rawg') {
      return (
        <span
          className={clsx(
            s.score,
            { [s.scoreBad]: props.score < 2 },
            { [s.scoreNormal]: props.score >= 2 && props.score < 4 },
            { [s.scoreGood]: props.score >= 4 },
          )}
        >
          {props.score}/5
        </span>
      );
    }
    if (props.score && props.source === 'metacritic') {
      return (
        <span
          className={clsx(
            s.score,
            { [s.scoreBad]: props.score < 19 },
            { [s.scoreNormal]: props.score >= 20 && props.score < 75 },
            { [s.scoreGood]: props.score >= 75 },
          )}
        >
          {props.score}
        </span>
      );
    }

    return <span className={s.score}>N/A</span>;
  };

  return (
    <div className={s.wrapper}>
      {props.source === 'rawg' ? (
        <span
          className={clsx(s.title, { [s.titleDark]: theme === 'dark' })}
          title='RAWG score'
        >
          R
        </span>
      ) : (
        <MetacriticLogo title='Metacritic score' />
      )}
      <span>{scoreRender()}</span>
    </div>
  );
}

export default memo(Score);

Score.propTypes = {
  source: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  score: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Score.defaultProps = {
  score: 'N/A',
};
