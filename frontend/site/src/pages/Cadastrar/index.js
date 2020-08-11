import React, { useState } from 'react';

import './Cadastrar.css';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import ListaNegraApi from '../../services/ListaNegraApi';

const api = new ListaNegraApi();

export default function Cadastrar() {

    const [nome, setNome] = useState('');
    const [motivo, setMotivo] = useState('');
    const [local, setLocal] = useState('');
    const [inclusao, setInclusao] = useState('');

    const salvarClick = async () => {
        const resp = await api.cadastrar({
                                nome: nome,
                                motivo: motivo,
                                local: local,
                                inclusao: inclusao
                           });

        toast.dark('😈Cadastrado na Lista Negra!😈');
    }

    return(
        <div className="cadastrar-container">

            <div className="cadastrar-info-container">
                <div className="cadastrar-info-titulo-container">
                    <p>
                        Cadastre alguém na lista negra!
                    </p>
                </div>

                <div className="cadastrar-input-div">
                    <label>Nome : </label>
                    <input type="text"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}/>
                </div>

                <div className="cadastrar-input-div">
                    <label>Motivo : </label>
                    <input type="text"
                        value={motivo}
                        onChange={(e) => setMotivo(e.target.value)}/>
                </div>

                <div className="cadastrar-input-div">
                    <label>Local : </label>
                    <input type="text"
                        value={local}
                        onChange={(e) => setLocal(e.target.value)}/>
                </div>

                <div className="cadastrar-input-div">
                    <label>Data : </label>
                    <input type="date"
                        value={inclusao}
                        onChange={(e) => setInclusao(e.target.value)}/>
                </div>

                <div className="cadastrar-button-div">
                    <button onClick={salvarClick}
                            className="cadastrar-button btn btn-lg btn-block">
                        <p>Cadastrar</p>
                    </button>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
}