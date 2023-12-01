import { createAsyncThunk } from '@reduxjs/toolkit';
import { loadDataFromLS } from 'shared/lib/utils';

export const themeLoaded = createAsyncThunk(
  '@@theme/themeLoaded',
  async () => loadDataFromLS('theme') || 'light',
);
