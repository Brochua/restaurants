import RestaurantPage from './components/RestaurantPage';
import { RestaurantMapProvider } from './hooks/useRestaurantsMap';
import './styles/App.css';

function App() {
  return <RestaurantMapProvider>
    <RestaurantPage />
  </RestaurantMapProvider> 
}

export default App
