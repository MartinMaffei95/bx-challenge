import { AiOutlineReload } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { getCoins } from '../../redux/slices/Coins.slice';

const RetryBtn = () => {
  const dispatch = useDispatch();

  const retry = () => {
    dispatch(
      getCoins(
        '/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=true&price_change_percentage=1h&locale=en'
      )
    );
  };
  return (
    <button
      onClick={retry}
      className="flex border shadow-lg p-2 justify-center items-center"
    >
      Reintentar
      <AiOutlineReload />
    </button>
  );
};

export default RetryBtn;
