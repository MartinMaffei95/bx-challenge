import { ChangeEvent, useState } from 'react';
import { searchResult } from '../../utilities/search-coin-results.util';
import { useSelector } from 'react-redux';
import { ReduxState } from '../../models';

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState<string>('');
  const [searchSelected, setSearchSelected] = useState<boolean>(false);
  const { coins } = useSelector((state: ReduxState) => state.coins);
  const search = (e: ChangeEvent<HTMLInputElement>) => {
    //TODO add delay on change and search
    setSearchValue(e.target.value);
    searchResult(coins, e.target.value);
  };
  return (
    <div className="bg-red-400 relative flex">
      <div className="bg-green-400 relative p-2">
        <input
          onBlur={() => setSearchSelected(false)}
          onFocus={() => setSearchSelected(true)}
          onChange={search}
          value={searchValue}
          type="search"
        />
        <span>Buscar</span>
      </div>
      {searchValue}
      {searchSelected ? (
        <ul className="bg-neutral-200 absolute w-full top-[100%] left-0 p-2">
          <li>RESULT 1</li>
          <li>RESULT 2</li>
          <li>RESULT 3</li>
        </ul>
      ) : null}
    </div>
  );
};

export default SearchBar;
