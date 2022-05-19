import React, { Component } from "react";

export const RegUsuarioForm = () => (
  <div classname="">
    <form classname="px-4 py-3">
      <div classname="form-group">
        <label for="exampleDropdownFormEmail1">Email</label>
        <input
          type="email"
          classname="form-control"
          id="exampleDropdownFormEmail1"
          placeholder="email@example.com"
        />
      </div>
      <div classname="form-group">
        <label for="exampleDropdownFormPassword1">Contraseña</label>
        <input
          type="password"
          classname="form-control"
          id="exampleDropdownFormPassword1"
          placeholder="Contraseña"
        />
      </div>
      <button type="submit" classname="btn btn-primary">
        Enviar
      </button>
    </form>
    <div classname="dropdown-divider"></div>

    <a classname="dropdown-item" href="#">
      ¿Olvidaste tu contraseña?
    </a>
  </div>
);
