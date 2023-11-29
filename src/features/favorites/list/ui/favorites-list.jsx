import { ErrorBoundary } from 'react-error-boundary';
import PropTypes from 'prop-types';
import { memo } from 'react';
import clsx from 'clsx';
import { useTheme } from 'shared/lib/use-theme';
import CardWrapper from 'features/favorites/card-wrapper/card-wrapper';
import s from './favorites-list.module.scss';

function FavoritesList({ data }) {
  const theme = useTheme();

  return (
    <ul className={s.list}>
      {data.map((id) => (
        <ErrorBoundary key={id}>
          <li
            className={clsx(s.item, { [s.itemDark]: theme === 'dark' })}
            key={id}
          >
            <CardWrapper id={id} />
          </li>
        </ErrorBoundary>
      ))}
    </ul>
  );
}

export default memo(FavoritesList);

FavoritesList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.number).isRequired,
};
