import React, { useState } from 'react';

import './Alterar.css';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import ListaNegraApi from '../../services/ListaNegraApi';
import { useParams } from 'react-router-dom';

const api = new ListaNegraApi();


export default function Alterar(props) {

    const lnId = useParams().id; 
    const ln = props.location.state;
    const [nome, setNome] = useState(ln.nome);
    const nome2 = ln.nome;
    const [motivo, setMotivo] = useState(ln.motivo);
    const [local, setLocal] = useState(ln.local);
    const [inclusao, setInclusao] = useState(ln.inclusao);

    const alterarClick = async (id) => {
        console.log(id);
        const resp = await api.alterar(id, {
                                nome: nome,
                                motivo: motivo,
                                local: local,
                                inclusao: inclusao
                           });

        toast.dark('😈Alterado na Lista Negra!😈');
    }

    return(
        <div className="alterar-container">
            <div className="alterar-info-container">
                <div className="alterar-info-titulo-container">
                    <p>
                        Alterando "{nome2}" para
                    </p>
                </div>

                <div className="alterar-input-div">
                    <label>Nome : </label>
                    <input type="text"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}/>
                </div>

                <div className="alterar-input-div">
                    <label>Motivo : </label>
                    <input type="text"
                        value={motivo}
                        onChange={(e) => setMotivo(e.target.value)}/>
                </div>

                <div className="alterar-input-div">
                    <label>Local : </label>
                    <input type="text"
                        value={local}
                        onChange={(e) => setLocal(e.target.value)}/>
                </div>

                <div className="alterar-input-div">
                    <label>Data : </label>
                    <input type="date"
                        value={inclusao}
                        onChange={(e) => setInclusao(e.target.value)}/>
                </div>

                <div>
                    <button onClick={() => alterarClick(lnId)}
                            className="alterar-button btn btn-lg btn-block">
                        <p>Alterar</p>
                    </button>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
}