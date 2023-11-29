import PropTypes from 'prop-types';
import { memo } from 'react';
import { useGetGameForFavoritesQuery } from 'shared/api';
import { Preloader } from 'shared/ui/preloader/preloader';
import Card from 'shared/ui/card/card';

function CardWrapper({ id }) {
  const { data, isLoading } = useGetGameForFavoritesQuery(id);

  if (isLoading) {
    return <Preloader />;
  }

  return data && !isLoading && <Card {...data} />;
}

export default memo(CardWrapper);

CardWrapper.propTypes = {
  id: PropTypes.number.isRequired,
};
