import { createAsyncThunk } from '@reduxjs/toolkit';

export const createUserDB = createAsyncThunk(
  '@@user/createDB',
  async (email, { rejectWithValue, extra: { api } }) => {
    try {
      await api.createUserDB(email);
      return email;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);
