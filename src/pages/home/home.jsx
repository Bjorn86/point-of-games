import { ErrorBoundary } from 'react-error-boundary';
import { memo } from 'react';
import { Preloader } from 'shared/ui/preloader/preloader';
import { useGetLatestGamesQuery } from 'shared/api';
import Fallback from 'shared/ui/fallback/fallback';
import { CardsList } from 'features/cards/list';
import { SearchForm } from 'features/search';
import { Section } from 'widgets/section';
import s from './home.module.scss';

function Home() {
  const { data: latestGames, isLoading: isLatestGamesLoading } =
    useGetLatestGamesQuery();

  return isLatestGamesLoading ? (
    <Preloader />
  ) : (
    <>
      <Section label='Search' addSectionClass={s.search}>
        <SearchForm />
      </Section>
      <Section title='Highest rated releases in the last 30 days'>
        <ErrorBoundary FallbackComponent={Fallback}>
          <CardsList data={latestGames} />
        </ErrorBoundary>
      </Section>
    </>
  );
}

export default memo(Home);
