import React from 'react';
import { connect } from 'react-redux';
import Dropdown from 'react-dropdown';
import Chart from 'react-apexcharts';
import ReactDOM from 'react-dom';
import Menu from '../../components/Menu';
import { Main } from './styles';
import Modal from '../../components/Modal';

function Html({ dadosTrello, selecionaGrafico, graficoSelecionado }) {
    if (!dadosTrello[0]) {
        window.location.href = '/';
    }

    const { dados } = dadosTrello[0];

    const options = ['Todos', 'Sol', 'Requerimento', 'Fix'];

    let dataPoints = [];
    let title;
    let total;
    let totalHoras;
    let totalHorasConcluido;
    let totalHorasPrevisto;

    // Variáveis para quantidade de solicitações
    const qtdSol =
        dados.previsto.qtdSol.qtdTotal +
        dados.atencao.qtdSol.qtdTotal +
        dados.atrasado.qtdSol.qtdTotal +
        dados.concluido.qtdSol.qtdTotal;
    const qtdRequerimento =
        dados.previsto.qtdRequerimento.qtdTotal +
        dados.atencao.qtdRequerimento.qtdTotal +
        dados.atrasado.qtdRequerimento.qtdTotal +
        dados.concluido.qtdRequerimento.qtdTotal;
    const qtdFix =
        dados.previsto.qtdFix.qtdTotal +
        dados.atencao.qtdFix.qtdTotal +
        dados.atrasado.qtdFix.qtdTotal +
        dados.concluido.qtdFix.qtdTotal;

    // Variáveis para o calculo de horas totais
    const qtdHorasSol =
        dados.previsto.qtdSol.qtdHorasTotal +
        dados.atencao.qtdSol.qtdHorasTotal +
        dados.atrasado.qtdSol.qtdHorasTotal +
        dados.concluido.qtdSol.qtdHorasTotal;
    const qtdHorasRequerimento =
        dados.previsto.qtdRequerimento.qtdHorasTotal +
        dados.atencao.qtdRequerimento.qtdHorasTotal +
        dados.atrasado.qtdRequerimento.qtdHorasTotal +
        dados.concluido.qtdRequerimento.qtdHorasTotal;
    const qtdHorasFix =
        dados.previsto.qtdFix.qtdHorasTotal +
        dados.atencao.qtdFix.qtdHorasTotal +
        dados.atrasado.qtdFix.qtdHorasTotal +
        dados.concluido.qtdFix.qtdHorasTotal;

    // Variáveis para o calculo de horas Concluídas
    const qtdHorasConcluidoSol =
        dados.previsto.qtdSol.qtdHorasConcluido +
        dados.atencao.qtdSol.qtdHorasConcluido +
        dados.atrasado.qtdSol.qtdHorasConcluido +
        dados.concluido.qtdSol.qtdHorasConcluido;
    const qtdHorasConcluidoRequerimento =
        dados.previsto.qtdRequerimento.qtdHorasConcluido +
        dados.atencao.qtdRequerimento.qtdHorasConcluido +
        dados.atrasado.qtdRequerimento.qtdHorasConcluido +
        dados.concluido.qtdRequerimento.qtdHorasConcluido;
    const qtdHorasConcluidoFix =
        dados.previsto.qtdFix.qtdHorasConcluido +
        dados.atencao.qtdFix.qtdHorasConcluido +
        dados.atrasado.qtdFix.qtdHorasConcluido +
        dados.concluido.qtdFix.qtdHorasConcluido;

    // Variáveis para o calculo de horas previstas
    const qtdHorasPrevistoSol =
        dados.previsto.qtdSol.qtdHorasPrevisto +
        dados.atencao.qtdSol.qtdHorasPrevisto +
        dados.atrasado.qtdSol.qtdHorasPrevisto +
        dados.concluido.qtdSol.qtdHorasPrevisto;
    const qtdHorasPrevistoRequerimento =
        dados.previsto.qtdRequerimento.qtdHorasPrevisto +
        dados.atencao.qtdRequerimento.qtdHorasPrevisto +
        dados.atrasado.qtdRequerimento.qtdHorasPrevisto +
        dados.concluido.qtdRequerimento.qtdHorasPrevisto;
    const qtdHorasPrevistoFix =
        dados.previsto.qtdFix.qtdHorasPrevisto +
        dados.atencao.qtdFix.qtdHorasPrevisto +
        dados.atrasado.qtdFix.qtdHorasPrevisto +
        dados.concluido.qtdFix.qtdHorasPrevisto;

    // Variáveis que vão nos labels e mais tarde serão exibidos na modal
    let qtdHorasPrevistoConcluido = 0;
    let qtdHorasAtencaoConcluido = 0;
    let qtdHorasAtrasadoConcluido = 0;
    let qtdHorasConcluidoConcluido = 0;

    let devsPrevisto;
    let devsAtencao;
    let devsAtrasado;
    let devsConcluido;

    if (graficoSelecionado == 'Todos') {
        total = qtdSol + qtdRequerimento + qtdFix;
        totalHoras = qtdHorasSol + qtdHorasRequerimento + qtdHorasFix;
        totalHorasConcluido =
            qtdHorasConcluidoSol +
            qtdHorasConcluidoRequerimento +
            qtdHorasConcluidoFix;
        totalHorasPrevisto =
            qtdHorasPrevistoSol +
            qtdHorasPrevistoRequerimento +
            qtdHorasPrevistoFix;

        dataPoints = [
            {
                title: 'Previsto',
                value: parseFloat(
                    (
                        ((dados.previsto.qtdSol.qtdTotal +
                            dados.previsto.qtdRequerimento.qtdTotal +
                            dados.previsto.qtdFix.qtdTotal) *
                            100) /
                        total
                    ).toFixed(2)
                ),
            },
            {
                title: 'Atenção',
                value: parseFloat(
                    (
                        ((dados.atencao.qtdSol.qtdTotal +
                            dados.atencao.qtdRequerimento.qtdTotal +
                            dados.atencao.qtdFix.qtdTotal) *
                            100) /
                        total
                    ).toFixed(2)
                ),
            },
            {
                title: 'Atrasado',
                value: parseFloat(
                    (
                        ((dados.atrasado.qtdSol.qtdTotal +
                            dados.atrasado.qtdRequerimento.qtdTotal +
                            dados.atrasado.qtdFix.qtdTotal) *
                            100) /
                        total
                    ).toFixed(2)
                ),
            },
            {
                title: 'Concluido',
                value: parseFloat(
                    (
                        ((dados.concluido.qtdSol.qtdTotal +
                            dados.concluido.qtdRequerimento.qtdTotal +
                            dados.concluido.qtdFix.qtdTotal) *
                            100) /
                        total
                    ).toFixed(2)
                ),
            },
        ];
        title = 'Todos';

        qtdHorasPrevistoConcluido =
            dados.previsto.qtdSol.qtdHorasConcluido +
            dados.previsto.qtdRequerimento.qtdHorasConcluido +
            dados.previsto.qtdFix.qtdHorasConcluido;
        qtdHorasAtencaoConcluido =
            dados.atencao.qtdSol.qtdHorasConcluido +
            dados.atencao.qtdRequerimento.qtdHorasConcluido +
            dados.atencao.qtdFix.qtdHorasConcluido;
        qtdHorasAtrasadoConcluido =
            dados.atrasado.qtdSol.qtdHorasConcluido +
            dados.atrasado.qtdRequerimento.qtdHorasConcluido +
            dados.atrasado.qtdFix.qtdHorasConcluido;
        qtdHorasConcluidoConcluido =
            dados.concluido.qtdSol.qtdHorasConcluido +
            dados.concluido.qtdRequerimento.qtdHorasConcluido +
            dados.concluido.qtdFix.qtdHorasConcluido;

        devsPrevisto = [
            dados.previsto.sol,
            dados.previsto.requerimento,
            dados.previsto.fix,
        ];
        devsAtrasado =
            dados.atrasado.sol +
            dados.atrasado.requerimento +
            dados.atrasado.fix;
        devsAtencao =
            dados.atencao.sol + dados.atencao.requerimento + dados.atencao.fix;
        devsConcluido =
            dados.concluido.sol +
            dados.concluido.requerimento +
            dados.concluido.fix;
        console.log(devsPrevisto);
    } else if (graficoSelecionado == 'Sol') {
        total = qtdSol;
        totalHoras = qtdHorasSol;
        totalHorasConcluido = qtdHorasConcluidoSol;
        totalHorasPrevisto = qtdHorasPrevistoSol;

        dataPoints = [
            {
                title: 'Previsto',
                value: parseFloat(
                    ((dados.previsto.qtdSol.qtdTotal * 100) / total).toFixed(2)
                ),
            },
            {
                title: 'Atenção',
                value: parseFloat(
                    ((dados.atencao.qtdSol.qtdTotal * 100) / total).toFixed(2)
                ),
            },
            {
                title: 'Atrasado',
                value: parseFloat(
                    ((dados.atrasado.qtdSol.qtdTotal * 100) / total).toFixed(2)
                ),
            },
            {
                title: 'Concluido',
                value: parseFloat(
                    ((dados.concluido.qtdSol.qtdTotal * 100) / total).toFixed(2)
                ),
            },
        ];
        title = 'Sol';

        qtdHorasPrevistoConcluido = dados.previsto.qtdSol.qtdHorasConcluido;
        qtdHorasAtencaoConcluido = dados.atencao.qtdSol.qtdHorasConcluido;
        qtdHorasAtrasadoConcluido = dados.atrasado.qtdSol.qtdHorasConcluido;
        qtdHorasConcluidoConcluido = dados.concluido.qtdSol.qtdHorasConcluido;

        devsPrevisto = dados.previsto.sol;
        devsAtrasado = dados.atrasado.sol;
        devsAtencao = dados.atencao.sol;
        devsConcluido = dados.concluido.sol;
    } else if (graficoSelecionado == 'Requerimento') {
        total = qtdRequerimento;
        totalHoras = qtdHorasRequerimento;
        totalHorasConcluido = qtdHorasConcluidoRequerimento;
        totalHorasPrevisto = qtdHorasPrevistoRequerimento;

        dataPoints = [
            {
                title: 'Previsto',
                value: parseFloat(
                    (
                        (dados.previsto.qtdRequerimento.qtdTotal * 100) /
                        total
                    ).toFixed(2)
                ),
            },
            {
                title: 'Atenção',
                value: parseFloat(
                    (
                        (dados.atencao.qtdRequerimento.qtdTotal * 100) /
                        total
                    ).toFixed(2)
                ),
            },
            {
                title: 'Atrasado',
                value: parseFloat(
                    (
                        (dados.atrasado.qtdRequerimento.qtdTotal * 100) /
                        total
                    ).toFixed(2)
                ),
            },
            {
                title: 'Concluido',
                value: parseFloat(
                    (
                        (dados.concluido.qtdRequerimento.qtdTotal * 100) /
                        total
                    ).toFixed(2)
                ),
            },
        ];
        title = 'Requerimento';

        qtdHorasPrevistoConcluido =
            dados.previsto.qtdRequerimento.qtdHorasConcluido;
        qtdHorasAtencaoConcluido =
            dados.atencao.qtdRequerimento.qtdHorasConcluido;
        qtdHorasAtrasadoConcluido =
            dados.atrasado.qtdRequerimento.qtdHorasConcluido;
        qtdHorasConcluidoConcluido =
            dados.concluido.qtdRequerimento.qtdHorasConcluido;

        devsPrevisto = dados.previsto.requerimento;
        devsAtrasado = dados.atrasado.requerimento;
        devsAtencao = dados.atencao.requerimento;
        devsConcluido = dados.concluido.requerimento;
    } else if (graficoSelecionado == 'Fix') {
        total = qtdFix;
        totalHoras = qtdHorasFix;
        totalHorasConcluido = qtdHorasConcluidoFix;
        totalHorasPrevisto = qtdHorasPrevistoFix;

        dataPoints = [
            {
                title: 'Atenção',
                value: parseFloat(
                    ((dados.previsto.qtdFix.qtdTotal * 100) / total).toFixed(2)
                ),
            },
            {
                title: 'Atenção',
                value: parseFloat(
                    ((dados.atencao.qtdFix.qtdTotal * 100) / total).toFixed(2)
                ),
            },
            {
                title: 'Atrasado',
                value: parseFloat(
                    ((dados.atrasado.qtdFix.qtdTotal * 100) / total).toFixed(2)
                ),
            },
            {
                title: 'Concluido',
                value: parseFloat(
                    ((dados.concluido.qtdFix.qtdTotal * 100) / total).toFixed(2)
                ),
            },
        ];
        title = 'Fix';

        qtdHorasPrevistoConcluido = dados.previsto.qtdFix.qtdHorasConcluido;
        qtdHorasAtencaoConcluido = dados.atencao.qtdFix.qtdHorasConcluido;
        qtdHorasAtrasadoConcluido = dados.atrasado.qtdFix.qtdHorasConcluido;
        qtdHorasConcluidoConcluido = dados.concluido.qtdFix.qtdHorasConcluido;

        devsPrevisto = dados.previsto.fix;
        devsAtrasado = dados.atrasado.fix;
        devsAtencao = dados.atencao.fix;
        devsConcluido = dados.concluido.fix;
    }

    const daChar = {
        options: {
            labels: [
                { qtd: qtdHorasPrevistoConcluido, devs: devsPrevisto, title },
                { qtd: qtdHorasAtencaoConcluido, devs: devsAtencao, title },
                { qtd: qtdHorasAtrasadoConcluido, devs: devsAtrasado, title },
                { qtd: qtdHorasConcluidoConcluido, devs: devsConcluido, title },
            ],
            colors: ['#00BFFF', '#FFFF00', '#F44336', '#00FF00'],
            tooltip: {
                enabled: false,
            },
            plotOptions: {
                pie: {
                    expandOnClick: false,
                },
            },
            legend: {
                show: false,
            },
            chart: {
                events: {
                    dataPointSelection(event, chartContext, config) {
                        const element = (
                            <Modal
                                props={
                                    config.w.globals.labels[
                                        config.dataPointIndex
                                    ]
                                }
                            />
                        );

                        ReactDOM.render(
                            null,
                            document.getElementById('idModal')
                        );

                        ReactDOM.render(
                            element,
                            document.getElementById('idModal')
                        );
                    },
                },
            },
        },
        series: [
            dataPoints[0].value,
            dataPoints[1].value,
            dataPoints[2].value,
            dataPoints[3].value,
        ],
    };

    return (
        <>
            <Menu />
            <Main>
                <nav>
                    <Dropdown
                        options={options}
                        onChange={e => {
                            selecionaGrafico(e.value);
                        }}
                        value={graficoSelecionado}
                        id="dropDown"
                    />
                    <span id="qtdeTarefas">Qtde: {total}</span>
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
                        <li>
                            <div id="legendaRoxo"> </div>
                            <p>Total</p>
                        </li>
                    </ul>
                </nav>
                <div id="graficoQtd">
                    <p>Quantidade</p>
                    <Chart
                        options={daChar.options}
                        series={daChar.series}
                        type="donut"
                        width="380"
                    />
                </div>
                <div id="idModal" />
            </Main>
        </>
    );
}

export default connect(state => ({
    dadosTrello: state.dadosTrello,
}))(Html);
