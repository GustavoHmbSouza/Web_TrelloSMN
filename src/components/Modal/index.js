import React from 'react';

import Html from './html';

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
    const { devs, horas, title, modalGrafico } = props;

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <Html
            modalIsOpen={modalIsOpen}
            closeModal={closeModal}
            customStyles={customStyles}
            modalGrafico={modalGrafico}
            horas={horas}
            devs={devs}
            title={title}
        />
    );
}
