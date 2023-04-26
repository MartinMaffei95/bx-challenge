// REDUX
import { useDispatch, useSelector } from 'react-redux';
import { getCoins } from '../../redux/slices/Coins.slice';
import { ReduxState } from '../../models';
import Card from '../Card/Card';
import Pagination from '../Pagination/Pagination';

const Dashboard = () => {
  const dispatch = useDispatch();
  const { loading, results_on_page } = useSelector(
    (state: ReduxState) => state.coins
  );
  const getData = () => {
    dispatch(
      getCoins(
        '/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=true&price_change_percentage=1h&locale=en'
      )
    );
  };
  return (
    <div className="bg-slate-900">
      <Pagination />
      Dashboard
      <button
        disabled={loading}
        onClick={getData}
        style={{ background: loading ? 'red' : 'green' }}
      >
        GETTTT
      </button>
      <main className="flex flex-wrap justify-around">
        {results_on_page
          ? results_on_page.map((coin) => <Card coin={coin} />)
          : null}
      </main>
    </div>
  );
};

export default Dashboard;
