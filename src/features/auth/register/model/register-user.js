import { createAsyncThunk } from '@reduxjs/toolkit';
import { createUserDB } from 'features/user/model/create-user-db';

export const registerUser = createAsyncThunk(
  '@@auth/registration',
  async (
    { email, password },
    { dispatch, rejectWithValue, extra: { api } },
  ) => {
    try {
      const res = await api.signUp({ email, password });
      dispatch(createUserDB(res.user.email));
      return res.user;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);
