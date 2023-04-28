///coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en
import { BiLinkExternal } from 'react-icons/bi';
import { AiFillStar } from 'react-icons/ai';
import { APPCoin } from '../../models';
import ChartComponent from '../chart/ChartTest';
import CoinIdentityData from './CoinIdentity';
import { useSelector } from 'react-redux';
import { ReduxState } from '../../models';
import LastChangesData from './LastChangesData';
import { sharingInformationService } from '../../services/sharing-information.service';
type Props = {
  coin: APPCoin;
  extraCss?: string;
  favoriteIcon?: boolean;
};
const Card = ({ coin, extraCss, favoriteIcon = false }: Props) => {
  const { light_theme } = useSelector((state: ReduxState) => state.app);
  const subscription$ = sharingInformationService;

  const openModal = (coin: APPCoin) => {
    subscription$.setSubject({
      modal_open: true,
      coin: coin,
    });
  };
  return (
    <div
      className={`${extraCss} rounded shadow-md dark:shadow shadow-neutral-700 dark:shadow-neutral-400  flex justify-between overflow-hidden flex-col relative  w-full md:w-[45vw] text-neutral-900  bg-slate-300 dark:bg-neutral-950 dark:text-neutral-50  `}
    >
      <div className="absolute top-0 left-0 dark:bg-neutral-900 flex flex-col justify-center items-center rounded-br text-lg font-bold p-2 gap-2 sm:flex-row">
        {!favoriteIcon ? (
          coin?.market_cap_rank
        ) : (
          <AiFillStar className="text-2xl text-blue-500 dark:text-yellow-400" />
        )}
        <div
          onClick={() => openModal(coin)}
          className="flex justify-center items-center "
        >
          <BiLinkExternal className="text-2xl " />
        </div>
      </div>

      <div className="flex w-full h-full flex-col gap-4 sm:flex-row sm:gap-0 ">
        <CoinIdentityData
          image={coin?.image}
          name={coin?.name}
          symbol={coin?.symbol}
          current_price={coin?.current_price}
        />
        <LastChangesData
          market_cap={coin?.market_cap}
          price_change_percentage_24h={coin?.price_change_percentage_24h}
          price_change_24h={coin?.price_change_24h}
          price_change_percentage_1h_in_currency={
            coin?.price_change_percentage_1h_in_currency
          }
        />
      </div>
      <div className="max-h-[40%] drop-shadow-6xl dark:bg-neutral-900 w-full flex">
        <ChartComponent
          coinPrices={coin?.sparkline_in_7d?.price}
          barColor={light_theme ? '#7915d1' : '#3bb1d9'}
          linecolor={light_theme ? '#3bb1d9' : '#f01154'}
        />
      </div>
    </div>
  );
};

export default Card;
