import { createAsyncThunk } from '@reduxjs/toolkit';

export const historyReceived = createAsyncThunk(
  '@@user/historyReceived',
  async (_, { getState, rejectWithValue, extra: { api } }) => {
    const { user } = getState().user;
    try {
      const res = await api.getUserHistory(user);
      return res;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);
