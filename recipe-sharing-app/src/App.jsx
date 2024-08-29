// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeDetails from './components/RecipeDetails'; // Importing the RecipeDetails component

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <h1>Recipe Manager</h1>
        <AddRecipeForm />
        <Routes>
          <Route path="/" element={<RecipeList />} /> {/* Route for the main recipe list */}
          <Route path="/recipe/:recipeId" element={<RecipeDetails />} /> {/* Route for viewing individual recipe details */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
