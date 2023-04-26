import Dashboard from './components/Dashboard/Dashboard';
import Header from './components/Header/Header';
import ProviderComponent from './redux/Provider/ProviderComponent';

function App() {
  return (
    <ProviderComponent>
      <Header />
      <Dashboard />
    </ProviderComponent>
  );
}

export default App;
