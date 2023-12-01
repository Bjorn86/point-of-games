import { createAsyncThunk } from '@reduxjs/toolkit';
import { userDbCreated } from 'features/user/model/user-db-created';

export const userRegisters = createAsyncThunk(
  '@@auth/userRegisters',
  async (
    { email, password },
    { dispatch, rejectWithValue, extra: { api } },
  ) => {
    try {
      const res = await api.signUp({ email, password });
      dispatch(userDbCreated(res.user.email));
      return res.user;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);
