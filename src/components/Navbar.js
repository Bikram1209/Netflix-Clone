import React, { useEffect, useState } from "react";
import "./Navbar.css";

function Navbar({ mainApp }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const showFunc = () => (window.scrollY > 100 ? setShow(true) : setShow(false));

    window.addEventListener("scroll", showFunc);
    return () => window.removeEventListener("scroll", showFunc);
  });

  {
    return mainApp ? (
      <div className={`navbar ${show && "show"}`}>
        <img
          className="navbar__logo"
          src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg"
          alt="Netflix Logo"
        />
        <img
          className="navbar__avatar"
          src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png"
          alt="Netflix Avatar"
        />
      </div>
    ) : (
      <div className="navbar__Signin">
        <img src="navbar__logoSignin" alt="navbarSignin" />
      </div>
    );
  }
}

export default Navbar;
