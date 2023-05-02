import React from 'react';
import { APPCoin, ReduxState } from '../../models';
import ChartComponent from '../chart/ChartTest';
import { useSelector } from 'react-redux';
import { ColoredStat } from '../Card/LastChangesData';
import { BiLineChart, BiLineChartDown } from 'react-icons/bi';
const CoinInformation = ({ coin }: { coin: APPCoin }) => {
  const { light_theme } = useSelector((state: ReduxState) => state.app);

  const DataDisplayer = ({ children }: { children: React.ReactNode }) => {
    return (
      <div className="flex flex-col text-xl data-displayer">{children}</div>
    );
  };

  const ExtraData = ({ text }: { text: string }) => {
    return <span className="little-data"> {text}</span>;
  };
  return (
    <div className="max-h-full flex flex-col">
      <div className="flex flex-col-reverse w-full justify-center items-center sm:flex-row">
        <div className="flex flex-col w-full h-full justify-center items-center py-2">
          <h2 className="text-6xl uppercase font-bold">{coin.symbol}</h2>
          <p className="text-5xl uppercase font-semibold text-neutral-700 dark:text-neutral-400">
            {coin?.name}
          </p>
          <p className="text-5xl uppercase font-bold text-neutral-950 dark:text-neutral-100">
            ${coin?.current_price}
          </p>
        </div>
        <div className="h-full w-full flex justify-center items-center ">
          <img src={coin?.image} alt={`${coin?.name} logo`} />
        </div>
      </div>

      <DataDisplayer>
        <h3>Market Cap</h3>

        <ColoredStat title={'Market Cap:'} value={coin?.market_cap} />
        <ColoredStat
          title={'Market cap :'}
          value={coin?.market_cap_change_24h}
          decorator={<ExtraData text=" *(last 24hs)" />}
        />

        <ColoredStat
          title={'Market cap% :'}
          value={coin?.market_cap_change_percentage_24h}
          decorator={<ExtraData text="% *(last 24hs)" />}
        />
      </DataDisplayer>
      <DataDisplayer>
        <h3>Price Change in last 24hours</h3>

        <ColoredStat title={'Price Change :'} value={coin?.price_change_24h} />

        <ColoredStat
          title={'Price Change% :'}
          value={coin?.price_change_percentage_24h}
          decorator="% *"
        />
        <ColoredStat
          title={'Price Change% :'}
          value={coin?.price_change_percentage_1h_in_currency}
          decorator={<ExtraData text="% *(last hour)" />}
        />
        <div className="flex justify-center items-center">
          <BiLineChart />
          <ColoredStat title={'High peak :'} value={coin?.high_24h} />
        </div>

        <div className="flex justify-center items-center">
          <BiLineChartDown />
          <ColoredStat title={'Low peak :'} value={coin?.low_24h} />
        </div>
      </DataDisplayer>

      <div className="max-h-[40vh] drop-shadow-6xl dark:bg-neutral-900 min-w-full w-full flex flex-col">
        <DataDisplayer>
          <h3>Last 7days</h3>
        </DataDisplayer>

        <ChartComponent
          coinPrices={coin?.sparkline_in_7d?.price}
          barColor={light_theme ? '#7915d1' : '#3bb1d9'}
          linecolor={light_theme ? '#3bb1d9' : '#f01154'}
        />
      </div>
    </div>
  );
};

export default CoinInformation;
