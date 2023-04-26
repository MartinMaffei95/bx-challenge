import Dashboard from './components/Dashboard/Dashboard';
import Header from './components/Header/Header';
import Loader from './components/Loader/Loader';
import ProviderComponent from './redux/Provider/ProviderComponent';

function App() {
  return (
    <ProviderComponent>
      <Header />
      <Dashboard />
      <Loader />
    </ProviderComponent>
  );
}

export default App;
