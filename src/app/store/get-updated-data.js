import { getFavorites } from 'features/favorites/model/get-favorites';
import { getHistory } from 'features/history/model/get-history';

export const getUpdatedData = (store) => (next) => (action) => {
  if (
    action.type === '@@history/add/fulfilled' ||
    action.type === '@@history/remove/fulfilled'
  ) {
    store.dispatch(getHistory());
  }
  if (
    action.type === '@@favorites/add/fulfilled' ||
    action.type === '@@favorites/remove/fulfilled'
  ) {
    store.dispatch(getFavorites());
  }
  next(action);
};
