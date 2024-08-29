// src/components/RecipeList.jsx
import { useRecipeStore } from './recipeStore';
import { Link } from 'react-router-dom'; // Importing Link from react-router-dom

const RecipeList = () => {
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);

  return (
    <div>
      {filteredRecipes.map((recipe) => (
        <div key={recipe.id}>
          <h3>
            <Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link> {/* Adding Link to navigate to recipe details */}
          </h3>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
