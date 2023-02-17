import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import '../App.css'
import logo from "../assets/img/logo.png"


function Navegacion() {
  const [showMenu, setShowMenu] = useState(false);

  const handleClick = () => {
    setShowMenu(!showMenu);

 
  };

  return (
    <div className="navContainer">
      <div className="titleContainer">

        <h1 className="innovationNav"><img className='logoImg' src={logo}alt="lg"  />INNOVATION <span className="techNav">TECH</span></h1>
         <i className='menuBurger'> <FontAwesomeIcon icon={faBars} />
          <button onClick={handleClick}
            className="opacity-btn">
          {showMenu ? 'menu' : 'close'}
        </button>
        </i>
      </div>
      {showMenu && (
        <div className="menuContainer">
          <NavLink className="active" to="/innovationtechone/"><h4>Home</h4></NavLink>
          <NavLink className="active" to="/innovationtechone/servicios"><h4>Servicios</h4></NavLink>
          <NavLink className="active" to="/innovationtechone/informacion"><h4>Informacion</h4></NavLink>
           <NavLink className="active" to="/innovationtechone/about"><h4>About</h4></NavLink>
       
         
        </div>
      )}
    </div>
  );
}



export default Navegacion;




