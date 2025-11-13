import RestaurantPage from './components/RestaurantPage';
import { CategoriesProvider } from './hooks/useCategories';
import { RestaurantMapProvider } from './hooks/useRestaurantsMap';
import { TagsProvider } from './hooks/useTags';
import './styles/App.css';

function App() {
  return <RestaurantMapProvider>
    <TagsProvider>
      <CategoriesProvider>
          <RestaurantPage />
      </CategoriesProvider>
    </TagsProvider>
  </RestaurantMapProvider> 
}

export default App
