// REDUX
import { useDispatch, useSelector } from 'react-redux';
import { getCoins } from '../../redux/slices/Coins.slice';
import { ReduxState } from '../../models';
import Card from '../Card/Card';

const Dashboard = () => {
  const dispatch = useDispatch();
  const { loading, coins } = useSelector((state: ReduxState) => state.coins);
  const getData = () => {
    dispatch(
      getCoins(
        '/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=11&sparkline=true&price_change_percentage=1h&locale=en'
      )
    );
  };
  return (
    <div>
      Dashboard
      <button
        disabled={loading}
        onClick={getData}
        style={{ background: loading ? 'red' : 'green' }}
      >
        GETTTT
      </button>
      {coins ? coins.map((coin) => <Card coin={coin} />) : null}
    </div>
  );
};

export default Dashboard;
