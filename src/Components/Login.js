import { Button } from "@material-ui/core";
import React from "react";
import "./Login.css";
import { auth, provider } from "../firebase";

const Login = () => {
  const signUp = () => {
    auth.signInWithPopup(provider).catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <div className="login__logo">
        <img src="https://cdn.arstechnica.net/wp-content/uploads/2017/08/Discord-LogoWordmark-Color.png" />
        <h2>
          Chat with your friends,co-workers all at the same time. Hello👋.
        </h2>
      </div>

      <Button onClick={signUp}>Sign In</Button>
    </div>
  );
};

export default Login;
