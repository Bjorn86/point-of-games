import { useParams } from 'react-router-dom';
import { memo } from 'react';
import { Preloader } from 'shared/ui/preloader/preloader';
import { useGetGameDetailsQuery } from 'shared/api';
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

export default memo(Details);
