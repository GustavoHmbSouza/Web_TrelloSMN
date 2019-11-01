import React, { Component } from 'react';
import api from '../../services/api';

import Html from './html';

export default class planejamento extends Component {
    state = {
        dados: [],
        loading: false,
    };

    async componentDidMount() {
        const response = await api.get(`/DadosTrello`);

        this.setState({
            dados: response.data,
            loading: true,
        });
    }

    render() {
        const { loading } = this.state;

        if (loading) {
            const { dados } = this.state;

            console.log(dados[0].Nom_Sigla.indexOf('SOL'));
            return <Html dados={dados} />;
        }
        return <></>;
    }
}
