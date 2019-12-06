import React from 'react';
import { connect } from 'react-redux';
import { Main } from './styles';

function Html({ validarLogin }) {
    return (
        <>
            <span id="divbranca" />
            <Main>
                <article>
                    <div>
                        <input type="text" placeholder="Login" id="idLogin" />
                    </div>
                    <div>
                        <input type="text" placeholder="Senha" id="idSenha" />
                    </div>
                    <input
                        type="button"
                        onClick={() => validarLogin()}
                        value="Entrar"
                    />
                </article>
            </Main>
        </>
    );
}

export default connect(state => ({
    dadosTrello: state.dadosTrello,
}))(Html);
