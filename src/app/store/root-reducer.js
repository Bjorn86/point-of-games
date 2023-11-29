import { rawgApi, featureFlagApi } from 'shared/api';
import { themeReducer } from 'entities/theme';
import { authReducer } from 'entities/auth';
import { userReducer } from 'entities/user';

export const rootReducer = {
  theme: themeReducer,
  auth: authReducer,
  user: userReducer,
  [rawgApi.reducerPath]: rawgApi.reducer,
  [featureFlagApi.reducerPath]: featureFlagApi.reducer,
};
