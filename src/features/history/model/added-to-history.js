import { createAsyncThunk } from '@reduxjs/toolkit';
import { checkDuplicate } from '../lib/utils';

export const addedToHistory = createAsyncThunk(
  '@@history/addedToHistory',
  async (query, { getState, rejectWithValue, extra: { api } }) => {
    const { user, history } = getState().user;
    const queryObj = {
      query,
      date: new Date().toISOString(),
    };
    if (user && checkDuplicate(history, queryObj)) {
      try {
        return await api.addToHistory(user, queryObj);
      } catch (error) {
        return rejectWithValue(error.message);
      }
    }
    return rejectWithValue(
      'The same request has already been added to the history less than 1 minute ago',
    );
  },
);
