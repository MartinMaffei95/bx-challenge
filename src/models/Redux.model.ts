import { APPCoin, Errors } from '.';

export interface ReduxState {
  coins: CoinsState;
  app: AppState;
}

export interface CoinsState {
  //coinsState
  coins: APPCoin[];
  coin_selected: APPCoin;
  our_coin: APPCoin;

  //pagesSettings
  total_pages: number;
  per_page: number;
  actual_page: number;
  results_on_page: APPCoin[];

  //loginState
  loading: boolean;

  //errorStates
  coins_error: Errors | null;
  our_coin_error: Errors | null;
}
export interface AppState {
  loading: boolean;
  light_theme: boolean;
  dashboard_style: 'GRID' | 'ROWS';
}
