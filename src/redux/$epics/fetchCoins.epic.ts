import { ofType } from 'redux-observable';
import {
  getCoins,
  getCoinsError,
  getCoinsSuccess,
} from '../slices/Coins.slice';
import { map, mergeMap, of, catchError, delay } from 'rxjs';
import { ajax } from 'rxjs/ajax';

export const fetchCoinEpic = (action$: any) =>
  action$.pipe(
    ofType(getCoins.type),
    mergeMap(({ payload }) =>
      ajax.getJSON(`${import.meta.env.VITE_CRYPTO_URI}${payload}`).pipe(
        delay(2000),
        map((res: any) => getCoinsSuccess(res)),
        catchError((error) => of(getCoinsError('ocurrion un error')))
      )
    )
  );
///coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en
