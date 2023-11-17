// IMPORT PACKAGES
import { createAsyncThunk } from '@reduxjs/toolkit';

// REGISTRATION THUNK
export const registerUser = createAsyncThunk(
  '@@auth/registration',
  async ({ email, password }, { rejectWithValue, extra: { api } }) => {
    try {
      const res = await api.createUser({ email, password });
      return res.user;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);
