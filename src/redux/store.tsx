import { configureStore } from '@reduxjs/toolkit';
import CoinsSlice from './slices/Coins.slice';
import { rootEpic } from './$epics/root.epic';
import { createEpicMiddleware } from 'redux-observable';

const epicMiddleware = createEpicMiddleware();

export const store = configureStore({
  reducer: {
    coins: CoinsSlice,
  },
  middleware: [epicMiddleware],
});

epicMiddleware.run(rootEpic);
