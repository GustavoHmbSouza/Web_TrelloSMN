import React, { Component } from 'react';
import Html from './html';

export default class planejamento extends Component {
    state = {
        quantidade: {
            atencao: {
                requerimento: 0,
                sol: 0,
                fix: 0,
            },
            atrasado: {
                requerimento: 0,
                sol: 0,
                fix: 0,
            },
            concluido: {
                requerimento: 0,
                sol: 0,
                fix: 0,
            },
        },
        loading: false,
    };

    selecionaQuadro = dados => {
        this.setState({
            quantidade: {
                atencao: {
                    sol: dados.atencao.sol.lenght,
                    requerimento: dados.atencao.requerimento.lenght,
                    fix: dados.atencao.requerimento.lenght,
                },
                atrasado: {
                    sol: dados.atrasado.sol.lenght,
                    requerimento: dados.atrasado.requerimento.lenght,
                    fix: dados.atrasado.requerimento.lenght,
                },
                concluido: {
                    sol: dados.concluido.sol.lenght,
                    requerimento: dados.concluido.requerimento.lenght,
                    fix: dados.concluido.requerimento.lenght,
                },
            },
            loading: true,
        });
    };

    render() {
        const { loading, quantidade } = this.state;

        return (
            <Html
                quantidade={quantidade}
                selecionaQuadro={this.selecionaQuadro}
                loading={loading}
                carregou={this.carregou}
            />
        );
    }
}
