import { createAsyncThunk } from '@reduxjs/toolkit';

export const registerUser = createAsyncThunk(
  '@@auth/registration',
  async ({ email, password }, { rejectWithValue, extra: { api } }) => {
    try {
      const res = await api.signUp({ email, password });
      return res.user;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);
