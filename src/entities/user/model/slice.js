import { createSlice } from '@reduxjs/toolkit';
import { deletedFromFavorites } from 'features/favorites/model/deleted-from-favorites';
import { deletedFromHistory } from 'features/history/model/deleted-from-history';
import { favoritesReceived } from 'features/favorites/model/favorites-received';
import { addedToFavorites } from 'features/favorites/model/added-to-favorites';
import { historyReceived } from 'features/history/model/history-received';
import { userDataReceived } from 'features/user/model/user-data-received';
import { addedToHistory } from 'features/history/model/added-to-history';
import { userDbCreated } from 'features/user/model/user-db-created';

const initialState = {
  user: null,
  favorites: [],
  history: [],
  meta: {
    userDbCreated: {
      isLoading: false,
      error: null,
    },
    userDataReceived: {
      isLoading: false,
      error: null,
    },
    historyReceived: {
      isLoading: false,
      error: null,
    },
    addedToHistory: {
      isLoading: false,
      error: null,
    },
    deletedFromHistory: {
      isLoading: false,
      error: null,
    },
    favoritesReceived: {
      isLoading: false,
      error: null,
    },
    addedToFavorites: {
      isLoading: false,
      error: null,
    },
    deletedFromFavorites: {
      isLoading: false,
      error: null,
    },
  },
};

export const userSlice = createSlice({
  name: '@@user',
  initialState,
  reducers: {
    userDataCleared: (state) => {
      state.user = null;
      state.favorites = [];
      state.history = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(userDbCreated.pending, (state) => {
      state.meta.userDbCreated.isLoading = true;
      state.meta.userDbCreated.error = null;
    });
    builder.addCase(userDbCreated.rejected, (state, action) => {
      state.meta.userDbCreated.isLoading = false;
      state.meta.userDbCreated.error = action.payload || action.meta.error;
    });
    builder.addCase(userDbCreated.fulfilled, (state, action) => {
      state.user = action.payload;
      state.meta.userDbCreated.isLoading = false;
    });
    builder.addCase(userDataReceived.pending, (state) => {
      state.meta.userDataReceived.isLoading = true;
      state.meta.userDataReceived.error = null;
    });
    builder.addCase(userDataReceived.rejected, (state, action) => {
      state.meta.userDataReceived.isLoading = false;
      state.meta.userDataReceived.error = action.payload || action.meta.error;
    });
    builder.addCase(userDataReceived.fulfilled, (state, action) => {
      state.user = action.payload.user;
      state.favorites = action.payload.favorites;
      state.history = action.payload.history;
      state.meta.userDataReceived.isLoading = false;
    });
    builder.addCase(historyReceived.pending, (state) => {
      state.meta.historyReceived.isLoading = true;
      state.meta.historyReceived.error = null;
    });
    builder.addCase(historyReceived.rejected, (state, action) => {
      state.meta.historyReceived.isLoading = false;
      state.meta.historyReceived.error = action.payload || action.meta.error;
    });
    builder.addCase(historyReceived.fulfilled, (state, action) => {
      state.history = action.payload;
      state.meta.historyReceived.isLoading = false;
    });
    builder.addCase(addedToHistory.pending, (state) => {
      state.meta.addedToHistory.isLoading = true;
      state.meta.addedToHistory.error = null;
    });
    builder.addCase(addedToHistory.rejected, (state, action) => {
      state.meta.addedToHistory.isLoading = false;
      state.meta.addedToHistory.error = action.payload || action.meta.error;
    });
    builder.addCase(addedToHistory.fulfilled, (state) => {
      state.meta.addedToHistory.isLoading = false;
    });
    builder.addCase(deletedFromHistory.pending, (state) => {
      state.meta.deletedFromHistory.isLoading = true;
      state.meta.deletedFromHistory.error = null;
    });
    builder.addCase(deletedFromHistory.rejected, (state, action) => {
      state.meta.deletedFromHistory.isLoading = false;
      state.meta.deletedFromHistory.error = action.payload || action.meta.error;
    });
    builder.addCase(deletedFromHistory.fulfilled, (state) => {
      state.meta.deletedFromHistory.isLoading = false;
    });
    builder.addCase(favoritesReceived.pending, (state) => {
      state.meta.favoritesReceived.isLoading = true;
      state.meta.favoritesReceived.error = null;
    });
    builder.addCase(favoritesReceived.rejected, (state, action) => {
      state.meta.favoritesReceived.isLoading = false;
      state.meta.favoritesReceived.error = action.payload || action.meta.error;
    });
    builder.addCase(favoritesReceived.fulfilled, (state, action) => {
      state.favorites = action.payload;
      state.meta.favoritesReceived.isLoading = false;
    });
    builder.addCase(addedToFavorites.pending, (state) => {
      state.meta.addedToFavorites.isLoading = true;
      state.meta.addedToFavorites.error = null;
    });
    builder.addCase(addedToFavorites.rejected, (state, action) => {
      state.meta.addedToFavorites.isLoading = false;
      state.meta.addedToFavorites.error = action.payload || action.meta.error;
    });
    builder.addCase(addedToFavorites.fulfilled, (state) => {
      state.meta.addedToFavorites.isLoading = false;
    });
    builder.addCase(deletedFromFavorites.pending, (state) => {
      state.meta.deletedFromFavorites.isLoading = true;
      state.meta.deletedFromFavorites.error = null;
    });
    builder.addCase(deletedFromFavorites.rejected, (state, action) => {
      state.meta.deletedFromFavorites.isLoading = false;
      state.meta.deletedFromFavorites.error =
        action.payload || action.meta.error;
    });
    builder.addCase(deletedFromFavorites.fulfilled, (state) => {
      state.meta.deletedFromFavorites.isLoading = false;
    });
  },
});

export const userReducer = userSlice.reducer;
export const { userDataCleared } = userSlice.actions;

export const selectHistory = (state) => state.user.history;
export const selectFavorites = (state) => state.user.favorites;
export const selectIsUserLoading = (state) =>
  state.user.meta.userDataReceived.isLoading;
