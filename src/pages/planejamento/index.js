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

    alteraValorBotao = param => {
        const { ItemMenu } = this.state;

        if (param === 1) {
            if (
                ItemMenu.ItemLevantamentoEnabled &&
                ItemMenu.ItemRequerimentosEnabled &&
                ItemMenu.ItemSolicitacoesEnabled &&
                ItemMenu.ItemFixEnabled
            ) {
                this.setState({
                    ItemMenu: {
                        ItemLevantamentoEnabled: true,
                        ItemRequerimentosEnabled: false,
                        ItemSolicitacoesEnabled: false,
                        ItemFixEnabled: false,
                    },
                });
            } else {
                this.setState({
                    ItemMenu: {
                        ...ItemMenu,
                        ItemLevantamentoEnabled: !ItemMenu.ItemLevantamentoEnabled,
                    },
                });
            }
        } else if (param === 2) {
            if (
                ItemMenu.ItemLevantamentoEnabled &&
                ItemMenu.ItemRequerimentosEnabled &&
                ItemMenu.ItemSolicitacoesEnabled &&
                ItemMenu.ItemFixEnabled
            ) {
                this.setState({
                    ItemMenu: {
                        ItemLevantamentoEnabled: false,
                        ItemRequerimentosEnabled: true,
                        ItemSolicitacoesEnabled: false,
                        ItemFixEnabled: false,
                    },
                });
            } else {
                this.setState({
                    ItemMenu: {
                        ...ItemMenu,
                        ItemRequerimentosEnabled: !ItemMenu.ItemRequerimentosEnabled,
                    },
                });
            }
        } else if (param === 3) {
            if (
                ItemMenu.ItemLevantamentoEnabled &&
                ItemMenu.ItemRequerimentosEnabled &&
                ItemMenu.ItemSolicitacoesEnabled &&
                ItemMenu.ItemFixEnabled
            ) {
                this.setState({
                    ItemMenu: {
                        ItemLevantamentoEnabled: false,
                        ItemRequerimentosEnabled: false,
                        ItemSolicitacoesEnabled: true,
                        ItemFixEnabled: false,
                    },
                });
            } else {
                this.setState({
                    ItemMenu: {
                        ...ItemMenu,
                        ItemSolicitacoesEnabled: !ItemMenu.ItemSolicitacoesEnabled,
                    },
                });
            }
        } else if (param === 4) {
            if (
                ItemMenu.ItemLevantamentoEnabled &&
                ItemMenu.ItemRequerimentosEnabled &&
                ItemMenu.ItemSolicitacoesEnabled &&
                ItemMenu.ItemFixEnabled
            ) {
                this.setState({
                    ItemMenu: {
                        ItemLevantamentoEnabled: false,
                        ItemRequerimentosEnabled: false,
                        ItemSolicitacoesEnabled: false,
                        ItemFixEnabled: true,
                    },
                });
            } else {
                this.setState({
                    ItemMenu: {
                        ...ItemMenu,
                        ItemFixEnabled: !ItemMenu.ItemFixEnabled,
                    },
                });
            }
        }
    };

    selecionaQuadro = param => {};

    render() {
        const { loading } = this.state;

        if (loading) {
            const { dados, ItemMenu } = this.state;

            return (
                <Html
                    dados={dados}
                    ItemMenu={ItemMenu}
                    alteraValorBotao={this.alteraValorBotao}
                />
            );
        }
        return <></>;
    }
}
