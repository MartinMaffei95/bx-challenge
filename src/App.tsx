import Layout from './layout/Layout';
import ProviderComponent from './redux/Provider/ProviderComponent';

function App() {
  return (
    <ProviderComponent>
      <Layout />
    </ProviderComponent>
  );
}

export default App;
