// // import React from 'react';


// // const AnimalCard = ({ animal }) => {
// //   const { name, type, breed, age, image, description, available } = animal;

// //   return (
// //     <div className="animal-card">
// //       <div className="image-container">
// //         <img 
// //           src={image} 
// //           alt={name} 
// //           className="animal-image"
// //         />
// //       </div>
      
// //       <div className="animal-info">
// //         <h3 className="pet-name">{name}</h3>
// //         <p className="pet-detail"><strong>Type:</strong> {type}</p>
// //         <p className="pet-detail"><strong>Breed:</strong> {breed}</p>
// //         <p className="pet-detail"><strong>Age:</strong> {age}</p>
// //         <p className="pet-description">"{description}"</p>
        
// //         <p className="pet-availability">
// //           {available ? 'Available for Adoption' : 'Already Adopted'}
// //         </p>
        
// //         <div className="animal-actions">
// //           <button className="adopt-btn">
// //             Adopt {name}
// //           </button>
// //           <button className="donate-btn">
// //             Donate
// //           </button>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default AnimalCard;

// import React from 'react';
// import { Link } from 'react-router-dom';
// import './AnimalCard.css';


// const AnimalCard = ({ animal }) => {
//   const { id, name, type, breed, age, image, description, available } = animal;

//   return (
//     <div className="animal-card">
//       <div className="image-container">
//         <img src={image} alt={name} className="animal-image" />
//       </div>
      
//       <div className="animal-info">
//         <h3 className="pet-name">{name}</h3>
//         <p className="pet-detail"><strong>Type:</strong> {type}</p>
//         <p className="pet-detail"><strong>Breed:</strong> {breed}</p>
//         <p className="pet-detail"><strong>Age:</strong> {age}</p>
        
//         <p className="pet-description">"{description}"</p>
        
//         <p className="pet-availability">
//           {available ? 'Available for Adoption' : 'Already Adopted'}
//         </p>
        
//         <div className="animal-actions">
//           {/* Update Adopt button to use Link */}
//           <Link to={`/adopt/${id}`}>
//             <button className="adopt-btn">
//               Adopt {name}
//             </button>
//           </Link>
//           <br /><br />
//           <button className="donate-btn">
//             Donate
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AnimalCard;

// import React from 'react';
// import { Link } from 'react-router-dom';
// import './AnimalCard.css';

// const AnimalCard = ({ animal }) => {
//   const { id, name, type, breed, age, image, description, available } = animal;

//   return (
//     <div className="animal-card">
//       <div className="image-container">
//         <img src={image} alt={name} className="animal-image" />
//       </div>
      
//       <div className="animal-info">
//         <h3 className="pet-name">{name}</h3>
//         <p className="pet-detail"><strong>Type:</strong> {type}</p>
//         <p className="pet-detail"><strong>Breed:</strong> {breed}</p>
//         <p className="pet-detail"><strong>Age:</strong> {age}</p>
        
//         <p className="pet-description">"{description}"</p>
        
//         <p className="pet-availability">
//           {available ? 'Available for Adoption' : 'Already Adopted'}
//         </p>
        
//         <div className="animal-actions">
//           {/* Adopt button - goes to specific animal adoption */}
//           <Link to={`/adopt/${id}`}>
//             <button className="adopt-btn">
//               Adopt {name}
//             </button>
//           </Link>
//           <br /><br />
//           {/* Donate button - goes to general donation form */}
//           <Link to="/donate">
//             <button className="donate-btn">
//               Donate for {name}
//             </button>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AnimalCard;





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
        
        {/* <p className="pet-availability">
          {available ? 'Available for Adoption' : 'Already Adopted'}
        </p> */}
        
        <div className="animal-actions">
          {/* Adopt button - goes to specific animal adoption */}
          <Link to={`/adopt/${id}`}>
            <button className="adopt-btn">
              Adopt {name}
            </button>
          </Link>
          
          {/* Donate button - goes to general donation form */}
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