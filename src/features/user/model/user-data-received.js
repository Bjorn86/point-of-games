import { createAsyncThunk } from '@reduxjs/toolkit';

export const userDataReceived = createAsyncThunk(
  '@@user/userDataReceived',
  async (email, { rejectWithValue, extra: { api } }) => {
    try {
      const res = await api.getUserData(email);
      return res.data();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);
