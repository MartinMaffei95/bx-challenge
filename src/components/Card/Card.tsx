///coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en

import { APPCoin } from '../../models';
import { sliceNumber } from '../../utilities/slice-numbers.util';
import ChartComponent from '../chart/ChartTest';

type Props = {
  coin: APPCoin;
};
const Card = ({ coin }: Props) => {
  const CoinIdentityData = () => {
    return (
      <div className="flex flex-col basis-2/4 items-center justify-center ">
        <div className="flex justify-around items-center w-full">
          <div className="h-16 w-16">
            <img src={coin?.image || ''} alt={`${coin.name} logo`} />
          </div>
          <div className="flex flex-col items-center justify-center">
            <span className="font-semibold text-xl text-gray-300">
              {coin.name}{' '}
            </span>
            <span className="font-bold text-4xl uppercase ">{coin.symbol}</span>
          </div>
        </div>
        <div>
          <p className="w-full text-6xl font-bold">${coin.current_price}</p>
        </div>
      </div>
    );
  };

  const LastChangesData = () => {
    return (
      <div className=" last_changes-container text-blue-100 basis-2/4">
        <ColoredStat title={'MC'} value={coin.market_cap} />

        <ColoredStat
          title={'Last 24hours  (in percent)'}
          value={sliceNumber(coin.price_change_percentage_24h, 4)}
          decorator="%"
        />
        <div className="flex w-full">
          <ColoredStat title={'Last 24hours'} value={coin.price_change_24h} />
          <ColoredStat
            title={'Last hour'}
            value={sliceNumber(coin.price_change_percentage_1h_in_currency)}
          />
        </div>
      </div>
    );
  };
  const ColoredStat = ({
    title,
    value,
    decorator,
  }: {
    title: string;
    value: number;
    decorator?: string;
  }) => {
    return (
      <div className="flex flex-col w-full">
        <p className="font-bold text-xs self-start">{title}</p>
        <p
          className={`text-lg font-bold ${
            value >= 0 ? 'text-green-500' : 'text-red-500'
          }`}
        >
          {value}
          {decorator && decorator}
        </p>
      </div>
    );
  };
  return (
    <div className="bg-blue-900 text-neutral-50 rounded m-2 shadow-neutral-400 shadow flex justify-between overflow-hidden flex-col w-[45vw] relative">
      <div className="w-8 h-8 absolute top-0 left-0 bg-neutral-900 flex justify-center items-center rounded-br text-lg font-bold ">
        {coin.market_cap_rank}
      </div>

      <div className="flex w-full h-full ">
        <CoinIdentityData />
        <LastChangesData />
      </div>
      <div className="max-h-[40%] bg-neutral-900 w-full flex">
        <ChartComponent
          coinPrices={coin.sparkline_in_7d.price}
          barColor={'#3bb1d9'}
          linecolor={'#f01154'}
        />
      </div>
    </div>
  );
};

export default Card;
