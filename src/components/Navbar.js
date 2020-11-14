import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { auth } from "../config/firebase";

function Navbar({ mainApp, callback, userfacebook }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const showFunc = () => (window.scrollY > 100 ? setShow(true) : setShow(false));

    window.addEventListener("scroll", showFunc);
    return () => window.removeEventListener("scroll", showFunc);
  });

  const avatar = userfacebook
    ? userfacebook?.data?.additionalUserInfo?.profile.picture.data.url
    : "https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png";

  const logout = () => {
    auth
      .signOut()
      .then(() => {
        callback();
      })
      .catch((err) => console.log(err));
  };

  {
    return mainApp ? (
      <div className={`navbar ${show ? "show" : ""}`}>
        <img
          className="navbar__logo"
          src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg"
          alt="Netflix Logo"
        />
        <div className="navbar__right">
          <img className="navbar__avatar" src={avatar} alt="Netflix Avatar" />
          <button className="navbar__btn" onClick={logout}>
            {" "}
            Log-Out
          </button>
        </div>
      </div>
    ) : (
      <div className="navbar__Signin">
        <img
          className="navbar__logoSignin"
          src="https://image.tmdb.org/t/p/w500/wwemzKWzjKYJFfCeiB57q3r4Bcm.png"
          alt="navbarSignin"
        />
      </div>
    );
  }
}

export default Navbar;
