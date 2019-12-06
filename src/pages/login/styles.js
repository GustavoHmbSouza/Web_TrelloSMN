import styled from 'styled-components';
import { corPrimaria, corSecundaria } from '../../styles/variaveisGlobais';
import { darken } from 'polished';
import principal from '../../imgs/principal.png';

export const Main = styled.main`
    background: url(${principal});
    width: 100vw;
    height: 100vh;
    background-position: center;

    article {
        margin-left: 85vw;
        margin-top: 6vh;

        div {
            border-bottom: 1px solid white;
            width: 200px;
            height: 35px;
            margin-bottom: 20px;

            input {
                border: none;
                background: transparent;
                width: 200px;
                height: 35px;
                color: white;
                padding: 0 8px;
            }

            input::-webkit-input-placeholder {
                font-size: 12px;
                font-weight: bold;
                color: white;
            }
        }

        > input {
            width: 200px;
            height: 35px;
            background: ${darken(0.17, corPrimaria)};
            border: none;
            color: ${darken(-0.03, corSecundaria)};
            font-weight: bold;
            font-size: 18px;
            box-shadow: 5px 4px 5px rgba(0, 0, 0, 0.5);
            cursor: pointer;

            &:active {
                box-shadow: none;
            }
        }
    }
`;
