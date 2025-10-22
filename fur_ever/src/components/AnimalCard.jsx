import React from 'react';


const AnimalCard = () => {
  return (
    <div className="card">
      <div className="imageContainer">
        <img src="/Images/Pussy.jpg" alt="Bella" className="image" />
      </div>
      <div className="description">
        <p className="petName">Name: Bella</p>
        <p className="petType">Type: Dog</p>
        <p className="breedType">Breed: Bosco</p>
        <p className="petAge">Age: 1 year</p>
        <p className="petAvailability">Available</p>
      </div>
      <div className="buttons">
        <button className="btn-adopt">Adopt</button>
        <br /><br />
        <button className="btn-donate">Donate</button>
      </div>
    </div>
  );
};

export default AnimalCard;