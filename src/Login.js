import React from "react";
import logo from "./logo.svg";
import { Link } from "react-router-dom";
import Auth from "./Auth";

const Login = ({ history }) => {
  const authenticate = () => {
    Auth.login(() => {
      history.push("/dashboard");
    });
  };

  return (
    <>
      <img src={logo} className="App-logo" alt="logo" />
      <button onClick={authenticate}>Login</button>
    </>
  );
};

export default Login;
