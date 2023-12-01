import { createSlice } from '@reduxjs/toolkit';
import { themeLoaded } from 'features/theme/change-theme/model/theme-loaded';

const initialState = {
  theme: 'light',
  isLoading: false,
};

const themeSlice = createSlice({
  name: '@@theme',
  initialState,
  reducers: {
    themeToggled: (state, action) => {
      state.theme = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(themeLoaded.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(themeLoaded.fulfilled, (state, action) => {
      state.theme = action.payload;
      state.isLoading = false;
    });
  },
});

export const { themeToggled } = themeSlice.actions;
export const themeReducer = themeSlice.reducer;
export const selectTheme = (state) => state.theme.theme;
