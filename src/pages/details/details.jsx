import { useParams } from 'react-router-dom';
import { useGetGameDetailsQuery } from 'shared/api';
import { Preloader } from 'widgets/preloader';
import { Section } from 'widgets/section';
import { Article } from 'widgets/article';

function Details() {
  const { id } = useParams();
  const { data, isLoading } = useGetGameDetailsQuery(id);

  return isLoading ? (
    <Preloader />
  ) : (
    <Section label='Section with game details'>
      <Article {...data} />
    </Section>
  );
}

export default Details;
