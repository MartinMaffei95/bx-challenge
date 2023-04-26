import { APPCoin } from '../models';

const getFirstIndex = (per_page: number, actual_page: number): number => {
  const firstIndex = per_page * (actual_page - 1);
  return firstIndex;
};
const getLastIndex = (per_page: number, actual_page: number) => {
  const lastIndex = per_page * actual_page;
  return lastIndex;
};

export const getPagination = (
  all_results: APPCoin[],
  per_page: number,
  actual_page: number
): APPCoin[] => {
  let results: APPCoin[] = [];

  const FirstIndex = getFirstIndex(per_page, actual_page);
  const LastIndex = getLastIndex(per_page, actual_page);
  console.log(FirstIndex, LastIndex);
  results = all_results.slice(FirstIndex, LastIndex);

  return results;
};

export const getNumberOfPages = (
  all_results: APPCoin[],
  per_page: number
): number => {
  const howItems: number = all_results.length;

  const divi = howItems / per_page; // 50/10 = 5 | 25/10 = 3 |39 /10 = 4
  console.log(howItems, per_page, divi);
  const res = divi - Math.floor(divi) !== 0;
  if (res) {
    console.log(divi);
    return divi + 1;
  } else {
    console.log(divi);
    return divi;
  }
};
