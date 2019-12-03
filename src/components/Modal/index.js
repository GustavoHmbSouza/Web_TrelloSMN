import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import { Main } from './styles';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)

export default function App({ props }) {
    let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(true);
    const { devs, qtd, title } = props;

    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#f00';
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <div>
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <h2 hidden ref={_subtitle => (subtitle = _subtitle)} />
                <Main>
                    <h1>Total horas concluído: {qtd}H</h1>
                    {(() => {
                        if (title != 'Todos') {
                            if (devs) {
                                return devs.map(dado => (
                                    <li>
                                        <a href={dado.Nom_Url} target="_blank">
                                            {dado.Nom_Sigla} - {dado.Nom_Name}{' '}
                                        </a>
                                        <span>
                                            {dado.comentarios.Num_Horas}H
                                        </span>
                                    </li>
                                ));
                            }
                        } else {
                            //Aqui ficará o código de quando ele seleciona todos
                            return <p>aaa</p>;
                        }
                        return '';
                    })()}
                </Main>
            </Modal>
        </div>
    );
}
