import React from 'react';
import { connect } from 'react-redux';
import ItemContainers from './itemContainers';
import AreaTrabalho from './areaTrabalho';
import Menu from '../../components/Menu';

import {
    Main,
    ItemLevantamento,
    ItemRequerimentos,
    ItemSolicitacoes,
    ItemFix,
} from './styles';

function Html(props) {
    const {
        dadosTrello,
        ItemMenu,
        idCardSelecionado,
        alteraValorBotao,
        selecionaQuadro,
    } = props;

    const { dados } = dadosTrello[0];

    return (
        <>
            <Menu />
            <Main>
                <header id="cabecalho">Planejamento</header>
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
                <div id="conteudo">
                    <section id="colunas">
                        <section className="coluna">
                            <h1 className="tituloColuna">Atenção!</h1>
                            <>
                                {dados.atencao.sol.length != 0 &&
                                ItemMenu.ItemSolicitacoesEnabled ? (
                                    <ItemContainers
                                        dados={dados.atencao.sol}
                                        ItemMenu={ItemMenu}
                                        selecionaQuadro={selecionaQuadro}
                                        idCardSelecionado={idCardSelecionado}
                                    />
                                ) : (
                                    ''
                                )}
                                {dados.atencao.fix.length != 0 &&
                                ItemMenu.ItemFixEnabled ? (
                                    <ItemContainers
                                        dados={dados.atencao.fix}
                                        ItemMenu={ItemMenu}
                                        selecionaQuadro={selecionaQuadro}
                                        idCardSelecionado={idCardSelecionado}
                                    />
                                ) : (
                                    ''
                                )}
                                {dados.atencao.requerimento.length != 0 &&
                                ItemMenu.ItemRequerimentosEnabled ? (
                                    <ItemContainers
                                        dados={dados.atencao.requerimento}
                                        ItemMenu={ItemMenu}
                                        selecionaQuadro={selecionaQuadro}
                                        idCardSelecionado={idCardSelecionado}
                                    />
                                ) : (
                                    ''
                                )}
                            </>
                        </section>
                        <section className="coluna">
                            <h1 className="tituloColuna">Atrasado!</h1>
                            <>
                                {dados.atrasado.sol.length != 0 &&
                                ItemMenu.ItemSolicitacoesEnabled ? (
                                    <ItemContainers
                                        dados={dados.atrasado.sol}
                                        ItemMenu={ItemMenu}
                                        selecionaQuadro={selecionaQuadro}
                                        idCardSelecionado={idCardSelecionado}
                                    />
                                ) : (
                                    ''
                                )}
                                {dados.atrasado.fix.length != 0 &&
                                ItemMenu.ItemFixEnabled ? (
                                    <ItemContainers
                                        dados={dados.atrasado.fix}
                                        ItemMenu={ItemMenu}
                                        selecionaQuadro={selecionaQuadro}
                                        idCardSelecionado={idCardSelecionado}
                                    />
                                ) : (
                                    ''
                                )}
                                {dados.atrasado.requerimento.length != 0 &&
                                ItemMenu.ItemRequerimentosEnabled ? (
                                    <ItemContainers
                                        dados={dados.atrasado.requerimento}
                                        ItemMenu={ItemMenu}
                                        selecionaQuadro={selecionaQuadro}
                                        idCardSelecionado={idCardSelecionado}
                                    />
                                ) : (
                                    ''
                                )}
                            </>
                        </section>
                        <section className="coluna">
                            <h1 className="tituloColuna">Concluído!</h1>
                            <>
                                {dados.concluido.sol.length != 0 &&
                                ItemMenu.ItemSolicitacoesEnabled ? (
                                    <ItemContainers
                                        dados={dados.concluido.sol}
                                        ItemMenu={ItemMenu}
                                        selecionaQuadro={selecionaQuadro}
                                        idCardSelecionado={idCardSelecionado}
                                    />
                                ) : (
                                    ''
                                )}
                                {dados.concluido.fix.length != 0 &&
                                ItemMenu.ItemFixEnabled ? (
                                    <ItemContainers
                                        dados={dados.concluido.fix}
                                        ItemMenu={ItemMenu}
                                        selecionaQuadro={selecionaQuadro}
                                        idCardSelecionado={idCardSelecionado}
                                    />
                                ) : (
                                    ''
                                )}
                                {dados.concluido.requerimento.length != 0 &&
                                ItemMenu.ItemRequerimentosEnabled ? (
                                    <ItemContainers
                                        dados={dados.concluido.requerimento}
                                        ItemMenu={ItemMenu}
                                        selecionaQuadro={selecionaQuadro}
                                        idCardSelecionado={idCardSelecionado}
                                    />
                                ) : (
                                    ''
                                )}
                            </>
                        </section>
                    </section>
                    {dados.atencao.sol.map(dado =>
                        dado.Id === idCardSelecionado ? (
                            <AreaTrabalho dado={dado} />
                        ) : (
                            ''
                        )
                    )}
                    {dados.atencao.fix.map(dado =>
                        dado.Id === idCardSelecionado ? (
                            <AreaTrabalho dado={dado} />
                        ) : (
                            ''
                        )
                    )}
                    {dados.atencao.requerimento.map(dado =>
                        dado.Id === idCardSelecionado ? (
                            <AreaTrabalho dado={dado} />
                        ) : (
                            ''
                        )
                    )}
                    {dados.atrasado.sol.map(dado =>
                        dado.Id === idCardSelecionado ? (
                            <AreaTrabalho dado={dado} />
                        ) : (
                            ''
                        )
                    )}
                    {dados.atrasado.fix.map(dado =>
                        dado.Id === idCardSelecionado ? (
                            <AreaTrabalho dado={dado} />
                        ) : (
                            ''
                        )
                    )}
                    {dados.atrasado.requerimento.map(dado =>
                        dado.Id === idCardSelecionado ? (
                            <AreaTrabalho dado={dado} />
                        ) : (
                            ''
                        )
                    )}
                    {dados.concluido.sol.map(dado =>
                        dado.Id === idCardSelecionado ? (
                            <AreaTrabalho dado={dado} />
                        ) : (
                            ''
                        )
                    )}
                    {dados.concluido.fix.map(dado =>
                        dado.Id === idCardSelecionado ? (
                            <AreaTrabalho dado={dado} />
                        ) : (
                            ''
                        )
                    )}
                    {dados.concluido.requerimento.map(dado =>
                        dado.Id === idCardSelecionado ? (
                            <AreaTrabalho dado={dado} />
                        ) : (
                            ''
                        )
                    )}
                </div>
            </Main>
        </>
    );
}

export default connect(state => ({
    dadosTrello: state.dadosTrello,
}))(Html);
