import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import useRecipeStore from '../store/recipeStore'
import EditRecipeForm from './EditRecipeForm'

const RecipeDetails = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const recipe = useRecipeStore((state) => 
    state.recipes.find((recipe) => recipe.id === parseInt(id))
  )
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe)
  const addFavorite = useRecipeStore((state) => state.addFavorite)
  const removeFavorite = useRecipeStore((state) => state.removeFavorite)
  const favorites = useRecipeStore((state) => state.favorites)

  if (!recipe) {
    return <div>Recipe not found</div>
  }

  const handleDelete = () => {
    deleteRecipe(recipe.id)
    navigate('/')
  }

  const isFavorite = favorites.includes(recipe.id)

  const handleFavorite = () => {
    if (isFavorite) {
      removeFavorite(recipe.id)
    } else {
      addFavorite(recipe.id)
    }
  }

  return (
    <div className="recipe-details">
      <h2>{recipe.title}</h2>
      <p>{recipe.description}</p>
      <button onClick={handleFavorite}>
        {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
      </button>
      <EditRecipeForm recipe={recipe} />
      <button onClick={handleDelete} className="delete-button">Delete Recipe</button>
    </div>
  );
}

export default RecipeDetails;