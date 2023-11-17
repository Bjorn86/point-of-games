import { themeReducer } from 'entities/theme';
import { authReducer } from 'entities/auth';

export const rootReducer = {
  theme: themeReducer,
  auth: authReducer,
};
