import React from 'react';
import { FiClock } from 'react-icons/fi';
import { IoIosMenu } from 'react-icons/io';
import ItemContainers from './itemContainers';
import {
    Main,
    ItemLevantamento,
    ItemRequerimentos,
    ItemSolicitacoes,
    ItemFix,
} from './styles';
import interrogacao from '../../imgs/interroga.jpg';

export default function Html(props) {
    const {
        dados,
        ItemMenu,
        idCardSelecionado,
        alteraValorBotao,
        selecionaQuadro,
    } = props;

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
                                    selecionaQuadro={selecionaQuadro}
                                    idCardSelecionado={idCardSelecionado}
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
                                    selecionaQuadro={selecionaQuadro}
                                    idCardSelecionado={idCardSelecionado}
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
                                    selecionaQuadro={selecionaQuadro}
                                    idCardSelecionado={idCardSelecionado}
                                />
                            ) : (
                                ''
                            )
                        )}
                    </section>
                    {dados.map(dado =>
                        dado.Id === idCardSelecionado ? (
                            <>
                                <section id="areaTrabalho">
                                    <article id="descrAreaTrabalho">
                                        <IoIosMenu />
                                        <p>{dado.Nom_Descricao}</p>
                                    </article>
                                    <article id="dataAreaTrabalho">
                                        <FiClock />
                                        <p>{dado.Nom_DataFormatada}</p>
                                    </article>
                                    <article id="membros">
                                        {dado.membros.map(membro =>
                                            membro.avatarHash ? (
                                                <img
                                                    src={`https://trello-avatars.s3.amazonaws.com/${membro.avatarHash}/170.png`}
                                                    alt=""
                                                />
                                            ) : (
                                                <img
                                                    src={interrogacao}
                                                    alt=""
                                                />
                                            )
                                        )}
                                    </article>
                                </section>
                            </>
                        ) : (
                            ''
                        )
                    )}
                </section>
            </Main>
        </>
    );
}
