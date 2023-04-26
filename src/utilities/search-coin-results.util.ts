import { APPCoin } from '../models';

export const searchResult = (
  allCoins: APPCoin[],
  parameter: string
): APPCoin[] => {
  let result: APPCoin[] = [];

  result = allCoins.filter((coin) => {
    return Object.values(coin).some((val) => {
      return typeof val === 'string' && val.includes(parameter);
    });
  });
  console.log(result);
  return result;
};
