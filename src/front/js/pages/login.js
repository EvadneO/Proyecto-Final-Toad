import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Navbar } from "../component/navbar";
import { Login } from "../component/login";
import { Footer } from "../component/footer";

export const Login = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="login">
      <Navbar />
      <h1>Hello Rigo!!</h1>
      <Login />
      <Footer />
    </div>
  );
};
