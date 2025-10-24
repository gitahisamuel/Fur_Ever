import React from 'react';
import { Link } from 'react-router-dom';
import './AnimalCard.css';

const AnimalCard = ({ animal }) => {
  const { id, name, type, breed, age, image, description, available } = animal;

  return (
    <div className="animal-card">
      <div className="image-container">
        <img src={image} alt={name} className="animal-image" />
      </div>
      
      <div className="animal-info">
        <h3 className="pet-name">{name}</h3>
        <p className="pet-detail"><strong>Type:</strong> {type}</p>
        <p className="pet-detail"><strong>Breed:</strong> {breed}</p>
        <p className="pet-detail"><strong>Age:</strong> {age}</p>
        
        <p className="pet-description">"{description}"</p>
        
       
        
        <div className="animal-actions">

        

          <Link to={`/adopt/${id}`}>
            <button className="adopt-btn">
              Adopt {name}
            </button>
          </Link>
          
          

          <Link to="/donate">
            <button className="donate-btn">
              Donate for {name}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AnimalCard;