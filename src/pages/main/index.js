import React, { Component } from 'react';

import Html from './html';

export default class main extends Component {
    state = {
        loading: false,
    };

    render() {
        const { loading } = this.state;

        return <Html />;
    }
}
