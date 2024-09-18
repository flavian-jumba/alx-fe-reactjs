import { useNavigate } from 'react-router-dom';
import useRecipeStore from './recipeStore';

function DeleteRecipeButton({ id }) {
  const { deleteRecipe } = useRecipeStore();
  const navigate = useNavigate();

  const handleDelete = () => {
    deleteRecipe(id);
    navigate('/recipes'); // Redirect to the recipe list after deletion
  };

  return (
    <button onClick={handleDelete}>Delete</button>
  );
}

export default DeleteRecipeButton;