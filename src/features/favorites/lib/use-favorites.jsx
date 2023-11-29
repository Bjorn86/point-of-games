import { useDispatch, useSelector } from 'react-redux';
import { useCallback, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { removeFromFavorites } from 'features/favorites/model/remove-from-favorites';
import { addToFavorites } from 'features/favorites/model/add-to-favorites';
import { CurrentUserContext } from 'app/contexts';
import { paths } from 'shared/model/paths-config';
import { selectFavorites } from 'entities/user';

export const useFavorites = (id) => {
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);
  const isFavorite = favorites.includes(id);
  const { currentUser } = useContext(CurrentUserContext);
  const navigate = useNavigate();

  const handleFavoriteButtonClick = useCallback(() => {
    if (!currentUser) {
      navigate(paths.registration);
    }
    if (isFavorite) {
      dispatch(removeFromFavorites(id));
    } else {
      dispatch(addToFavorites(id));
    }
  }, [dispatch, id, isFavorite, currentUser, navigate]);

  return {
    isFavorite,
    handleFavoriteButtonClick,
  };
};
