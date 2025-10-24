import React, { useState, useEffect } from 'react';
import AnimalCard from '../components/AnimalCard';
import SortBar from '../components/SortBar'; 
import './Animals.css';


const Animals = () => {
  const [animals, setAnimals] = useState([]);
  const [filteredAnimals, setFilteredAnimals] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/animals')
      .then(response => response.json())
      .then(data => {
        setAnimals(data);
        setFilteredAnimals(data);
      });
  }, []);


  const handleFilter = (filterType) => {
    if (filterType === 'all') {
      setFilteredAnimals(animals);
    } else {
      const filtered = animals.filter(animal => animal.type === filterType);
      setFilteredAnimals(filtered);
    }
  };


  const handleSort = (sortType) => {
    const animalsToSort = [...filteredAnimals];
    
    if (sortType === 'name') {
      animalsToSort.sort((a, b) => a.name.localeCompare(b.name));
    } 
    else if (sortType === 'name-desc') {
      animalsToSort.sort((a, b) => b.name.localeCompare(a.name));
    }
    
    setFilteredAnimals(animalsToSort);
  };

  return (
    <div className="animals-page">
      <div className="animals-header">
        <h1>Meet Our Friends 🐾</h1>
        <p>Find your perfect furry companion</p>
      </div>

      
      <SortBar onFilter={handleFilter} onSort={handleSort} />

      <div className="animals-grid">
        {filteredAnimals.map(animal => (
          <AnimalCard key={animal.id} animal={animal} />
        ))}
      </div>
    </div>
  );
};

export default Animals;