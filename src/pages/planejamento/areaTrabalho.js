import React from 'react';
import { FiClock } from 'react-icons/fi';
import { IoIosMenu } from 'react-icons/io';
import { MdGroup } from 'react-icons/md';
import interrogacao from '../../imgs/interroga.jpg';

export default function areaTrabalho(props) {
    const { dado } = props;

    return (
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
                <MdGroup />
                {dado.membros.map(membro =>
                    membro.avatarHash ? (
                        <img
                            src={`https://trello-avatars.s3.amazonaws.com/${membro.avatarHash}/170.png`}
                            alt=""
                        />
                    ) : (
                        <img src={interrogacao} alt="" />
                    )
                )}
            </article>
        </section>
    );
}
