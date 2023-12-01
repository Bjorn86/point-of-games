import { createAsyncThunk } from '@reduxjs/toolkit';

export const userDbCreated = createAsyncThunk(
  '@@user/userDbCreated',
  async (email, { rejectWithValue, extra: { api } }) => {
    try {
      await api.createUserDB(email);
      return email;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);
