import React from 'react';
import './SortBar.css';


const SortBar = ({ onFilter,}) => {
  return (
    <div className="sort-bar">
      <div className="sort-bar-content">
        <div className="filter-section">
          <label>Filter by:</label>
          <select onChange={(e) => onFilter(e.target.value)}>
            <option value="all">All Animals</option>
            <option value="Dog">Dogs</option>
            <option value="Cat">Cats</option>
            <option value="Rabbit">Rabbits</option>
            <option value="Bird">Birds</option>
            <option value="Guinea Pig">Guinea Pigs</option>
            <option value="Snake">Snakes</option>
            <option value="Mouse">Mice</option>
          </select>
        </div>

        
      </div>
    </div>
  );
};

export default SortBar;