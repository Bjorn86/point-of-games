import { ErrorBoundary } from 'react-error-boundary';
import { useSearchParams } from 'react-router-dom';
import Fallback from 'shared/ui/fallback/fallback';
import { useSearchGamesQuery } from 'shared/api';
import { CardsList } from 'features/cards/list';
import { Preloader } from 'widgets/preloader';
import { SearchForm } from 'features/search';
import { Section } from 'widgets/section';
import s from './search-page.module.scss';

function SearchPage() {
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get('query');
  const { data, isLoading } = useSearchGamesQuery(searchQuery);

  return isLoading ? (
    <Preloader />
  ) : (
    <>
      <Section label='Search' addSectionClass={s.search}>
        <SearchForm />
      </Section>
      <Section title='Search results'>
        <ErrorBoundary FallbackComponent={Fallback}>
          <CardsList data={data} />
        </ErrorBoundary>
      </Section>
    </>
  );
}

export default SearchPage;
