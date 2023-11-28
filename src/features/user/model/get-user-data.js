import { createAsyncThunk } from '@reduxjs/toolkit';

export const getUserData = createAsyncThunk(
  '@@user/getUserData',
  async (email, { rejectWithValue, extra: { api } }) => {
    try {
      const res = await api.getUserData(email);
      return res.data();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);
