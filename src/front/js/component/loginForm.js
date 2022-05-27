import React from "react";

export const LoginForm = () => (
  <div class="container">
    <div class="row align-items-start">
      <div class="col"></div>
      <div class="col">
        <form className="">
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              Email
            </label>
            <input
              type="email"
              class="form-control"
              id="exampleFormControlInput1"
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
            <button type="submit" className="btn btn-primary mb-3">
              Ingresar 😸
            </button>
            <br />
            <a className="mb-3" href="/regusers">
              ¿Quieres adoptar?... Regístrate 😻
            </a>
            <br />
            <a className="mb-3" href="/resetpass">
              ¿Olvidaste tu contraseña?
            </a>
          </div>
        </form>
      </div>
      <div className="col"></div>
    </div>
  </div>
);
