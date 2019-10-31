import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import main from './pages/main';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={main} />
            </Switch>
        </BrowserRouter>
    );
}
