import styled from 'styled-components';

const roxoClaro = 'rgb(113, 89, 193)';

export const ModalGrafico = styled.div`
    max-width: 600px;

    h1 {
        font-size: 18px;

        span {
            background: #00ff00;
            border-radius: 10px;
            padding: 3px 30px;
            margin-left: 5px;
            color: white;
            font-size: 14px;
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
                color: ${roxoClaro};
            }
        }

        span {
            background: blue;
            border-radius: 10px;
            padding: 3px 30px;
            margin-left: 5px;
            color: white;
        }
    }
`;
