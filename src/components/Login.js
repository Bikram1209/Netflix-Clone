import React, { useState } from "react";
import "./Login.css";
import Navbar from "./Navbar";
import facebookLogo from "../Images/facebook-4.svg";
import { makeStyles } from "@material-ui/core/styles";
import { Backdrop, Fade, Modal } from "@material-ui/core";
import { auth, facebookAuthProvider } from "../config/firebase";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function Login({ FacebookCallback, user, EmailCallback }) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  // useEffect(() => {
  //   const unsubscribe = auth.onAuthStateChanged((authUser) => {
  //     if (authUser) {
  //       // logged In
  //       EmailCallback(authUser);
  //       // if the user is existing user, the user have display name
  //     } else {
  //       // logged out
  //       EmailCallback(null);
  //     }
  //   });
  //   // useEffect has the ability to have many functions
  //   // and can return functions also
  //   return () => {
  //     // perform some cleanup actions
  //     unsubscribe();
  //   };
  // }, [user]);

  const signUp = (event) => {
    event.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((authUser) => {
        return authUser.user.updateProfile({
          displayName: username,
        });
      })
      .catch((error) => alert(error.message));

    setOpen(false);
    setUsername("");
    setEmail("");
    setPassword("");
  };

  const signin = (event) => {
    event.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((user) => {
        EmailCallback(user);
      })
      .catch((error) => alert(error.message));
    setEmail("");
    setPassword("");
  };

  const authentcateFacebook = () => {
    auth
      .signInWithPopup(facebookAuthProvider)
      .then((res) => FacebookCallback(res))
      .catch((err) => alert(err.message));
  };

  return (
    <div className="login">
      <Navbar />
      <div className="login__content">
        <form className="login__form">
          <h3>Sign In</h3>
          <input
            type="email"
            placeholder="Email: "
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            placeholder="Password: "
            value={password}
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" onClick={signin}>
            Sign In
          </button>
        </form>
        <button onClick={authentcateFacebook} className="login__facebook">
          <img className="login__facebookLogo" src={facebookLogo} alt="" />
          <p>Login With Facebook</p>
        </button>
        <p>
          New To Netflix? <button onClick={() => setOpen(true)}>Sign up now</button>
        </p>
      </div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={() => setOpen(false)}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <form className="login__modalForm">
            <img
              className="navbar__logoSignin"
              src="https://image.tmdb.org/t/p/w500/wwemzKWzjKYJFfCeiB57q3r4Bcm.png"
              alt="navbarSignin"
            />
            <h3>Sign Up</h3>
            <input
              type="text"
              placeholder="Username: "
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder="Email: "
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              placeholder="Password: "
              value={password}
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button onClick={signUp} type="submit">
              Sign Up
            </button>
          </form>
        </Fade>
      </Modal>
    </div>
  );
}

export default Login;
