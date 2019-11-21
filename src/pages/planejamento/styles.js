import styled from 'styled-components';

const roxoClaro = 'rgb(113, 89, 193)';
const roxoSuperClaro = 'rgb(236, 231, 248)';
const verdeAgua = 'rgb(3, 212, 167)';
const boxShadowPadrao = '1px 2px 5px rgba(0, 0, 0, 0.5)';

const bordaBotoesMenu = `color: ${verdeAgua}; border: 2px solid ${verdeAgua}; box-shadow: none;`;

export const Main = styled.main`
    max-width: 1400px;
    margin: 50px 50px;

    ul {
        display: flex;
        justify-content: space-between;
        padding-right: 50%;
        li {
            font-size: 13px;
            list-style-type: none;
            background: ${roxoClaro};
            border-radius: 20px;
            padding: 10px 0;
            min-width: 120px;
            text-align: center;
            color: ${roxoSuperClaro};
            border: 2px solid transparent;
            cursor: pointer;
            box-shadow: ${boxShadowPadrao};

            -webkit-touch-callout: none;
            -webkit-user-select: none;
            -khtml-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
        }
    }

    #conteudo {
        display: grid;
        grid-template-columns: minmax(600px, 3fr) minmax(500px, 1fr);

        #colunas {
            margin-top: 30px;
            display: flex;

            .coluna {
                min-height: 600px;
                margin-right: 40px;

                &:first-child {
                    width: 180px;
                }

                & + .coluna {
                    width: 220px;
                    padding-left: 40px;
                    border-left: 1px solid ${roxoClaro};
                }

                .miniContainer {
                    cursor: pointer;

                    &:hover {
                        border: 1px solid ${verdeAgua};
                    }

                    p {
                        margin-top: 7px;
                    }

                    #iconesMiniContainer {
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        margin-top: 7px;

                        .iconeMiniContainer {
                            display: flex;
                            align-items: center;
                        }

                        a:link,
                        a:visited,
                        a:active {
                            text-decoration: none;
                            color: black;
                        }
                        a:hover {
                            text-decoration: underline;
                            color: ${roxoClaro};
                        }

                        a {
                            align-items: center;
                        }
                    }
                }
            }

            .tituloColuna {
                text-align: center;
                color: ${roxoClaro};
            }
        }

        #areaTrabalho {
            width: 500px;
            border: 1px solid ${roxoClaro};
            background-color: ${roxoSuperClaro};
            border-radius: 5px;
            max-height: 600px;

            article {
                margin: 25px 0px 25px 50px;
                min-height: 28px;

                & + article {
                    display: flex;
                    align-items: center;
                }

                svg {
                    color: ${roxoClaro};
                    font-size: 25px;
                    margin-right: 5px;
                }

                p {
                    border: 1px solid ${roxoClaro};

                    background: white;
                    border-radius: 20px;
                    padding: 5px;
                }
            }

            #dataInicioFim {
                p {
                    & + p {
                        margin-left: 5px;
                    }
                }
            }

            #descrAreaTrabalho {
                svg {
                    color: ${roxoClaro};
                    font-size: 25px;
                }

                p {
                    width: 400px;
                    height: 250px;
                    border-radius: 5px;
                }
            }

            #horasFuncionalidade {
                p {
                }
            }

            #membros {
                height: 35px;

                img {
                    height: 35px;
                    width: 40px;
                    border-radius: 50%;
                    margin-right: 5px;
                }
            }
        }
    }

    #cardSelecionado {
        border: 1px solid ${verdeAgua};
        box-shadow: none;
    }
`;

export const ItemLevantamento = styled.li.attrs(props => ({
    disabled: props.ItemLevantamentoEnabled,
}))`
    &[disabled] {
        ${bordaBotoesMenu}
    }
`;

export const ItemRequerimentos = styled.li.attrs(props => ({
    disabled: props.ItemRequerimentosEnabled,
}))`
    &[disabled] {
        ${bordaBotoesMenu}
    }
`;

export const ItemSolicitacoes = styled.li.attrs(props => ({
    disabled: props.ItemSolicitacoesEnabled,
}))`
    &[disabled] {
        ${bordaBotoesMenu}
    }
`;

export const ItemFix = styled.li.attrs(props => ({
    disabled: props.ItemFixEnabled,
}))`
    &[disabled] {
        ${bordaBotoesMenu}
    }
`;
