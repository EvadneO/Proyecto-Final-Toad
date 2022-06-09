import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

export const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <button
      className="cardButton btn btn-lg btn-danger outline-info"
      onClick={() => loginWithRedirect()}
    >
      Iniciar Sección
    </button>
  );
};
