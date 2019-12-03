import React from 'react';
import Modal from 'react-modal';
import { ModalGrafico } from './styles';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        boxShadow: '-2px 5px 5px rgba(65, 42, 143, 0.501)',
    },
};

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)

export default function App({ props }) {
    const [modalIsOpen, setIsOpen] = React.useState(true);
    const { devs, qtd, title, modalGrafico } = props;

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
        >
            {(() => {
                console.log(modalGrafico);
                console.log(title);
                if (modalGrafico) {
                    return (
                        <ModalGrafico>
                            <h1>
                                Total horas concluído: <span>{qtd}H</span>
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
