import { APPCoin } from '.';

export interface ReduxState {
  coins: CoinsState;
}

export interface CoinsState {
  coins: APPCoin[];
  coin_selected: APPCoin;
  loading: boolean;
}
