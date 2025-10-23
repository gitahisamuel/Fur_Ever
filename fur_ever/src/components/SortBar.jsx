import React from 'react';
import './SortBar.css';


const SortBar = ({ onFilter, onSort }) => {
  return (
    <div className="sort-bar">
      <div className="sort-bar-content">
        {/* Filter by Animal Type - Hardcoded for Animals */}
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

        {/* Sort Animals - Hardcoded for Animals */}
        {/* <div className="sort-section">
          <label>Sort by:</label>
          <select onChange={(e) => onSort(e.target.value)}>
            <option value="name">Name A-Z</option>
            <option value="name-desc">Name Z-A</option>
          </select>
        </div> */}
      </div>
    </div>
  );
};

export default SortBar;