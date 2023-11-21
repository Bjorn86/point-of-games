import { CardsList } from 'features/cards/list';
import { Section } from 'widgets/section';

function HomePage() {
  return (
    <Section title='Latest releases in 30 days'>
      <CardsList />
    </Section>
  );
}

export default HomePage;
