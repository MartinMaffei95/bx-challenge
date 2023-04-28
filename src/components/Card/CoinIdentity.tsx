type CoinIdentityType = {
  image: string;
  name: string;
  symbol: string;
  current_price: number;
};
const CoinIdentityData = ({
  image,
  name,
  symbol,
  current_price,
}: CoinIdentityType) => {
  return (
    <div className="flex flex-col basis-3/4 items-center justify-center   shadow-md shadow-neutral-400 sm:shadow-none dark:shadow-none overflow-hidden">
      <div className="flex  items-center w-full justify-center gap-4 md:justify-around">
        <div className="h-16 w-16">
          <img src={image || ''} alt={`${name} logo`} />
        </div>
        <div className="flex flex-col items-center justify-center">
          <span className="font-semibold text-xl text-neutral-600  dark:text-gray-400">
            {name}{' '}
          </span>
          <span className="font-bold text-4xl uppercase ">{symbol}</span>
        </div>
      </div>
      <p className="w-full text-6xl font-bold truncate text-center">
        ${current_price}
      </p>
    </div>
  );
};

export default CoinIdentityData;
