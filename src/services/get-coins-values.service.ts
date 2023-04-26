import { adaptCoins } from '../adapters/coins.adapter';
import { APPCoin } from '../models';

export const getCoins = async (): Promise<APPCoin[]> => {
  try {
    const res = await fetch(
      `${
        import.meta.env.VITE_CRYPTO_URI
      }/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en`
    );
    const data = await res.json();
    const adaptedData = adaptCoins(data);
    return adaptedData;
  } catch (e) {
    throw new Error('Error fetching');
  }
};
