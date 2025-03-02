import React from 'react';
import useRecipeStore from '../store/recipeStore';

const SearchBar = () => {
  const setSearchTerm = useRecipeStore((state) => state.setSearchTerm);

  return (
    <input
      type="text"
      placeholder="Search recipes..."
      onChange={(e) => setSearchTerm(e.target.value)}
      style={{
        width: '100%',
        padding: '10px',
        marginBottom: '20px',
        borderRadius: '4px',
        border: '1px solid #ccc',
        fontSize: '16px',
      }}
    />
  );
};

export default SearchBar;