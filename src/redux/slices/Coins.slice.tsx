import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { APICoin, APPCoin, CoinsState } from '../../models';
import { adaptCoins } from '../../adapters/coins.adapter';
import { mockResponse } from '../../mock_response';
import {
  getNumberOfPages,
  getPagination,
} from '../../utilities/pagination.util';

const initialState: CoinsState = {
  coins: mockResponse,
  coin_selected: {} as APPCoin,

  total_pages: 5,
  per_page: 10,
  actual_page: 1,
  results_on_page: getPagination(mockResponse, 10, 1), // actual_page= 1 => 0-9 | actual_page= 2 => 10-19 | ...

  loading: false,
};

export const coinsSlice = createSlice({
  name: 'Coins',
  initialState: initialState,
  reducers: {
    selectPage: (state, action: PayloadAction<number>) => {
      state.loading = true;

      state.actual_page = action.payload;
      state.results_on_page = getPagination(
        state.coins,
        state.per_page,
        state.actual_page
      );
      state.loading = false;
    },
    getCoins: (state, action: PayloadAction<string>) => {
      console.log('GET ACTION==>>>', action);
      state.loading = true;
    },
    getCoinsSuccess: (state, action: PayloadAction<APICoin[]>) => {
      console.log('SUCCESS ACTION==>>>', action);
      const adaptedCoins = adaptCoins(action.payload);
      state.coins = adaptedCoins;
      state.results_on_page = getPagination(
        adaptedCoins,
        state.per_page,
        state.actual_page
      );
      state.total_pages = getNumberOfPages(state.coins, state.per_page);
      state.loading = false;
    },
    getCoinsError: (state, action: PayloadAction<string>) => {
      console.log('ERROR ACTION==>>>', action);

      state.loading = false;
    },
    stopGetCoins: (state) => {
      state.loading = false;
    },
  },
});

export const {
  selectPage,
  getCoins,
  getCoinsSuccess,
  getCoinsError,
  stopGetCoins,
} = coinsSlice.actions;

export default coinsSlice.reducer;
