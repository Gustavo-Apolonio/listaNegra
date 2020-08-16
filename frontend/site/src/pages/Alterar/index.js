import React, { useState } from 'react';

import './Alterar.css';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import ListaNegraApi from '../../services/ListaNegraApi';
import { useHistory, useParams, Link } from 'react-router-dom';

const api = new ListaNegraApi();


export default function Alterar(props) {

    const lnId = useParams().id; 
    const ln = props.location.state;
    const [nome, setNome] = useState(ln.nome);
    const nome2 = ln.nome;
    const [motivo, setMotivo] = useState(ln.motivo);
    const [local, setLocal] = useState(ln.local);
    const [inclusao, setInclusao] = useState(new Date(ln.inclusao).toISOString().substr(0, 10));
    const navegation = useHistory();

    const alterarClick = async (id) => {
        try {    
            console.log(id);
            const resp = await api.alterar(id, {
                                    nome: nome,
                                    motivo: motivo,
                                    local: local,
                                    inclusao: inclusao
                            });

            toast.dark('😈Alterado na Lista Negra!😈', {autoClose: 1500});
            setTimeout(() => {navegation.goBack();}, 1500);
            return resp;
        } catch (e) {
            toast.error(e.response.data.erro);
        }
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
                <div className="home-button-div">
                <Link to='/consultar'>
                        <button className="btn btn-sm home-button">
                            Voltar
                        </button>
                    </Link>
                    <Link to='/'>
                        <button className="btn btn-sm home-button">
                            Voltar ao Início
                        </button>
                    </Link>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
}