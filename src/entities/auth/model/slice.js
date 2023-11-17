// IMPORT PACKAGES
import { createSlice, createSelector } from '@reduxjs/toolkit';

// IMPORT THUNKS
import { registerUser } from 'features/auth/register/model/register-user';
import { loginUser } from 'features/auth/login/model/login-user';

// INITIAL STATE
const initialState = {
  register: {
    isLoading: false,
    error: null,
  },
  login: {
    isLoading: false,
    error: null,
  },
};

// USER SLICE
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
  },
});

export const authReducer = authSlice.reducer;

// SELECTORS
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
