import React, { Component } from "react";
import { useContext, useState } from "react/cjs/react.production.min";
import { Context } from "../store/appContext";

const { actions } = useContext(Context);

const Registro = () => {
  const [inputNombre, setNombre] = useState("");
  const [inputApellido, setApellido] = useState("");
  const [inputEmail, setEmail] = useState("");
  const [inputContraseña, setConstraseña] = useState("");

  const validaEnvio = (e) => {
    e.preventDefault();

    console.log("Registro enviado");
  };
};

export const RegUsuarioForm = () => (
  <div class="container">
    <div class="row align-items-start">
      <div class="col"></div>
      <div class="col">
        <form className="">
          <div>
            Nombre
            <input type="text" class="form-control" />
            Apellido
            <input type="text" class="form-control" />
          </div>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              Email
            </label>
            <input
              type="email"
              class="form-control"
              placeholder="name@example.com"
            />
          </div>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              Confirma tu email
            </label>
            <input
              type="email"
              class="form-control"
              placeholder="name@example.com"
            />
          </div>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              Contraseña
            </label>
            <input type="password" class="form-control" />
          </div>
          <div className="col-auto">
            <button
              type="submit"
              className="btn btn-primary mb-3"
              onClick={() => {
                actions.login(mail, password);
              }}
            >
              Registrar 🐶
            </button>
          </div>
        </form>
      </div>
      <div className="col"></div>
    </div>
  </div>
);
