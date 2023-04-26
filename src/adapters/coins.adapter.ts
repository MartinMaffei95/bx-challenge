import { APICoin, APPCoin } from '../models';

export const adaptCoins = (coins: APICoin[]): APPCoin[] => {
  const adaptedData: APICoin[] = [];

  coins.forEach((coin) => {
    const data: APPCoin = {
      id: coin?.id,
      symbol: coin?.symbol,
      name: coin?.name,
      image: coin?.image,
      current_price: coin?.current_price,
      market_cap: coin?.market_cap,
      market_cap_rank: coin?.market_cap_rank,
      fully_diluted_valuation: coin?.fully_diluted_valuation,
      total_volume: coin?.total_volume,
      high_24h: coin?.high_24h,
      low_24h: coin?.low_24h,
      price_change_24h: coin?.price_change_24h,
      price_change_percentage_24h: coin?.price_change_percentage_24h,
      market_cap_change_24h: coin?.market_cap_change_24h,
      market_cap_change_percentage_24h: coin?.market_cap_change_percentage_24h,
      circulating_supply: coin?.circulating_supply,
      total_supply: coin?.total_supply,
      max_supply: coin?.max_supply,
      ath: coin?.ath,
      ath_change_percentage: coin?.ath_change_percentage,
      ath_date: coin?.ath_date,
      atl: coin?.atl,
      atl_change_percentage: coin?.atl_change_percentage,
      atl_date: coin?.atl_date,
      roi: coin?.roi,
      last_updated: coin?.last_updated,
      sparkline_in_7d: coin?.sparkline_in_7d,
      price_change_percentage_1h_in_currency:
        coin?.price_change_percentage_1h_in_currency,
    };

    adaptedData.push(data);
  });

  return adaptedData;
};
