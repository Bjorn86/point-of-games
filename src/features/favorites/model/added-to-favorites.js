import { createAsyncThunk } from '@reduxjs/toolkit';

export const addedToFavorites = createAsyncThunk(
  '@@favorites/addedToFavorites',
  async (gameID, { getState, rejectWithValue, extra: { api } }) => {
    const { user } = getState().user;
    if (user) {
      try {
        return await api.addToFavorites(user, gameID);
      } catch (error) {
        return rejectWithValue(error.message);
      }
    } else {
      return rejectWithValue('There is no such user');
    }
  },
);
