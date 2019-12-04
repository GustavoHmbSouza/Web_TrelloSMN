import React from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { FiMessageSquare, FiPaperclip } from 'react-icons/fi';
import { IoMdCheckboxOutline } from 'react-icons/io';
import MiniContainer from '../../../components/MiniContainer/index';

export default function itemContainers(props) {
    const { dados, selecionaQuadro, idCardSelecionado } = props;

    return dados.map(dado => (
        <MiniContainer
            className="miniContainer"
            onClick={() => selecionaQuadro(dado.Id)}
            id={dado.Id === idCardSelecionado ? 'cardSelecionado' : ''}
        >
            <h1>{dado.Nom_Sigla}</h1>
            <p>{dado.Nom_Name}</p>
            <div id="iconesMiniContainer">
                <div className="iconeMiniContainer">
                    <FiPaperclip /> {dado.badges.attachments}
                </div>
                <div className="iconeMiniContainer">
                    <FiMessageSquare /> {dado.badges.comments}
                </div>
                <div className="iconeMiniContainer">
                    <IoMdCheckboxOutline />
                    <spam>{dado.badges.checkItemsChecked}/</spam>
                    <spam>{dado.badges.checkItems}</spam>
                </div>
                <a
                    className="iconeMiniContainer"
                    href={dado.url}
                    target="_blank"
                >
                    <FaExternalLinkAlt />
                </a>
            </div>
        </MiniContainer>
    ));
}
