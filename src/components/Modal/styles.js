import styled from 'styled-components';
import {
    corPrimaria,
    corConcluido,
    corPrevisto,
} from '../../styles/variaveisGlobais';

export const ModalGrafico = styled.div`
    max-width: 600px;

    h1 {
        font-size: 18px;

        span {
            background: ${corPrevisto};
            border-radius: 10px;
            padding: 3px 30px;
            margin-left: 5px;
            color: white;
            font-size: 14px;

            &:last-child {
                background: ${corConcluido};
                border-radius: 10px;
                padding: 3px 30px;
                margin-left: 5px;
                color: white;
                font-size: 14px;
            }
        }
    }

    li {
        font-size: 14px;
        padding: 3px 0;

        a {
            text-decoration: none;
            line-height: 1.6;

            &:link,
            &:visited,
            &:hover,
            &:active {
                color: ${corPrimaria};
            }
        }

        span {
            background: ${corPrevisto};
            border-radius: 10px;
            padding: 3px 30px;
            margin-left: 5px;
            color: white;

            &:last-child {
                background: ${corConcluido};
                border-radius: 10px;
                padding: 3px 30px;
                margin-left: 5px;
                color: white;
            }
        }
    }
`;
