import { useEffect } from 'react';
import Header from '../components/Header/Header';
import Dashboard from '../components/Dashboard/Dashboard';
import Loader from '../components/Loader/Loader';
import Modal from '../components/Modal/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { ReduxState } from '../models';
import { getCoins } from '../redux/slices/Coins.slice';
const Layout = () => {
  // Config for Tailwind. this let use "dark:" for dark-mode
  const { light_theme } = useSelector((state: ReduxState) => state.app);
  const htmlDoc = document.documentElement;
  if (light_theme) {
    htmlDoc.classList.remove('dark');
  } else {
    htmlDoc.classList.add('dark');
  }
  const dispatch = useDispatch();

  useEffect(() => {
    // First call
    dispatch(
      getCoins(
        '/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=true&price_change_percentage=1h&locale=en'
      )
    );
    // Repeite the call evenly 2'
    const intervalId = setInterval(() => {
      dispatch(
        getCoins(
          '/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=true&price_change_percentage=1h&locale=en'
        )
      );
    }, 120000);

    //Clean interval
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <Header />
      <Dashboard />
      <Loader />
      <Modal />
    </>
  );
};

export default Layout;
