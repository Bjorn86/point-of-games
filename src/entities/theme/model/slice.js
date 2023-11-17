// IMPORT PACKAGES
import { createSlice } from '@reduxjs/toolkit';

// IMPORT THUNKS
import { loadTheme } from 'features/theme/change-theme/model/load-theme';

// INITIAL STATE
const initialState = {
  theme: 'light',
  isLoading: false,
};

// THEME SLICE
const themeSlice = createSlice({
  name: '@@theme',
  initialState,
  reducers: {
    changeTheme: (state, action) => {
      state.theme = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loadTheme.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(loadTheme.fulfilled, (state, action) => {
      state.theme = action.payload;
      state.isLoading = false;
    });
  },
});

export const { changeTheme } = themeSlice.actions;
export const themeReducer = themeSlice.reducer;

// SELECTORS
export const selectTheme = (state) => state.theme.theme;
