import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.svg";

const LoginScreen = () => {
  return (
    <div className="container-fluid vh-100 d-flex flex-column p-0">
      <header className="d-flex justify-content-between align-items-center py-1  px-4 bg-primary ">
        <div>
          <img src={logo} alt="Logo" style={{ width: "70px" }} />
        </div>
        <div>
          <Link to="/" className="btn btn-light">
            Voltar
          </Link>
        </div>
      </header>

      <main className="flex-grow-1 d-flex flex-column align-items-center justify-content-center bg-light">
        <div
          className="p-4 bg-white shadow rounded"
          style={{ width: "100%", maxWidth: "400px" }}
        >
          <h2 className="text-center mb-4">Login</h2>
          <form>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                E-mail:
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Digite seu E-mail"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Senha:
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="********"
              />
            </div>
            <button type="submit" className="btn btn-primary w-100">
              Entrar
            </button>
          </form>
        </div>
      </main>

      <footer className="d-flex justify-content-between align-items-center py-1 px-4 bg-primary
       text-white">
        <div className="d-flex justify-content-center flex-grow-1">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
            <i className="bi bi-twitter fs-4"></i>
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
            <i className="bi bi-facebook fs-4"></i>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
            <i className="bi bi-linkedin fs-4"></i>
          </a>
        </div>
        <div>
          <img
            src={logo}
            alt="Logo da Biblioteca"
            style={{ width: "50px" }}
          />
        </div>
      </footer>
    </div>
  );
};

export default LoginScreen;