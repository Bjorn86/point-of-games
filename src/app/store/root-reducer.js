// IMPORT REDUCERS
import { themeReducer } from 'entities/theme';
import { authReducer } from 'entities/auth';

// ROOT REDUCER
export const rootReducer = {
  theme: themeReducer,
  auth: authReducer,
};
