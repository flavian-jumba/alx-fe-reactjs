import { useState } from 'react';
import { useParams } from 'react-router-dom';
import useRecipeStore from './recipeStore';

function EditRecipeForm() {
  const { id } = useParams();
  const { recipes, updateRecipe } = useRecipeStore();
  const recipe = recipes.find((r) => r.id === id);

  const [title, setTitle] = useState(recipe.title);
  const [description, setDescription] = useState(recipe.description);

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    updateRecipe(id, { title, description });
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* ... form fields for editing title and description */}
      <button type="submit">Save Changes</button>
    </form>
  );
}

export default EditRecipeForm;