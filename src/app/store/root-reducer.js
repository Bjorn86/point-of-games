import { themeReducer } from 'entities/theme';
import { authReducer } from 'entities/auth';
import { cardsApi } from 'entities/cards';

export const rootReducer = {
  theme: themeReducer,
  auth: authReducer,
  [cardsApi.reducerPath]: cardsApi.reducer,
};
