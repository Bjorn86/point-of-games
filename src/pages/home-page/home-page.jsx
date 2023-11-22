import { ErrorBoundary } from 'react-error-boundary';
import { CardsList } from 'features/cards/list';
import { Section } from 'widgets/section';
import Fallback from 'shared/ui/fallback/fallback';

function HomePage() {
  return (
    <Section title='Latest releases in 30 days'>
      <ErrorBoundary FallbackComponent={Fallback}>
        <CardsList />
      </ErrorBoundary>
    </Section>
  );
}

export default HomePage;
