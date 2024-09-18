import React, { useState } from 'react';
import useRecipeStore from './recipeStore';

function SearchBar() {
  const [searchQuery, setSearchQuery] = useState('');
  const { setSearchTerm } = useRecipeStore();

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
    setSearchTerm(event.target.value); // Update the store's searchTerm
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search recipes..."
        value={searchQuery}
        onChange={handleSearch}
      />
    </div>
  );
}

export default SearchBar;