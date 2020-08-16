import React, { useState } from 'react';

import './Cadastrar.css';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import ListaNegraApi from '../../services/ListaNegraApi';
import { Link, useHistory } from 'react-router-dom';

const api = new ListaNegraApi();

export default function Cadastrar() {

    const [nome, setNome] = useState('');
    const [motivo, setMotivo] = useState('');
    const [local, setLocal] = useState('');
    const [inclusao, setInclusao] = useState('');
    const [nomeErro, setNomeErro] = useState('');
    const [motivoErro, setMotivoErro] = useState('');
    const [localErro, setLocalErro] = useState('');
    const [inclusaoErro, setInclusaoErro] = useState('');
    const navegation = useHistory();

    const salvarClick = async () => {
        try {
            const resp = await api.cadastrar({
                                    nome: nome,
                                    motivo: motivo,
                                    local: local,
                                    inclusao: inclusao
                            });

            setNome('');
            setMotivo('');
            setLocal('');
            setInclusao('');

            toast.dark('😈Cadastrado na Lista Negra!', {autoClose: 2000});
            
            setTimeout(() => {navegation.goBack();}, 2000);
            return resp;
        } catch(e) {
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
                        placeholder='Insira o nome da pessoa...'
                        onChange={(e) => {setNome(e.target.value);
                                          setNomeErro('')}}/>
                    <p className='erroMessage nomeErro'>{nomeErro}</p>
                </div>

                <div className="cadastrar-input-div">
                    <label>Motivo : </label>
                    <input type="text"
                        value={motivo}
                        placeholder='Insira o motivo da inclusão...'
                        onChange={(e) => {setMotivo(e.target.value);
                                          setMotivoErro('');}}/>
                    <p className='erroMessage motivoErro'>{motivoErro}</p>
                </div>

                <div className="cadastrar-input-div">
                    <label>Local : </label>
                    <input type="text"
                        value={local}
                        placeholder='Insira o local onde ela entrou na sua lista...'
                        onChange={(e) => {setLocal(e.target.value);
                                          setLocalErro('');}}/>
                    <p className='erroMessage localErro'>{localErro}</p>
                </div>

                <div className="cadastrar-input-div">
                    <label>Data : </label>
                    <input type="date"
                           placeholder='Insira a data em que ela entrou na sua lista...'
                           value={inclusao}
                           onChange={(e) => {setInclusao(e.target.value);
                                             setInclusaoErro('')}}/>
                    <p className='erroMessage inclusaoErro'>{inclusaoErro}</p>
                </div>

                <div className="cadastrar-button-div">
                    <button onClick={salvarClick}
                            className="cadastrar-button btn btn-lg btn-block">
                            <p>Cadastrar</p>
                    </button>
                </div>
                <div className="home-button-div">
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