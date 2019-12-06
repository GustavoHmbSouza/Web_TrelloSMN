import React from 'react';
import { connect } from 'react-redux';
import Dropdown from 'react-dropdown';
import Chart from 'react-apexcharts';
import Menu from '../../components/Menu';
import { Main } from './styles';

function Html({
    dadosTrello,
    selecionaGrafico,
    graficoSelecionado,
    processaDadosGrafico,
    total,
    totalHoras,
    totalHorasConcluido,
    optionsGrafico,
    seriesGrafico,
    loading,
}) {
    if (!dadosTrello[0]) {
        window.location.href = '/';
    }
    const options = ['Todos', 'Sol', 'Requerimento', 'Fix'];

    const { dados } = dadosTrello[0];
    if (!loading) {
        processaDadosGrafico(dados);
        return <></>;
    }

    return (
        <>
            <Menu />
            <Main>
                <header id="cabecalho">Gráfico</header>
                <div>
                    <nav>
                        <Dropdown
                            options={options}
                            onChange={e => {
                                selecionaGrafico({ opt: e.value, dados });
                            }}
                            value={graficoSelecionado}
                            id="dropDown"
                        />
                        <span id="qtdeTarefas">Quantidade: {total}</span>
                        <span id="totalHoras">T horas: {totalHoras}</span>
                        <span id="totalHorasConcluidas">
                            T h Concluídas: {totalHorasConcluido}
                        </span>

                        <ul>
                            <li>
                                <div id="legendaAzul"> </div>
                                <p>Previsto</p>
                            </li>
                            <li>
                                <div id="legendaAmarelo"> </div>
                                <p>Atenção</p>
                            </li>
                            <li>
                                <div id="legendalaranja"> </div>
                                <p>Atrasado</p>
                            </li>
                            <li>
                                <div id="legendaVerde"> </div>
                                <p>Concluido</p>
                            </li>
                        </ul>
                    </nav>
                    <div id="graficoQtd">
                        <p>Quantidade</p>
                        <Chart
                            options={optionsGrafico}
                            series={seriesGrafico}
                            type="donut"
                            width="380"
                        />
                    </div>
                    <div id="idModal" />
                </div>
            </Main>
        </>
    );
}

export default connect(state => ({
    dadosTrello: state.dadosTrello,
}))(Html);
