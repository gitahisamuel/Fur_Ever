// import React, { useState, useEffect } from 'react';
// import AnimalCard from '../components/AnimalCard';


// const Home = () => {
//   const [animals, setAnimals] = useState([]);


//   useEffect(() => {
//     fetch('http://localhost:3001/animals')
//       .then(response => response.json())
//       .then(data => {
//         console.log('Data from server:', data);
//         setAnimals(data); 
//       });
//   }, []);

//   return (
//     <div>

//       <div className="hero-section">
//         <h1 className="hero-title">Welcome to Fur_Ever 🐾</h1>
//         <p className="hero-subtitle">Find your perfect furry companion</p>
//         <button className="cta-button">
//           Meet Our Animals
//         </button>
//       </div>


//       <div className="mission-section">
//         <h2 className="mission-title">Meet Our Friends</h2>
//         <div className="animals-grid">
//           {animals.map(animal => (
//             <AnimalCard key={animal.id} animal={animal} />
//           ))}
//         </div>
//       </div>


//       <div className="mission-section">
//         <h2 className="mission-title">Our Mission</h2>
//         <p className="mission-text">
//           Connecting loving homes with animals in need. Every animal deserves a 
//           second chance at happiness, and we're here to make that happen.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Home;


import React from 'react';
import { Link } from 'react-router-dom';


const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="hero-section">
        <h1 className="hero-title">Welcome to Fur_Ever 🐾</h1>
        <p className="hero-subtitle">Find your perfect furry companion</p>
        <Link to="/animals">
          <button className="cta-button">
            Meet Our Animals
          </button>
        </Link>
      </div>

      {/* Mission Section */}
      <div className="mission-section">
        <h2 className="mission-title">Our Mission</h2>
        <p className="mission-text">
          Connecting loving homes with animals in need. Every animal deserves a 
          second chance at happiness, and we're here to make that happen.
        </p>
      </div>
    </div>
  );
};

export default Home;