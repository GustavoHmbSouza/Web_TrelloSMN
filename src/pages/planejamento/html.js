import React from 'react';
import ItemContainers from './itemContainers';
import { Main } from './styles';

export default function Html(props) {
    const { dados } = props;

    //{dados[0].Id}
    return (
        <>
            <Main>
                <ul>
                    <li id="itemLevantamento">Levantamentos</li>
                    <li id="itemRequerimentos">Requerimentos</li>
                    <li id="itemSolicitações">Solicitações</li>
                    <li id="itemFix">Fix</li>
                </ul>
                <section id="colunas">
                    <section className="coluna">
                        <h1 className="tituloColuna">Atenção!</h1>
                        {dados.map(dado => (
                            <ItemContainers key={dado} dado={dado} />
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
