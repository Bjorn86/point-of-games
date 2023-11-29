import { useDispatch, useSelector } from 'react-redux';
import { useCallback } from 'react';
import { removeFromFavorites } from 'features/favorites/model/remove-from-favorites';
import { addToFavorites } from 'features/favorites/model/add-to-favorites';
import { selectFavorites } from 'entities/user';

export const useFavorites = (id) => {
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);
  const isFavorite = favorites.includes(id);

  const handleFavoriteButtonClick = useCallback(() => {
    if (isFavorite) {
      dispatch(removeFromFavorites(id));
    } else {
      dispatch(addToFavorites(id));
    }
  }, [dispatch, id, isFavorite]);

  return {
    isFavorite,
    handleFavoriteButtonClick,
  };
};
