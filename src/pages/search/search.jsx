import { ErrorBoundary } from 'react-error-boundary';
import { useSearchParams } from 'react-router-dom';
import { memo } from 'react';
import clsx from 'clsx';
import { Preloader } from 'shared/ui/preloader/preloader';
import Fallback from 'shared/ui/fallback/fallback';
import { useSearchGamesQuery } from 'shared/api';
import { CardsList } from 'features/cards/list';
import { useTheme } from 'shared/lib/use-theme';
import { SearchForm } from 'features/search';
import { Section } from 'widgets/section';
import s from './search.module.scss';

function Search() {
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get('query');
  const { data, isLoading } = useSearchGamesQuery(searchQuery);
  const theme = useTheme();

  return isLoading ? (
    <Preloader />
  ) : (
    <>
      <Section label='Search' addSectionClass={s.search}>
        <SearchForm lastQuery={searchQuery} />
      </Section>
      <Section title='Search results'>
        <ErrorBoundary FallbackComponent={Fallback}>
          {data.length ? (
            <CardsList data={data} />
          ) : (
            <h2 className={clsx(s.title, { [s.titleDark]: theme === 'dark' })}>
              Nothing found
            </h2>
          )}
        </ErrorBoundary>
      </Section>
    </>
  );
}

export default memo(Search);
