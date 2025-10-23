// import React from 'react';
// import { Link } from 'react-router-dom';


// const NavBar = () => {
//   return (
//     <nav className="navbar">
//       <div className="brand">
//         <img src="/Images/animalShelterfavicon.jpg" alt="paw" className="logo" />
//         <span className="site-name">Fur_Ever</span>
//       </div>

//       <ul className="nav-links">
//         <li className="nav-item">
//           <Link to="/">Home</Link>
//         </li>
//         <li className="nav-item">
//           <Link to="/donate">Donate</Link>
//         </li>
//       </ul>
//     </nav>
//   );
// };

// export default NavBar;

import React from 'react';
import { Link } from 'react-router-dom';


const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="brand">
        <div className="logo">🐾</div>
        <span className="site-name">Fur_Ever</span>
      </div>

      <ul className="nav-links">
        <li className="nav-item">
          <Link to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/animals">Animals</Link>  {/* ← ADD THIS LINE */}
        </li>
        {/* <li className="nav-item">
          <Link to="/donate">Donate</Link>
        </li> */}
      </ul>
    </nav>
  );
};

export default NavBar;