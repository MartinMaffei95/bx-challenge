import { ofType } from 'redux-observable';
import {
  getCoins,
  getCoinsError,
  getCoinsSuccess,
  setOurCoinValues,
} from '../slices/Coins.slice';
import { mergeMap, of, catchError, forkJoin, from } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { APPCoin } from '../../models';
import { Errors } from '../../models/ErrorCodes.enum';

export const fetchCoinEpic = (action$: any) =>
  action$.pipe(
    ofType(getCoins.type),
    mergeMap(({ payload }) =>
      forkJoin(
        ajax.getJSON(`${import.meta.env.VITE_CRYPTO_URI}${payload}`).pipe(
          mergeMap((coins) => of(getCoinsSuccess(coins as APPCoin[]))),
          catchError(() =>
            of(
              getCoinsError({ reqTo: 'COINS', error: Errors['GENERIC_ERROR'] })
            )
          )
        ),
        from(
          fetch(
            `http://www.randomnumberapi.com/api/v1.0/randomredditnumber?min=1000&max=10000&count=100`
          ).then((response) => response.json())
        ).pipe(
          mergeMap((randomNumbers) => of(setOurCoinValues(randomNumbers))),
          catchError(() =>
            of(
              getCoinsError({
                reqTo: 'RANDOMNUMBER',
                error: Errors['GENERIC_ERROR'],
              })
            )
          )
        )
      ).pipe(
        mergeMap((actions) => actions),
        catchError(() =>
          of(getCoinsError({ reqTo: 'BOTH', error: Errors['GENERIC_ERROR'] }))
        )
      )
    )
  );
