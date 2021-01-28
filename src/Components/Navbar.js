import React, { useState, } from "react";
import { Link } from "react-router-dom";
import './Navbar.css';


function Navbar() {
  const [click, setClick] = useState(false);
  // const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  // const showButton = () => {
  //     if (window.innerWidth <= 960) {
  //         setButton(false)
  //     } else {
  //         setButton(true);
  //     }
  // };

  // window.addEventListener('resize', showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            Liz Cooper Fan Page
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/biography" className="nav-links" onClick={closeMobileMenu}>
                Biography
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/music"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Music
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/Tour"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Tour
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
