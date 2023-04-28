import { sliceNumber } from '../../utilities/slice-numbers.util';

type Props = {
  market_cap: number;
  price_change_percentage_24h: number;
  price_change_24h: number;
  price_change_percentage_1h_in_currency: number;
};
const LastChangesData = ({
  market_cap,
  price_change_percentage_24h,
  price_change_24h,
  price_change_percentage_1h_in_currency,
}: Props) => {
  return (
    <div className=" last_changes-container text-blue-100  basis-1/4  ">
      <ColoredStat
        title={'MC'}
        value={market_cap}
        extraStyle=" shadow-md shadow-neutral-400 dark:shadow-green-400"
      />

      <ColoredStat
        title={'Last 24hours  (in percent)'}
        value={sliceNumber(price_change_percentage_24h, 4)}
        decorator="%"
        extraStyle=" shadow-md shadow-neutral-400 dark:shadow-green-400 "
      />
      <div className="flex w-full h-full  shadow-md shadow-neutral-400 dark:shadow-green-400  items-center justify-around">
        <ColoredStat
          title={'Last 24hours'}
          value={sliceNumber(price_change_24h)}
        />
        <ColoredStat
          title={'Last hour'}
          value={sliceNumber(price_change_percentage_1h_in_currency)}
        />
      </div>
    </div>
  );
};
export const ColoredStat = ({
  title,
  value,
  decorator,
  extraStyle,
}: {
  title: string;
  value: number;
  decorator?: string;
  extraStyle?: string;
}) => {
  return (
    <div className={`flex flex-col w-full ${extraStyle ? extraStyle : ''}`}>
      <p className="text-neutral-700 dark:text-neutral-400 font-bold text-xs self-start ">
        {title}
      </p>
      <p
        className={`text-lg font-bold ${
          value >= 0
            ? 'text-green-800 dark:text-green-500'
            : 'text-red-800 dark:text-red-500'
        }`}
      >
        {value}
        {decorator && decorator}
      </p>
    </div>
  );
};

export default LastChangesData;
