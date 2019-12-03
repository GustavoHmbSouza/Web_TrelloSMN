import styled from 'styled-components';

const roxoClaro = 'rgb(113, 89, 193)';

export const Main = styled.main`
    display: flex;
    padding: 50px;

    nav {
        .Dropdown-placeholder {
            width: 100px;
            border-bottom: 2px solid ${roxoClaro};
            cursor: pointer;
            color: ${roxoClaro};
            font-weight: bold;
        }

        .Dropdown-menu {
            cursor: pointer;
            color: ${roxoClaro};
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
                    background: #00bfff;
                }

                #legendaAmarelo {
                    background: yellow;
                }

                #legendalaranja {
                    background: rgb(239, 108, 0);
                }

                #legendaVerde {
                    background: rgb(34, 190, 118);
                }

                #legendaRoxo {
                    background: ${roxoClaro};
                }

                p {
                    padding-left: 5px;
                    color: ${roxoClaro};
                }
            }
        }

        #qtdeTarefas {
            border-bottom: 2px solid ${roxoClaro};
            color: ${roxoClaro};
            width: 100px;
            margin-top: 80px;
            display: block;
            font-weight: bold;
        }
    }

    #graficoQtd {
        color: ${roxoClaro};
        font-weight: bold;
        text-align: center;
        margin-left: 100px;

        p {
            margin-bottom: 10px;
        }
    }

    #graficoHoras {
        color: ${roxoClaro};
        font-weight: bold;
        text-align: center;

        p {
            margin-bottom: 10px;
        }
    }
`;

export const ItemLevantamento = styled.li``;
