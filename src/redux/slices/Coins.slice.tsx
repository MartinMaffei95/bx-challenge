import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { APICoin, APPCoin, CoinsState } from '../../models';
import { adaptCoins } from '../../adapters/coins.adapter';
import { mockResponse } from '../../mock_response';

const initialState: CoinsState = {
  coins: mockResponse,
  coin_selected: {} as APPCoin,
  loading: false,
};

export const coinsSlice = createSlice({
  name: 'Coins',
  initialState: initialState,
  reducers: {
    getCoins: (state, action: PayloadAction<string>) => {
      console.log('GET ACTION==>>>', action);
      state.loading = true;
    },
    getCoinsSuccess: (state, action: PayloadAction<APICoin[]>) => {
      console.log('SUCCESS ACTION==>>>', action);
      state.coins = adaptCoins(action.payload);
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

export const { getCoins, getCoinsSuccess, getCoinsError, stopGetCoins } =
  coinsSlice.actions;

export default coinsSlice.reducer;
