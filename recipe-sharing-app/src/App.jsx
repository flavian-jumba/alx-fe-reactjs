// src/App.jsx
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';

const App = () => {
  return (
    <div className="app-container">
      <h1>Recipe Manager</h1>
      <AddRecipeForm />
      <RecipeList />
    </div>
  );
};

export default App;
