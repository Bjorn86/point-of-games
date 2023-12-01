import { createAsyncThunk } from '@reduxjs/toolkit';
import { userDataReceived } from 'features/user/model/user-data-received';

export const userLogsIn = createAsyncThunk(
  '@@auth/userLogsIn',
  async (
    { email, password },
    { dispatch, rejectWithValue, extra: { api } },
  ) => {
    try {
      const res = await api.signIn({ email, password });
      dispatch(userDataReceived(email));
      return res.user;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);
