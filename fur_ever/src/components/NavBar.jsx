import React from 'react';


const NavBar = () => {
  return (
    <nav className="titleBar">
      <div className="brand">
        <img src="/Images/animalShelterfavicon.jpg" alt="paw" className="logo" />
        <span className="site-name">Fur_Ever</span>
      </div>

      <ul className="ul">
        <li className="li">Home</li>
        <li className="li">About</li>
        <li className="li">Contact</li>
        <li className="li">Farm</li>
      </ul>
    </nav>
  );
};

export default NavBar;