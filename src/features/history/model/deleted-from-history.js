import { createAsyncThunk } from '@reduxjs/toolkit';

export const deletedFromHistory = createAsyncThunk(
  '@@history/deletedFromHistory',
  async (query, { getState, rejectWithValue, extra: { api } }) => {
    const { user } = getState().user;
    if (user) {
      try {
        return await api.removeFromHistory(user, query);
      } catch (error) {
        return rejectWithValue(error.message);
      }
    }
    return rejectWithValue('There is no such request in the history');
  },
);
