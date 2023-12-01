import { createAsyncThunk } from '@reduxjs/toolkit';

export const deletedFromFavorites = createAsyncThunk(
  '@@favorites/deletedFromFavorites',
  async (gameID, { getState, rejectWithValue, extra: { api } }) => {
    const { user } = getState().user;
    if (user) {
      try {
        return await api.removeFromFavorites(user, gameID);
      } catch (error) {
        return rejectWithValue(error.message);
      }
    } else {
      return rejectWithValue('There is no such user');
    }
  },
);
