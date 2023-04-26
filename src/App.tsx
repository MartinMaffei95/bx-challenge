import Dashboard from './components/Dashboard/Dashboard';
import ProviderComponent from './redux/Provider/ProviderComponent';

function App() {
  return (
    <ProviderComponent>
      <Dashboard />
    </ProviderComponent>
  );
}

export default App;
