import React, { Component } from 'react';
import Html from './html';

export default class planejamento extends Component {
    state = {
        graficoSelecionado: 'Todos',
    };

    selecionaGrafico = param => {
        this.setState({
            graficoSelecionado: param,
        });
    };

    render() {
        const { graficoSelecionado } = this.state;

        return (
            <Html
                selecionaGrafico={this.selecionaGrafico}
                graficoSelecionado={graficoSelecionado}
            />
        );
    }
}
