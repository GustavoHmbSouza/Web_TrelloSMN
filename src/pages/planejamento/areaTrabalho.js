import React from 'react';
import { FiClock, FiArrowRightCircle } from 'react-icons/fi';
import { IoIosMenu } from 'react-icons/io';
import { MdGroup } from 'react-icons/md';
import { FaCalendarAlt, FaHourglassStart } from 'react-icons/fa';
import interrogacao from '../../imgs/interroga.jpg';

export default function areaTrabalho(props) {
    const { dado } = props;

    return (
        <section id="areaTrabalho">
            <article id="descrAreaTrabalho">
                <IoIosMenu />
                <p>{dado.Nom_Descricao}</p>
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
            <article>
                <FiClock />
                {dado.Nom_DataEntregaFormatada ? (
                    <p>{dado.Nom_DataEntregaFormatada}</p>
                ) : (
                    ''
                )}
            </article>
            <article id="dataInicioFim">
                <FaCalendarAlt />
                {dado.comentarios.Dat_DataInicio ? (
                    <p>{dado.comentarios.Dat_DataInicio}</p>
                ) : (
                    ''
                )}
                {dado.comentarios.Dat_DataFim ? (
                    <p>{dado.comentarios.Dat_DataFim}</p>
                ) : (
                    ''
                )}
            </article>
            <article id="horasFuncionalidade">
                <FaHourglassStart />
                {dado.comentarios.Num_Horas ? (
                    <p>{dado.comentarios.Num_Horas}</p>
                ) : (
                    ''
                )}
            </article>
            <article>
                <FiArrowRightCircle />
                {dado.comentarios.Nom_Fase ? (
                    <p>{dado.comentarios.Nom_Fase}</p>
                ) : (
                    ''
                )}
            </article>
        </section>
    );
}
