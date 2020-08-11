import React, { useState, useRef } from 'react';

import './Consultar.css';
import lupa from '../../images/lupa.svg'

import LoadingBar from 'react-top-loading-bar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import ListaNegraApi from '../../services/ListaNegraApi';
import { Link } from 'react-router-dom';

const api = new ListaNegraApi(); 

export default function Consultar() {

    const loadingBar = useRef(null);

    const [registros, setRegistros] = useState([]);

    const consultarClick = async () => {
        loadingBar.current.continuousStart();

        const lns = await api.consultar();
        setRegistros([...lns]);
        
        loadingBar.current.complete();
    }

    const deletarClick = async (id) => {   
        const resp = await api.deletar(id);
        toast.dark('😈Deletado da Lista Negra!😈', {
            position: "bottom-right"});
        consultarClick();
    }

    return(
        <div className="consultar-container">
            <LoadingBar color='darkred' 
                        ref={loadingBar} />

            <div className="consultar-info-container">

                <div className="consultar-button-div-geral">
                    <div className="consultar-button-div-title">
                        <p>
                            Consulte quem está na lista negra :
                        </p>
                    </div>
                    <div className="consultar-button-div">
                        <button onClick={consultarClick}>
                            <img src={lupa} alt="lupa"/>
                        </button>
                    </div>
                </div>

                <div className="consultar-tablea-div">
                    <table className="table table-dark">
                        <thead>
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Nome</th>
                                <th scope="col">Motivo</th>
                                <th scope="col">Local</th>
                                <th scope="col">Data de Inclusão</th>
                            </tr>
                        </thead>
                        <tbody>
                            {registros.map(registro => 
                                <tr key={registro.id}>
                                    <th scope="row"># {registro.id}</th>
                                    <td>{registro.nome}</td>
                                    <td>{registro.motivo}</td>
                                    <td>{registro.local}</td>
                                    <td>{new Date(`${registro.inclusao}Z`).toLocaleDateString()}</td>
                                    <td><button className="btn btn-sm consultar-table-button">
                                            <Link to={{
                                                pathname: `/alterar/${registro.id}`,
                                                state: {
                                                    nome: registro.nome,
                                                    motivo: registro.motivo,
                                                    local: registro.local,
                                                    inclusao: registro.inclusao
                                                }
                                            }}>Alterar</Link>
                                        </button>
                                    </td>
                                    <td><button className="btn btn-sm consultar-table-button"
                                                onClick={() => deletarClick(registro.id)}>
                                                    Deletar
                                        </button>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
}