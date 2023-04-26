///coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en

import { APPCoin } from '../../models';
import ChartComponent from '../chart/ChartTest';

type Props = {
  coin: APPCoin;
};
const Card = ({ coin }: Props) => {
  const CoinIdentityData = () => {
    return (
      <div className="flex flex-col">
        <div className="flex">
          <div className="h-16 w-16">
            <img src={coin?.image || ''} alt={`${coin.name} logo`} />
          </div>
          <div>
            <span>{coin.name} </span>
            <span> - </span>
            <span>{coin.symbol}</span>
          </div>
        </div>
        <div>
          <p className="text-lg">{coin.current_price}</p>
        </div>
      </div>
    );
  };

  const LastChangesData = () => {
    return (
      <div className=" last_changes-container text-blue-100">
        <ColoredStat title={'MC'} value={coin.market_cap} />

        <ColoredStat
          title={'Last 24hou  (in percent)'}
          value={coin.price_change_percentage_24h}
          decorator="%"
        />
        <div className="flex ">
          <ColoredStat title={'Last 24hour'} value={coin.price_change_24h} />
          <ColoredStat
            title={'Last hour'}
            value={coin.price_change_percentage_1h_in_currency}
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
      <div>
        <p>{title}</p>
        <p className={`${value >= 0 ? 'text-green-500' : 'text-red-500'}`}>
          {value}
          {decorator && decorator}
        </p>
      </div>
    );
  };
  return (
    <div className="bg-blue-900 text-neutral-50 rounded m-2 shadow-neutral-400 shadow-lg flex justify-between gap-4 overflow-hidden max-w-full flex-col">
      <div className="flex justify-between">
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
