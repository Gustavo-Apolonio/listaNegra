import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import App from './pages/App';
import Cadastrar from './pages/Cadastrar';
import Consultar from './pages/Consultar';
import NotFound from './pages/NotFound';

export default function Routes() {



    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact={true} component={App} />
                    <Route path="/cadastrar" component={Cadastrar} />
                    <Route path="/consultar" component={Consultar} />
                    <Route path="*" component={NotFound} />
                </Switch>
            </BrowserRouter>
        </div>
    );
}