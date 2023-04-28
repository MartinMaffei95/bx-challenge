import { ChangeEvent, useEffect, useState } from 'react';
import { searchResult } from '../../utilities/search-coin-results.util';
import { useSelector } from 'react-redux';
import { APPCoin, ReduxState } from '../../models';
import { AiOutlineClose } from 'react-icons/ai';
import { sharingInformationService } from '../../services/sharing-information.service';
const SearchBar = () => {
  const [searchValue, setSearchValue] = useState<string>('');
  const [searchSelected, setSearchSelected] = useState<boolean>(false);
  const [result, setResult] = useState<APPCoin[]>([]);
  const { coins } = useSelector((state: ReduxState) => state.coins);
  const subscription$ = sharingInformationService;

  const search = (e: ChangeEvent<HTMLInputElement>) => {
    //TODO add delay on change and search
    setSearchValue(e.target.value);
    if (e.target.value === '') {
      clearResults();
    }
  };
  const clearResults = () => {
    setSearchValue('');
    setResult([]);
  };

  const openModal = (coin: APPCoin) => {
    subscription$.setSubject({
      modal_open: true,
      coin: coin,
    });
  };

  //Debouncing action
  useEffect(() => {
    if (searchValue === '') return;
    const getData = setTimeout(() => {
      console.log(result);
      setResult(searchResult(coins, searchValue));
    }, 500);
    return () => clearTimeout(getData);
  }, [searchValue]);

  return (
    <div
      className="relative flex z-100 basis-11/12"
      onFocus={() => setSearchSelected(true)}
      // onBlur={() => setSearchSelected(false)}
      onClick={(e) => console.log(e)}
      onMouseLeave={() => setSearchSelected(false)}
      onMouseEnter={() => setSearchSelected(true)}
    >
      <div className=" relative flex gap-2 w-full">
        <input
          onChange={search}
          value={searchValue}
          type="text"
          className={`p-2  w-full  border-none outline-none bg-neutral-100 ${
            result.length > 0 && !!searchValue && searchSelected
              ? 'rounded-b-none rounded-t-lg'
              : 'rounded-full'
          }`}
          placeholder="Busca tu cripto..."
        />
        {result.length > 0 || !!searchValue ? (
          <span
            className="absolute right-0 top-0 h-full flex justi items-center p-2"
            onClick={clearResults}
          >
            <AiOutlineClose />
          </span>
        ) : null}
      </div>
      {searchSelected && result.length > 0 ? (
        <ul className="bg-neutral-100 rounded-b-lg absolute w-full max-h-[30vh] h-80 top-[100%] left-0 overflow-y-scroll z-50">
          <div className="m-auto w-[90%] h-[1px] bg-gradient-to-r from-gray-300 from-10% via-gray-500 via-30% to-gray-300 to-90%"></div>
          {result.map((coin, index) => (
            <li
              className="p-2 z-10 relative flex gap-4 justify-around items-center hover:bg-neutral-100 active:bg-neutral-100 focus:bg-neutral-100"
              key={coin.id}
              autoFocus={index === 0}
              onClick={() => {
                setSearchSelected(false);
                openModal(coin);
              }}
            >
              <div className="basis-1/3 h-8 w-8 flex">
                <img src={coin?.image || ''} alt={`${coin?.name} logo`} />
              </div>
              <p className="basis-1/3 ">{coin.name}</p>
              <p className="basis-1/3 ">${coin.current_price}</p>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};

export default SearchBar;
