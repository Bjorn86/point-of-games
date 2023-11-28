import { createSlice } from '@reduxjs/toolkit';
import { removeFromHistory } from 'features/history/model/remove-from-history';
import { addToHistory } from 'features/history/model/add-to-history';
import { createUserDB } from 'features/user/model/create-user-db';
import { getHistory } from 'features/history/model/get-history';
import { getUserData } from 'features/user/model/get-user-data';

const initialState = {
  user: null,
  favorites: [],
  history: [],
  meta: {
    createDB: {
      isLoading: false,
      error: null,
    },
    getUser: {
      isLoading: false,
      error: null,
    },
    getHistory: {
      isLoading: false,
      error: null,
    },
    addToHistory: {
      isLoading: false,
      error: null,
    },
    removeFromHistory: {
      isLoading: false,
      error: null,
    },
  },
};

export const userSlice = createSlice({
  name: '@@user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createUserDB.pending, (state) => {
      state.meta.createDB.isLoading = true;
      state.meta.createDB.error = null;
    });
    builder.addCase(createUserDB.rejected, (state, action) => {
      state.meta.createDB.isLoading = false;
      state.meta.createDB.error = action.payload || action.meta.error;
    });
    builder.addCase(createUserDB.fulfilled, (state, action) => {
      state.user = action.payload;
      state.meta.createDB.isLoading = false;
    });
    builder.addCase(getUserData.pending, (state) => {
      state.meta.getUser.isLoading = true;
      state.meta.getUser.error = null;
    });
    builder.addCase(getUserData.rejected, (state, action) => {
      state.meta.getUser.isLoading = false;
      state.meta.getUser.error = action.payload || action.meta.error;
    });
    builder.addCase(getUserData.fulfilled, (state, action) => {
      state.user = action.payload.email;
      state.favorites = action.payload.favorites;
      state.history = action.payload.history;
      state.meta.getUser.isLoading = false;
    });
    builder.addCase(getHistory.pending, (state) => {
      state.meta.getHistory.isLoading = true;
      state.meta.getHistory.error = null;
    });
    builder.addCase(getHistory.rejected, (state, action) => {
      state.meta.getHistory.isLoading = false;
      state.meta.getHistory.error = action.payload || action.meta.error;
    });
    builder.addCase(getHistory.fulfilled, (state, action) => {
      state.history = action.payload;
      state.meta.getHistory.isLoading = false;
    });
    builder.addCase(addToHistory.pending, (state) => {
      state.meta.addToHistory.isLoading = true;
      state.meta.addToHistory.error = null;
    });
    builder.addCase(addToHistory.rejected, (state, action) => {
      state.meta.addToHistory.isLoading = false;
      state.meta.addToHistory.error = action.payload || action.meta.error;
    });
    builder.addCase(addToHistory.fulfilled, (state) => {
      state.meta.addToHistory.isLoading = false;
    });
    builder.addCase(removeFromHistory.pending, (state) => {
      state.meta.removeFromHistory.isLoading = true;
      state.meta.removeFromHistory.error = null;
    });
    builder.addCase(removeFromHistory.rejected, (state, action) => {
      state.meta.removeFromHistory.isLoading = false;
      state.meta.removeFromHistory.error = action.payload || action.meta.error;
    });
    builder.addCase(removeFromHistory.fulfilled, (state) => {
      state.meta.removeFromHistory.isLoading = false;
    });
  },
});

export const userReducer = userSlice.reducer;
export const selectHistory = (state) => state.user.history;
export const selectIsUserLoading = (state) => state.user.meta.getUser.isLoading;
