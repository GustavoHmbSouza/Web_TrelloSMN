import React from 'react';
import Modal from 'react-modal';
import { ModalGrafico } from './styles';

export default function App({
    modalIsOpen,
    closeModal,
    customStyles,
    modalGrafico,
    horas,
    devs,
    title,
}) {
    return (
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
        >
            {(() => {
                if (modalGrafico) {
                    return (
                        <ModalGrafico>
                            <h1>
                                Horas: <span>{horas.totalHoras}H</span>{' '}
                                <span>{horas.concluidoHoras}H</span>
                            </h1>
                            {(() => {
                                if (title != 'Todos' && devs) {
                                    return devs.map(dado => (
                                        <li>
                                            <a
                                                href={dado.Nom_Url}
                                                target="_blank"
                                            >
                                                {dado.Nom_Sigla} -{' '}
                                                {dado.Nom_Name}{' '}
                                            </a>
                                            <span>
                                                {dado.comentarios.Num_Horas}H
                                            </span>
                                            <span>
                                                {
                                                    dado.comentarios
                                                        .Num_HorasConcluido
                                                }
                                                H
                                            </span>
                                        </li>
                                    ));
                                }
                                if (devs) {
                                    return devs.map(dados =>
                                        dados.map(dado => (
                                            <li>
                                                <a
                                                    href={dado.Nom_Url}
                                                    target="_blank"
                                                >
                                                    {dado.Nom_Sigla} -{' '}
                                                    {dado.Nom_Name}{' '}
                                                </a>
                                                <span>
                                                    {dado.comentarios.Num_Horas}
                                                    H
                                                </span>
                                                <span>
                                                    {
                                                        dado.comentarios
                                                            .Num_HorasConcluido
                                                    }
                                                    H
                                                </span>
                                            </li>
                                        ))
                                    );
                                }
                                return '';
                            })()}
                        </ModalGrafico>
                    );
                }
                return '';
            })()}
        </Modal>
    );
}
