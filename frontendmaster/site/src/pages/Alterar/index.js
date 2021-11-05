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
    const [nomeErro, setNomeErro] = useState('');
    const [motivoErro, setMotivoErro] = useState('');
    const [localErro, setLocalErro] = useState('');
    const [inclusaoErro, setInclusaoErro] = useState('');
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
            if(e.response.data.erro.includes('Nome'))
                setNomeErro(e.response.data.erro);
            else if(e.response.data.erro.includes('Motivo'))
                setMotivoErro(e.response.data.erro);
            else if(e.response.data.erro.includes('Local'))
                setLocalErro(e.response.data.erro);
            else if(e.response.data.erro.includes('Data'))
                setInclusaoErro(e.response.data.erro);
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
                        placeholder='Insira o nome da pessoa...'
                        onChange={(e) => {setNome(e.target.value);
                                          setNomeErro('')}}/>
                    <p className='erroMessage nomeErro'>{nomeErro}</p>
                </div>

                <div className="alterar-input-div">
                    <label>Motivo : </label>
                    <input type="text"
                        value={motivo}
                        placeholder='Insira o motivo da inclusão...'
                        onChange={(e) => {setMotivo(e.target.value);
                                          setMotivoErro('');}}/>
                    <p className='erroMessage motivoErro'>{motivoErro}</p>
                </div>

                <div className="alterar-input-div">
                    <label>Local : </label>
                    <input type="text"
                        value={local}
                        placeholder='Insira o local onde ela entrou na sua lista...'
                        onChange={(e) => {setLocal(e.target.value);
                                          setLocalErro('');}}/>
                    <p className='erroMessage localErro'>{localErro}</p>
                </div>

                <div className="alterar-input-div">
                    <label>Data : </label>
                    <input type="date"
                           placeholder='Insira a data em que ela entrou na sua lista...'
                           value={inclusao}
                           onChange={(e) => {setInclusao(e.target.value);
                                             setInclusaoErro('')}}/>
                    <p className='erroMessage inclusaoErro'>{inclusaoErro}</p>
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