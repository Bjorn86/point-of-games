import { createAsyncThunk } from '@reduxjs/toolkit';

export const loginUser = createAsyncThunk(
  '@@auth/login',
  async ({ email, password }, { rejectWithValue, extra: { api } }) => {
    try {
      const res = await api.signIn({ email, password });
      return res.user;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);
