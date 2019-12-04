import styled from 'styled-components';
import {
    corPrimaria,
    corConcluido,
    corAtrasado,
    corAtencao,
    corPrevisto,
} from '../../styles/variaveisGlobais';

export const Main = styled.main`
    display: flex;
    padding: 50px;

    nav {
        .Dropdown-placeholder {
            width: 100px;
            border-bottom: 2px solid ${corPrimaria};
            cursor: pointer;
            color: ${corPrimaria};
            font-weight: bold;
        }

        .Dropdown-menu {
            cursor: pointer;
            color: ${corPrimaria};
            font-weight: bold;
            position: absolute;
            display: block;
        }

        ul {
            margin-top: 40px;

            li {
                list-style: none;
                padding-top: 10px;
                display: flex;

                div {
                    width: 20px;
                    height: 20px;
                }

                #legendaAzul {
                    background: ${corPrevisto};
                }

                #legendaAmarelo {
                    background: ${corAtencao};
                }

                #legendalaranja {
                    background: ${corAtrasado};
                }

                #legendaVerde {
                    background: ${corConcluido};
                }

                p {
                    padding-left: 5px;
                    color: ${corPrimaria};
                }
            }
        }

        #qtdeTarefas {
            border-bottom: 2px solid ${corPrimaria};
            color: ${corPrimaria};
            width: 140px;
            margin-top: 80px;
            display: block;
            font-weight: bold;
        }

        #totalHoras {
            border-bottom: 2px solid ${corPrimaria};
            color: ${corPrimaria};
            width: 140px;
            margin-top: 50px;
            display: block;
            font-weight: bold;
        }

        #totalHorasConcluidas {
            border-bottom: 2px solid ${corConcluido};
            color: ${corConcluido};
            width: 140px;
            margin-top: 50px;
            display: block;
            font-weight: bold;
        }
    }

    #graficoQtd {
        color: ${corPrimaria};
        font-weight: bold;
        text-align: center;
        margin-left: 100px;

        p {
            margin-bottom: 10px;
        }
    }

    #graficoHoras {
        color: ${corPrimaria};
        font-weight: bold;
        text-align: center;

        p {
            margin-bottom: 10px;
        }
    }
`;

export const ItemLevantamento = styled.li``;
