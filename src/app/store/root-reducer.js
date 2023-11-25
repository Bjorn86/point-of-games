import { themeReducer } from 'entities/theme';
import { authReducer } from 'entities/auth';
import { rawgApi } from 'shared/api';

export const rootReducer = {
  theme: themeReducer,
  auth: authReducer,
  [rawgApi.reducerPath]: rawgApi.reducer,
};
