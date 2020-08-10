import React, { useState, useRef } from 'react';

import LoadingBar from 'react-top-loading-bar'

import ListaNegraApi from '../../services/ListaNegraApi';

const api = new ListaNegraApi(); 

export default function Consultar() {

    const loadingBar = useRef(null)

    const [registros, setRegistros] = useState([]);

    const consultarClick = async () => {
        loadingBar.current.continuousStart();

        const lns = await api.consultar();
        setRegistros([...lns]);
        
        loadingBar.current.complete();
    }

    return(
        <div>
            <LoadingBar color='#f11946' ref={loadingBar} />
            <LoadingBar ref={LoadingBar}/>
            <h1>Consultar</h1>

            <div>
                <button onClick={consultarClick}>
                    <p>Consultar</p>
                </button>
            </div>

            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nome</th>
                            <th>Motivo</th>
                            <th>Data de Inclusão</th>
                        </tr>
                    </thead>
                    <tbody>
                        {registros.map(registro => 
                            <tr key={registro.id}>
                                <th># {registro.id}</th>
                                <td>{registro.nome}</td>
                                <td>{registro.motivo}</td>
                                <td>{new Date(`${registro.inclusao}Z`).toLocaleDateString()}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}