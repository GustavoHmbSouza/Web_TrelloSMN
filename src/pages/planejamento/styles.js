import styled from 'styled-components';

const roxoClaro = 'rgb(113, 89, 193)';
const boxShadowPadrao = '1px 2px 5px rgba(0, 0, 0, 0.5)';

export const Main = styled.main`
    max-width: 1400px;
    margin: 50px auto;
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
            color: rgb(217, 207, 250);
            border: 2px solid transparent;
            cursor: pointer;
            box-shadow: ${boxShadowPadrao};

            &:hover {
                color: rgb(3, 212, 167);
                border: 2px solid rgb(3, 212, 167);
            }
        }
    }

    #colunas {
        margin-top: 30px;
        display: flex;

        .coluna {
            min-height: 600px;
            margin-right: 40px;

            & + .coluna {
                padding-left: 40px;
                border-left: 1px solid ${roxoClaro};
            }
        }

        .tituloColuna {
            text-align: center;
            color: ${roxoClaro};
        }
    }
`;
