import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";

export const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <button
      className="cardButton btn btn-lg btn-danger outline-info btn-sm"
      onClick={() => {
        logout({ returnTo: window.location.origin });
      }}
    >
      Cerrar Sesión
    </button>
  );
};
