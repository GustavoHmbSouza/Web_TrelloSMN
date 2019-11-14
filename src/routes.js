import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import main from './pages/planejamento';
import grafico from './pages/grafico';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={main} />
                <Route path="/grafico" exact component={grafico} />
            </Switch>
        </BrowserRouter>
    );
}
