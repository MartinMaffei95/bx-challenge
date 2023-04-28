import { APPCoin } from '../models';

export const createOurCoin = (values: number[]): APPCoin => {
  const createRandomNumber = () => Math.round(Math.random() * 99);

  const coin: APPCoin = {
    id: 'crypto-com',
    symbol: 'CCOM',
    name: 'CryptoCom',
    image: './logo/Crypto-logo-big_C.png',
    current_price: values[createRandomNumber()],
    market_cap: values[createRandomNumber()],
    market_cap_rank: 1,
    fully_diluted_valuation: null,
    total_volume: values[createRandomNumber()],
    high_24h: values[createRandomNumber()],
    low_24h: values[createRandomNumber()],
    price_change_24h: values[createRandomNumber()],
    price_change_percentage_24h: values[createRandomNumber()],
    market_cap_change_24h: values[createRandomNumber()],
    market_cap_change_percentage_24h: values[createRandomNumber()],
    circulating_supply: values[createRandomNumber()],
    total_supply: null,
    max_supply: null,
    ath: values[createRandomNumber()],
    ath_change_percentage: values[createRandomNumber()],
    ath_date: new Date().toString(),
    atl: values[createRandomNumber()],
    atl_change_percentage: values[createRandomNumber()],
    atl_date: '16/16/16',
    roi: null,
    last_updated: new Date().toString(),
    sparkline_in_7d: {
      price: values,
    },
    price_change_percentage_1h_in_currency: values[createRandomNumber()],
  };

  return coin;
};
