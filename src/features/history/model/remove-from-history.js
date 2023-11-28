import { createAsyncThunk } from '@reduxjs/toolkit';
import { getHistory } from './get-history';

export const removeFromHistory = createAsyncThunk(
  '@@history/remove',
  async (query, { getState, dispatch, rejectWithValue, extra: { api } }) => {
    const { user } = getState().user;
    if (user) {
      try {
        await api.removeFromHistory(user, query);
        return await dispatch(getHistory());
      } catch (error) {
        return rejectWithValue(error.message);
      }
    }
    return rejectWithValue('There is no such request in the history');
  },
);
