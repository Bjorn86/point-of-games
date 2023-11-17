// IMPORT PACKAGES
import { createAsyncThunk } from '@reduxjs/toolkit';

// IMPORT UTILS
import { loadDataFromLS } from 'shared/utils/utils';

// LOAD THEME THUNK
export const loadTheme = createAsyncThunk(
  '@@theme/load',
  async () => loadDataFromLS('theme') || 'light',
);
