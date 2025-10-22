import React from 'react';


const SortBar = () => {
  return (
    <div className="sort-bar">
      
      
      <div className="filter-section">
        <label>Filter by Type:</label>
        <select>
          <option value="">All Animals</option>
          <option value="Dog">Dogs</option>
          <option value="Cat">Cats</option>
        </select>
      </div>
      
      
    </div>
  );
};

export default SortBar;