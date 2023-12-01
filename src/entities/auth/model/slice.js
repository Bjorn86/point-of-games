import { createSlice, createSelector } from '@reduxjs/toolkit';
import { userRegisters } from 'features/auth/register/model/user-registers';
import { userLogsOut } from 'features/auth/logout/model/user-logs-out';
import { userLogsIn } from 'features/auth/login/model/user-logs-in';

const initialState = {
  userRegisters: {
    isLoading: false,
    error: null,
  },
  userLogsIn: {
    isLoading: false,
    error: null,
  },
  userLogsOut: {
    isLoading: false,
    error: null,
  },
};

export const authSlice = createSlice({
  name: '@@auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(userRegisters.pending, (state) => {
      state.userRegisters.isLoading = true;
      state.userRegisters.error = null;
    });
    builder.addCase(userRegisters.rejected, (state, action) => {
      state.userRegisters.isLoading = false;
      state.userRegisters.error = action.payload || action.meta.error;
    });
    builder.addCase(userRegisters.fulfilled, (state) => {
      state.userRegisters.isLoading = false;
    });
    builder.addCase(userLogsIn.pending, (state) => {
      state.userLogsIn.isLoading = true;
      state.userLogsIn.error = null;
    });
    builder.addCase(userLogsIn.rejected, (state, action) => {
      state.userLogsIn.isLoading = false;
      state.userLogsIn.error = action.payload || action.meta.error;
    });
    builder.addCase(userLogsIn.fulfilled, (state) => {
      state.userLogsIn.isLoading = false;
    });
    builder.addCase(userLogsOut.pending, (state) => {
      state.userLogsOut.isLoading = true;
      state.userLogsOut.error = null;
    });
    builder.addCase(userLogsOut.rejected, (state, action) => {
      state.userLogsOut.isLoading = false;
      state.userLogsOut.error = action.payload || action.meta.error;
    });
    builder.addCase(userLogsOut.fulfilled, (state) => {
      state.userLogsOut.isLoading = false;
    });
  },
});

export const authReducer = authSlice.reducer;

export const selectRegisterInfo = createSelector(
  (state) => state.auth.userRegisters.isLoading,
  (state) => state.auth.userRegisters.error,
  (isLoading, error) => ({
    isLoading,
    error,
  }),
);

export const selectLoginInfo = createSelector(
  (state) => state.auth.userLogsIn.isLoading,
  (state) => state.auth.userLogsIn.error,
  (isLoading, error) => ({
    isLoading,
    error,
  }),
);
