import React from 'react';
import ItemContainers from './itemContainers';
import {
    Main,
    ItemLevantamento,
    ItemRequerimentos,
    ItemSolicitacoes,
    ItemFix,
} from './styles';

export default function Html(props) {
    const {
        dados,
        ItemMenu,
        alteraValorBotao1,
        alteraValorBotao2,
        alteraValorBotao3,
        alteraValorBotao4,
    } = props;

    return (
        <>
            <Main>
                <ul>
                    <ItemLevantamento
                        ItemLevantamentoEnabled={
                            ItemMenu.ItemLevantamentoEnabled
                        }
                        onClick={alteraValorBotao1}
                    >
                        Levantamentos
                    </ItemLevantamento>
                    <ItemRequerimentos
                        ItemRequerimentosEnabled={
                            ItemMenu.ItemRequerimentosEnabled
                        }
                        onClick={alteraValorBotao2}
                    >
                        Requerimentos
                    </ItemRequerimentos>
                    <ItemSolicitacoes
                        ItemSolicitacoesEnabled={
                            ItemMenu.ItemSolicitacoesEnabled
                        }
                        onClick={alteraValorBotao3}
                    >
                        Solicitações
                    </ItemSolicitacoes>
                    <ItemFix
                        ItemFixEnabled={ItemMenu.ItemFixEnabled}
                        onClick={alteraValorBotao4}
                    >
                        Fix
                    </ItemFix>
                </ul>
                <section id="colunas">
                    <section className="coluna">
                        <h1 className="tituloColuna">Atenção!</h1>
                        {dados.map(dado => (
                            <ItemContainers
                                key={dado}
                                dado={dado}
                                ItemMenu={ItemMenu}
                            />
                        ))}
                    </section>
                    <section className="coluna">
                        <h1 className="tituloColuna">Atrasados!</h1>
                    </section>
                    <section className="coluna">
                        <h1 className="tituloColuna">Concluído!</h1>
                    </section>
                    <section id="areaTrabalho"></section>
                </section>
            </Main>
        </>
    );
}
