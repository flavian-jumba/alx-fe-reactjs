import React, { useState, useEffect } from 'react';

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch('/data.json')
      .then((response) => response.json())
      .then((data) => setRecipes(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Recipe Sharing Platform</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="bg-white rounded-lg shadow-md p-4">
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-40 object-cover mb-4 rounded"
            />
            <h2 className="text-xl font-semibold">{recipe.title}</h2>
            <p className="text-gray-700">{recipe.summary}</p>
            <a href={`/recipe/${recipe.id}`} className="text-blue-500 hover:underline mt-2 inline-block">
              View Recipe
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
