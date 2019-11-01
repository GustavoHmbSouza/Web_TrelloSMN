import React, { Component } from 'react';
import api from '../../services/api';

import Html from './html';

export default class planejamento extends Component {
    state = {
        dados: [],
        loading: false,
        ItemMenu: {
            ItemLevantamentoEnabled: true,
            ItemRequerimentosEnabled: true,
            ItemSolicitacoesEnabled: false,
            ItemFixEnabled: true,
        },
    };

    async componentDidMount() {
        const response = await api.get(`/DadosTrello`);

        this.setState({
            dados: response.data,
            loading: true,
        });
    }

    alteraValorBotao1() {
        const { ItemMenu } = this.state;

        this.setState({
            ItemMenu: {
                ...ItemMenu,
                ItemLevantamentoEnabled: ItemMenu.ItemLevantamentoEnabled
                    ? false
                    : true,
            },
        });
    }

    alteraValorBotao2() {
        const { ItemMenu } = this.state;

        this.setState({
            ItemMenu: {
                ...ItemMenu,
                ItemRequerimentosEnabled: ItemMenu.ItemRequerimentosEnabled
                    ? false
                    : true,
            },
        });
    }

    alteraValorBotao3() {
        const { ItemMenu } = this.state;

        this.setState({
            ItemMenu: {
                ...ItemMenu,
                ItemSolicitacoesEnabled: ItemMenu.ItemSolicitacoesEnabled
                    ? false
                    : true,
            },
        });
    }

    alteraValorBotao4() {
        const { ItemMenu } = this.state;

        this.setState({
            ItemMenu: {
                ...ItemMenu,
                ItemFixEnabled: ItemMenu.ItemFixEnabled ? false : true,
            },
        });
    }

    render() {
        const { loading } = this.state;

        if (loading) {
            const { dados, ItemMenu } = this.state;

            return (
                <Html
                    dados={dados}
                    ItemMenu={ItemMenu}
                    alteraValorBotao1={() => this.alteraValorBotao1()}
                    alteraValorBotao2={() => this.alteraValorBotao2()}
                    alteraValorBotao3={() => this.alteraValorBotao3()}
                    alteraValorBotao4={() => this.alteraValorBotao4()}
                />
            );
        }
        return <></>;
    }
}
