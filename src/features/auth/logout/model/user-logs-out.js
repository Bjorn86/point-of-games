import { createAsyncThunk } from '@reduxjs/toolkit';

export const userLogsOut = createAsyncThunk(
  '@@auth/userLogsOut',
  async (_, { rejectWithValue, extra: { api } }) => {
    try {
      const res = await api.logout();
      return res;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);
