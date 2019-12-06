import React from 'react';
import { Switch, Route } from 'react-router-dom';

import login from './pages/login';
import planejamento from './pages/planejamento';
import grafico from './pages/grafico';

export default function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={login} />
            <Route path="/planejamento" exact component={planejamento} />
            <Route path="/grafico" exact component={grafico} />
        </Switch>
    );
}
