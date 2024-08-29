// src/stores/recipeStore.js
import create from 'zustand';

const useRecipeStore = create((set) => ({
  recipes: [],
  favorites: [],
  
  // Action to add a recipe to favorites
  addFavorite: (recipeId) => set((state) => ({
    favorites: [...new Set([...state.favorites, recipeId])], // Ensure no duplicates
  })),

  // Action to remove a recipe from favorites
  removeFavorite: (recipeId) => set((state) => ({
    favorites: state.favorites.filter((id) => id !== recipeId),
  })),

  recommendations: [],
  
  // Mock action to generate personalized recommendations based on favorites
  generateRecommendations: () => set((state) => {
    // Example: Recommend recipes that are not already favorites and share ingredients or type
    const recommended = state.recipes.filter(recipe =>
      !state.favorites.includes(recipe.id) && Math.random() > 0.5 // Mock recommendation logic
    );
    return { recommendations: recommended };
  }),
  
  // Existing actions like addRecipe, updateRecipe, deleteRecipe...
}));

export default useRecipeStore;
