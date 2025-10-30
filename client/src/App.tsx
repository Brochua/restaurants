import RestaurantList from './components/RestaurantList';
import { RestaurantMapProvider } from './hooks/useRestaurantsMap';
import './styles/App.css';

function App() {
  return <RestaurantMapProvider>
    <RestaurantList />
  </RestaurantMapProvider> 
}

export default App
