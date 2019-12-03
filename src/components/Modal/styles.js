import styled from 'styled-components';

const roxoClaro = 'rgb(113, 89, 193)';

export const Main = styled.div`
    h1 {
        font-size: 18px;
    }

    li {
        font-size: 14px;
        color: ${roxoClaro};

        a {
            text-decoration: none;
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
