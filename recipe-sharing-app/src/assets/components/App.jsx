// src/App.jsx
import RecipeList from './RecipeList';
import AddRecipeForm from './AddRecipeForm';

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
