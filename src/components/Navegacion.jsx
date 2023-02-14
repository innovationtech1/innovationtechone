import React, { useState } from 'react';
import "../App.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

import logo from "../assets/img/logo.png"


function Navegacion() {
  const [showMenu, setShowMenu] = useState(false);

  const handleClick = () => {
    setShowMenu(!showMenu);

 
  };

  return (
    <div className="navContainer">
      <img className='logoImg' src={logo}alt="lg"  />
      <div className="titleContainer">
        <h1 className="innovationNav">Innovation <span className="techNav">TECH</span></h1>

         <i className='menu-btn'> <FontAwesomeIcon icon={faBars} />
        <button onClick={handleClick} className="opacity-btn">
          {showMenu ? '' : ''}
        </button>
        </i>
      </div>
      {showMenu && (
        <div className="menuContainer">
          <a href="/"><p>Servicios</p></a>
          <a href="/"> <p>Informacion</p></a>
           <a href="/"> <p>About</p></a>
         
        </div>
      )}
    </div>
  );
}



export default Navegacion;




