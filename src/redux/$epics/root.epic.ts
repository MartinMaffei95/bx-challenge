import { combineEpics } from 'redux-observable';
import { fetchCoinEpic } from './fetchCoins.epic';

export const rootEpic = combineEpics(fetchCoinEpic);
