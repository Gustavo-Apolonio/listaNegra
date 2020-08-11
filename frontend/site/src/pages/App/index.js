import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import listaNegra from '../../images/lista-negra.svg';
import lupa from '../../images/lupa.svg';

function App() {
  return (
    <div className="app-container">
      <div className="app-header">

        <div className="app-titulo-box">
          <h1>
            Bem vindo à Lista Negra
          </h1>
        </div>

        <div className="app-links-box">
          <div className="app-cadastrar-box">
            <Link to='/cadastrar'>
              <button className="btn btn-lg app-cadastrar-button">
                <img src={listaNegra} alt="listaNegra"/>
                Cadastrar
              </button>
            </Link>
          </div>

          <div className="app-consultar-box">
            <Link to='/consultar'>
              <button className="btn btn-lg app-consultar-button">
                <img src={lupa} alt="lupa"/>
                Consultar
              </button>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
