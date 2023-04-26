import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { APICoin, APPCoin, AppState, CoinsState } from '../../models';

const initialState: AppState = {
  loading: false,
  dark_theme: true,
  dashboard_style: 'GRID',
};

export const appSlice = createSlice({
  name: 'AppSettings',
  initialState: initialState,
  reducers: {
    changeTheme: (state, action: PayloadAction<string>) => {
      console.log('GET ACTION==>>>', action);
      state.loading = true;
    },
  },
});

export const { changeTheme } = appSlice.actions;

export default appSlice.reducer;
