import { useDispatch, useSelector } from 'react-redux';
import { useCallback, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { deletedFromFavorites } from 'features/favorites/model/deleted-from-favorites';
import { addedToFavorites } from 'features/favorites/model/added-to-favorites';
import { AuthContext } from 'app/contexts';
import { paths } from 'shared/model/paths-config';
import { selectFavorites } from 'entities/user';

export const useFavorites = (id) => {
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);
  const isFavorite = favorites.includes(id);
  const { isAuthorized } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleFavoriteButtonClick = useCallback(() => {
    if (!isAuthorized) {
      navigate(paths.registration);
    }
    if (isFavorite) {
      dispatch(deletedFromFavorites(id));
    } else {
      dispatch(addedToFavorites(id));
    }
  }, [dispatch, id, isFavorite, isAuthorized, navigate]);

  return {
    isFavorite,
    handleFavoriteButtonClick,
  };
};
