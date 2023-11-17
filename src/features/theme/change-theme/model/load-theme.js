import { createAsyncThunk } from '@reduxjs/toolkit';
import { loadDataFromLS } from 'shared/lib/utils';

export const loadTheme = createAsyncThunk(
  '@@theme/load',
  async () => loadDataFromLS('theme') || 'light',
);
