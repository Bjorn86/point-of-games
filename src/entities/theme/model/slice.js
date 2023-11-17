import { createSlice } from '@reduxjs/toolkit';
import { loadTheme } from 'features/theme/change-theme/model/load-theme';

const initialState = {
  theme: 'light',
  isLoading: false,
};

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
export const selectTheme = (state) => state.theme.theme;
