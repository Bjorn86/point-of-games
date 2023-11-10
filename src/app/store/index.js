// IMPORT PACKAGES
import { configureStore } from '@reduxjs/toolkit';

// IMPORT ROOT REDUCER
import { rootReducer } from './root-reducer';

// STORE
export const store = configureStore({
  reducer: rootReducer,
  devTools: true,
});
