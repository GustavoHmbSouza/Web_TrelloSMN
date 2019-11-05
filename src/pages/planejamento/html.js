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
    const { dados, ItemMenu, alteraValorBotao } = props;

    return (
        <>
            <Main>
                <ul>
                    <ItemLevantamento
                        ItemLevantamentoEnabled={
                            ItemMenu.ItemLevantamentoEnabled
                        }
                        onClick={() => alteraValorBotao(1)}
                    >
                        Levantamentos
                    </ItemLevantamento>
                    <ItemRequerimentos
                        ItemRequerimentosEnabled={
                            ItemMenu.ItemRequerimentosEnabled
                        }
                        onClick={() => alteraValorBotao(2)}
                    >
                        Requerimentos
                    </ItemRequerimentos>
                    <ItemSolicitacoes
                        ItemSolicitacoesEnabled={
                            ItemMenu.ItemSolicitacoesEnabled
                        }
                        onClick={() => alteraValorBotao(3)}
                    >
                        Solicitações
                    </ItemSolicitacoes>
                    <ItemFix
                        ItemFixEnabled={ItemMenu.ItemFixEnabled}
                        onClick={() => alteraValorBotao(4)}
                    >
                        Fix
                    </ItemFix>
                </ul>
                <section id="colunas">
                    <section className="coluna">
                        <h1 className="tituloColuna">Atenção!</h1>
                        {dados.map(dado =>
                            dado.Nom_Atrasado === 'Atenção' ? (
                                <ItemContainers
                                    key={dado}
                                    dado={dado}
                                    ItemMenu={ItemMenu}
                                />
                            ) : (
                                ''
                            )
                        )}
                    </section>
                    <section className="coluna">
                        <h1 className="tituloColuna">Atrasados!</h1>
                        {dados.map(dado =>
                            dado.Nom_Atrasado === 'Atrasado' ? (
                                <ItemContainers
                                    key={dado}
                                    dado={dado}
                                    ItemMenu={ItemMenu}
                                />
                            ) : (
                                ''
                            )
                        )}
                    </section>
                    <section className="coluna">
                        <h1 className="tituloColuna">Concluído!</h1>
                        {dados.map(dado =>
                            dado.Nom_Atrasado === 'Concluido' ? (
                                <ItemContainers
                                    key={dado}
                                    dado={dado}
                                    ItemMenu={ItemMenu}
                                />
                            ) : (
                                ''
                            )
                        )}
                    </section>
                    <section id="areaTrabalho">
                        <article>Descrição</article>
                        <article>data de E</article>
                    </section>
                </section>
            </Main>
        </>
    );
}
