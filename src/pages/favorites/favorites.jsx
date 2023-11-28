import { ErrorBoundary } from 'react-error-boundary';
import { useSelector } from 'react-redux';
import { memo } from 'react';
import clsx from 'clsx';
/* import { useGetGameForFavoritesQuery } from 'shared/api'; */
import Fallback from 'shared/ui/fallback/fallback';
import { selectFavorites } from 'entities/user';
import { useTheme } from 'shared/lib/use-theme';
import { FavoritesList } from 'features/favorites/list';
/* import { Preloader } from 'widgets/preloader'; */
import { Section } from 'widgets/section';
import s from './favorites.module.scss';

function Favorites() {
  const theme = useTheme();
  const favorites = useSelector(selectFavorites);

  return (
    <Section title='Favorites'>
      {favorites.length ? (
        <ErrorBoundary FallbackComponent={Fallback}>
          <FavoritesList data={favorites} />
        </ErrorBoundary>
      ) : (
        <h2 className={clsx(s.title, { [s.titleDark]: theme === 'dark' })}>
          Your favorites list is empty
        </h2>
      )}
    </Section>
  );
}

export default memo(Favorites);
