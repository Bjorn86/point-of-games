import { createAsyncThunk } from '@reduxjs/toolkit';
import { getUserData } from 'features/user/model/get-user-data';

export const loginUser = createAsyncThunk(
  '@@auth/login',
  async (
    { email, password },
    { dispatch, rejectWithValue, extra: { api } },
  ) => {
    try {
      const res = await api.signIn({ email, password });
      dispatch(getUserData(email));
      return res.user;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);
