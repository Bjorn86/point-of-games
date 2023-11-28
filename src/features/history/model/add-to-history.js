import { createAsyncThunk } from '@reduxjs/toolkit';
import { checkDuplicate } from '../lib/utils';
import { getHistory } from './get-history';

export const addToHistory = createAsyncThunk(
  '@@history/add',
  async (query, { getState, dispatch, rejectWithValue, extra: { api } }) => {
    const { user, history } = getState().user;
    const queryObj = {
      query,
      date: new Date().toISOString(),
    };
    if (user && checkDuplicate(history, queryObj)) {
      try {
        await api.addToHistory(user, queryObj);
        return await dispatch(getHistory());
      } catch (error) {
        return rejectWithValue(error.message);
      }
    }
    return rejectWithValue(
      'The same request has already been added to the history less than 1 minute ago',
    );
  },
);
