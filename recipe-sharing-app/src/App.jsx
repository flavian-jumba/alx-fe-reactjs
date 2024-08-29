// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeDetails from './components/RecipeDetails';
import SearchBar from './components/SearchBar';
import FavoritesList from './components/FavoritesList'; // Importing FavoritesList
import RecommendationsList from './components/RecommendationsList'; // Importing RecommendationsList

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <h1>Recipe Manager</h1>
        <SearchBar />
        <AddRecipeForm />
        <FavoritesList /> {/* Display user's favorite recipes */}
        <RecommendationsList /> {/* Display personalized recommendations */}
        <Routes>
          <Route path="/" element={<RecipeList />} />
          <Route path="/recipe/:recipeId" element={<RecipeDetails />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
