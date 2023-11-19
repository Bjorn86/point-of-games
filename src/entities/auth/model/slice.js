import { createSlice, createSelector } from '@reduxjs/toolkit';
import { registerUser } from 'features/auth/register/model/register-user';
import { logoutUser } from 'features/auth/logout/model/logout-user';
import { loginUser } from 'features/auth/login/model/login-user';

const initialState = {
  register: {
    isLoading: false,
    error: null,
  },
  login: {
    isLoading: false,
    error: null,
  },
  logout: {
    isLoading: false,
    error: null,
  },
};

export const authSlice = createSlice({
  name: '@@auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(registerUser.pending, (state) => {
      state.register.isLoading = true;
      state.register.error = null;
    });
    builder.addCase(registerUser.rejected, (state, action) => {
      state.register.isLoading = false;
      state.register.error = action.payload || action.meta.error;
    });
    builder.addCase(registerUser.fulfilled, (state) => {
      state.register.isLoading = false;
    });
    builder.addCase(loginUser.pending, (state) => {
      state.login.isLoading = true;
      state.login.error = null;
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.login.isLoading = false;
      state.login.error = action.payload || action.meta.error;
    });
    builder.addCase(loginUser.fulfilled, (state) => {
      state.login.isLoading = false;
    });
    builder.addCase(logoutUser.pending, (state) => {
      state.logout.isLoading = true;
      state.logout.error = null;
    });
    builder.addCase(logoutUser.rejected, (state, action) => {
      state.logout.isLoading = false;
      state.logout.error = action.payload || action.meta.error;
    });
    builder.addCase(logoutUser.fulfilled, (state) => {
      state.logout.isLoading = false;
    });
  },
});

export const authReducer = authSlice.reducer;

export const selectRegisterInfo = createSelector(
  (state) => state.auth.register.isLoading,
  (state) => state.auth.register.error,
  (isLoading, error) => ({
    isLoading,
    error,
  }),
);

export const selectLoginInfo = createSelector(
  (state) => state.auth.login.isLoading,
  (state) => state.auth.login.error,
  (isLoading, error) => ({
    isLoading,
    error,
  }),
);
