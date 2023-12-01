import { favoritesReceived } from 'features/favorites/model/favorites-received';
import { historyReceived } from 'features/history/model/history-received';

export const getUpdatedData = (store) => (next) => (action) => {
  if (
    action.type === '@@history/addedToHistory/fulfilled' ||
    action.type === '@@history/deletedFromHistory/fulfilled'
  ) {
    store.dispatch(historyReceived());
  }
  if (
    action.type === '@@favorites/addedToFavorites/fulfilled' ||
    action.type === '@@favorites/deletedFromFavorites/fulfilled'
  ) {
    store.dispatch(favoritesReceived());
  }
  next(action);
};
