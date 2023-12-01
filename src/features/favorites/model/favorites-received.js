import { createAsyncThunk } from '@reduxjs/toolkit';

export const favoritesReceived = createAsyncThunk(
  '@@user/favoritesReceived',
  async (_, { getState, rejectWithValue, extra: { api } }) => {
    const { user } = getState().user;
    if (user) {
      try {
        const res = await api.getUserFavorites(user);
        return res;
      } catch (error) {
        return rejectWithValue(error.message);
      }
    } else {
      return rejectWithValue('There is no such user');
    }
  },
);
