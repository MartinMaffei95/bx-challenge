import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { APICoin, APPCoin, CoinsState, FetchError } from '../../models';
import { adaptCoins } from '../../adapters/coins.adapter';
import {
  getNumberOfPages,
  getPagination,
} from '../../utilities/pagination.util';
import { createOurCoin } from '../../utilities/create-our-coin.service';

const initialState: CoinsState = {
  coins: [],
  coin_selected: {} as APPCoin,
  our_coin: {} as APPCoin,

  total_pages: 0, //5,
  per_page: 10,
  actual_page: 1,
  results_on_page: [], //getPagination(mockResponse, 10, 1), // actual_page= 1 => 0-9 | actual_page= 2 => 10-19 | ...

  loading: false,
  coins_error: null,
  our_coin_error: null,
};

export const coinsSlice = createSlice({
  name: 'Coins',
  initialState: initialState,
  reducers: {
    selectPage: (state, action: PayloadAction<number>) => {
      state.loading = true;

      //Setting the actual page
      state.actual_page = action.payload;
      // Results on actual page
      state.results_on_page = getPagination(
        state.coins,
        state.per_page,
        state.actual_page
      );

      state.loading = false;
    },
    searchCoins: (state, action: PayloadAction<APPCoin[]>) => {
      state.loading = true;
      // Results on actual page
      state.results_on_page = action.payload;

      state.loading = false;
    },
    setOurCoinValues: (state, action: PayloadAction<any>) => {
      state.our_coin = createOurCoin(action.payload);
      state.loading = false;
    },
    getCoins: (state, action: PayloadAction<string>) => {
      action;
      if (state.coins.length <= 0) {
        state.loading = true;
      }
    },
    getCoinsSuccess: (state, action: PayloadAction<APICoin[]>) => {
      // Adapting the results from using on app

      const adaptedCoins = adaptCoins(action.payload);
      state.coins = adaptedCoins;
      // Results on actual page
      state.results_on_page = getPagination(
        adaptedCoins,
        state.per_page,
        state.actual_page
      );
      // Calulating the number of pages
      state.total_pages = getNumberOfPages(state.coins, state.per_page);
      state.loading = false;
    },
    getCoinsError: (state, action: PayloadAction<FetchError>) => {
      switch (action.payload.reqTo) {
        case 'RANDOMNUMBER':
          state.our_coin_error = action.payload.error;
          break;
        case 'COINS':
          state.coins_error = action.payload.error;
          break;
        default:
          break;
      }

      state.loading = false;
    },
    stopGetCoins: (state) => {
      state.loading = false;
    },
  },
});

export const {
  selectPage,
  searchCoins,
  setOurCoinValues,
  getCoins,
  getCoinsSuccess,
  getCoinsError,
  stopGetCoins,
} = coinsSlice.actions;

export default coinsSlice.reducer;
