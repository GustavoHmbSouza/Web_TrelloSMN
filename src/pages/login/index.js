import React, { Component } from 'react';
import { connect } from 'react-redux';
import Html from './html';
import api from '../../services/api';

class login extends Component {
    state = {};

    validarLogin = async () => {
        const response = await api.post('/login', null, {
            params: {
                login: document.getElementById('idLogin').value,
                senha: document.getElementById('idSenha').value,
            },
        });

        const data = {
            dados: response.data,
        };

        if (data.dados) {
            window.location.href = '/planejamento';
        }
    };

    render() {
        return <Html validarLogin={this.validarLogin} />;
    }
}

export default connect(state => ({
    dadosLogin: state.dadosLogin,
}))(login);
