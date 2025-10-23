import React from 'react';


const AnimalCard = ({ animal }) => {
  const { name, type, breed, age, image, description, available } = animal;

  return (
    <div className="animal-card">
      <div className="image-container">
        <img 
          src={image} 
          alt={name} 
          className="animal-image"
        />
      </div>
      
      <div className="animal-info">
        <h3 className="pet-name">{name}</h3>
        <p className="pet-detail"><strong>Type:</strong> {type}</p>
        <p className="pet-detail"><strong>Breed:</strong> {breed}</p>
        <p className="pet-detail"><strong>Age:</strong> {age}</p>
        <p className="pet-description">"{description}"</p>
        
        <p className="pet-availability">
          {available ? 'Available for Adoption' : 'Already Adopted'}
        </p>
        
        <div className="animal-actions">
          <button className="adopt-btn">
            Adopt {name}
          </button>
          <button className="donate-btn">
            Donate
          </button>
        </div>
      </div>
    </div>
  );
};

export default AnimalCard;