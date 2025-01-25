import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../assets/images/logo.svg"; 
import banner from "../assets/images/banner.png";
import { Link } from "react-router-dom";

const IntroScreen = () => {
  return (
    <div className="container-fluid vh-100 d-flex flex-column p-0">
      <header className="d-flex justify-content-between align-items-center py-3 px-4 bg-primary text-white">
        <div className="logo">
          <img
            src={logo}
            alt="Logo da Biblioteca"
            style={{ width: "70px" }}
          />
        </div>
        <div>
          <button className="btn btn-outline-light me-2">
            <Link to="/login" className="text-decoration-none text-dark">
              Entrar
            </Link>
          </button>
          <button className="btn btn-light">
            <Link to="/cadastro" className="text-decoration-none text-dark">
              Cadastrar
            </Link>
          </button>
        </div>
      </header>

      <main className="flex-grow-1 d-flex flex-column align-items-center justify-content-center bg-light text-dark">
        <div className="row w-100 px-4">
          <div className="col-md-6 d-flex justify-content-center align-items-center">
            <div>
              <img
                src={banner}
                alt="Imagem que representa uma biblioteca"
                style={{ width: "70%" }}
              />
            </div>
          </div>
          <div className="col-md-6 d-flex flex-column justify-content-center">
            <h1 className="mb-4">Bem-vindo à Biblioteca Digital</h1>
            <p>
              Explore um vasto acervo de livros, artigos e revistas em um só
              lugar. Nossa plataforma oferece uma experiência única para
              apaixonados por leitura e pesquisa. Junte-se a nós para descobrir
              novos conhecimentos e mergulhar em histórias fascinantes.
            </p>
          </div>
        </div>
      </main>

      <footer className="d-flex justify-content-between align-items-center py-3 px-4 bg-primary
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

export default IntroScreen;