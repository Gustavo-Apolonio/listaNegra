import React, { useEffect, useRef } from 'react';

import './NotFound.css';

import LoadingBar from 'react-top-loading-bar'
import { ToastContainer, toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';


export default function NotFound() {

    const navegation = useHistory();
    const loadingBar = useRef(null);

    const redirecionar = () => {
        loadingBar.current.continuousStart();

        setTimeout(() => {toast.dark('Nossa, olha onde você chegou...', {position: "top-left", autoClose: 4500});}, 1000);
        setTimeout(() => {toast.dark('Não há nada por aqui...', {position: "top-left", autoClose: 4500});}, 2000);
        setTimeout(() => {toast.dark('Vamos te redirecionar ao início logo...', {position: "top-left", autoClose: 4500});}, 3000);
        setTimeout(() => {toast.error('3...', {autoClose: 1500});}, 4000);
        setTimeout(() => {toast.error('2...', {autoClose: 1500});}, 5000);
        setTimeout(() => {toast.error('1...', {autoClose: 1500});}, 6000);

        loadingBar.current.complete();
    }

    useEffect(() => {redirecionar()})

    useEffect(() => {
        setTimeout(() => {
            navegation.push('/');
        }, 8000)
    });

    return(
        <div className="notFound-container">
            <LoadingBar color='darkred' 
                        ref={loadingBar}/>
            <div className="notFound-info-container"/>
            <ToastContainer />
        </div>
    );
}