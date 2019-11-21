import React from 'react';
import { connect } from 'react-redux';
import Menu from '../../components/Menu';
import { Main } from './styles';

function Html({ dadosTrello, selecionaQuadro, loading }) {
    const { dados, loadingDados } = dadosTrello[0];

    if (!loadingDados) {
        window.location.href = '/';
    }

    if (!loading) {
        selecionaQuadro(dados);
    }

    return (
        <>
            <Menu />
            <Main>aaaaaaa</Main>
        </>
    );
}

export default connect(state => ({
    dadosTrello: state.dadosTrello,
}))(Html);
