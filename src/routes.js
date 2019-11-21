import React from 'react';
import { Switch, Route } from 'react-router-dom';

import main from './pages/planejamento';
import grafico from './pages/grafico';

export default function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={main} />
            <Route path="/grafico" exact component={grafico} />
        </Switch>
    );
}
