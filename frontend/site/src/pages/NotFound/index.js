import React              from 'react';
         // , { useState }
import { Redirect } from 'react-router-dom';

import './NotFound.css';

// import LoadingBar from 'react-top-loading-bar'
// import { ToastContainer, toast } from 'react-toastify';


export default function NotFound() {

    // const [progress, setProgress] = useState(0);

    // const cronometro = () => {
    //     while(progress != 100) {
    //         setTimeout(() => {
    //             setProgress(progress + 20);
    //         }, 2000);
    //     }
    //     return true;
    // }

    return(
        <div className="notFound-container">
            {/* <LoadingBar
                color='darkred'
                progress={progress}
                onLoaderFinished={() => setProgress(0)}
            /> */}
            <div className="notFound-info-container">
                <div className="notFound-background-div">
                    <div className="notFound-text-div">
                        <p>
                            Nossa, olha onde você chegou... Não há nada por aqui...
                        </p>
                    </div>
                    <div className="notFound-text-div">
                        <p>
                            Vamos te redirecionar ao início logo...
                        </p>
                    </div>
                </div>
            </div>
            <Redirect to='/' />
            {/* <ToastContainer /> */}
        </div>
    );
}