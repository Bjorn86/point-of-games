import { themeReducer } from 'entities/theme';
import { authReducer } from 'entities/auth';
import { userReducer } from 'entities/user';
import { rawgApi } from 'shared/api';

export const rootReducer = {
  theme: themeReducer,
  auth: authReducer,
  user: userReducer,
  [rawgApi.reducerPath]: rawgApi.reducer,
};
