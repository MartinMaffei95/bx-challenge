// REDUX
import { useSelector } from 'react-redux';

import { ReduxState } from '../../models';
import Card from '../Card/Card';
import Pagination from '../Pagination/Pagination';
import SearchBar from '../SearchBar/SearchBar';
import { useResize } from '../../Hooks/useResize';

const Dashboard = () => {
  const { isPhone } = useResize();

  const { our_coin, results_on_page, our_coin_error, coins_error } =
    useSelector((state: ReduxState) => state.coins);

  return (
    <div className="font-roboto-condensed bg-slate-200 min-h-screen flex flex-col mt-16 dark:bg-slate-800 ">
      {!isPhone ? null : (
        <div className="p-4">
          <SearchBar />
        </div>
      )}

      <Pagination />
      <main className="flex flex-wrap w-full h-full justify-around p-4 gap-4 dark:text-neutral-100">
        {our_coin?.name ? (
          <div className="flex flex-col h-full w-full  sm:flex-row gap-2">
            <div className=" flex  w-full flex-col sm:basis-1/3 mt-4">
              <div className="flex flex-col justify-center items-center">
                <h3 className="text-4xl font-extrabold uppercase  bg-clip-text text-transparent bg-gradient-to-br from-yellow-400 to-green-500">
                  CryptoCom
                </h3>
                <span className="text-md text-center tracking-widest uppercase font-semibold bg-clip-text text-transparent bg-gradient-to-b from-slate-500 to-slate-900 dark:from-slate-400 dark:to-slate-200 font-staatliches ">
                  La crypto mas estable del mercado
                </span>
              </div>
              <p className="text-center">
                Te presentamos nuestra nueva cryptomoneda!
              </p>
              {/* <div className="p-6 w-full  flex justify-center items-center">
                <img src="./logo/Crypto-logo-big_C.png" alt="CryptoCom logo" />
              </div> */}
            </div>
            <Card
              favoriteIcon
              extraCss="sm:basis-2/3 max-w-full shadow-lg shadow-blue-500 dark:shadow-lg dark:shadow-yellow-400"
              coin={our_coin}
            />
          </div>
        ) : our_coin_error ? (
          <div>
            Ocurrio un error mientras obteniamos los datos de nuestra moneda{' '}
            {':('}
          </div>
        ) : null}

        {results_on_page.length > 0 ? (
          results_on_page?.map((coin) => <Card key={coin?.id} coin={coin} />)
        ) : coins_error ? (
          <div className="bg-red-600 w-full h-full">
            Ocurrio un error mientras obteniamos los datos {':('}
          </div>
        ) : (
          <div>No tenemos informacion para mostrar</div>
        )}
      </main>
    </div>
  );
};

export default Dashboard;
