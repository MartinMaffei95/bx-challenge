import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { AppState } from '../../models';

const initialState: AppState = {
  loading: false,
  light_theme: true,
  dashboard_style: 'GRID',
};

export const appSlice = createSlice({
  name: 'AppSettings',
  initialState: initialState,
  reducers: {
    switchTheme: (state, action: PayloadAction<boolean>) => {
      state.light_theme = action.payload;
    },
  },
});

export const { switchTheme } = appSlice.actions;

export default appSlice.reducer;
