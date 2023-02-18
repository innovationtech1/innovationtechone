import React, { useState } from "react";
import { NavLink } from "react-router-dom";


import logo from "../assets/img/logo.png";

function Navegacion() {
  const [showMenu, setShowMenu] = useState(false);

  const handleClick = () => {
    setShowMenu(!showMenu);
  };

  return (
  
            <div className="textContainer">
                        <div className="textConteiner">
      <div className="navContainer">
        <div className="flexContainer">
          <h1 className="innovationNav">
            <img className="logoNavMuestra" src={logo} alt="lg" />
            INNOVATION <span className="techNav">TECH</span>
          </h1>
          <i className="iconNavMuestra">
           </i>
            <button onClick={handleClick} className="btnNavMuesta">
          
              {showMenu ? "menu" : "open"}
     
            </button>
         
        </div>
        {showMenu && (
          <div className="menuContainer">
            <NavLink className="active" to="">
              <h4>Home</h4>
            </NavLink>
            <NavLink className="active" to="">
              <h4>Servicios</h4>
            </NavLink>
            <NavLink className="active" to="">
              <h4>Informacion</h4>
            </NavLink>
            <NavLink className="active" to="">
              <h4>About</h4>
            </NavLink>
          </div>
                                )}
      </div>
    </div>
    
                      
            </div>
  );
}

export default Navegacion;
