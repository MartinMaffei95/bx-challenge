import { APPCoin } from '.';

export interface ReduxState {
  coins: CoinsState;
}

export interface CoinsState {
  //coinsState
  coins: APPCoin[];
  coin_selected: APPCoin;

  //pagesSettings
  total_pages: number;
  per_page: number;
  actual_page: number;
  results_on_page: APPCoin[];

  //loginState
  loading: boolean;
}
export interface AppState {
  loading: boolean;
  dark_theme: boolean;
  dashboard_style: 'GRID' | 'ROWS';
}
