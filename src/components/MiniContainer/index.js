import styled from 'styled-components';

const roxoClaro = 'rgb(113, 89, 193)';
const boxShadowPadrao = '1px 2px 5px rgba(0, 0, 0, 0.5)';

const MiniContainer = styled.article`
    max-width: 180px;
    border: 1px solid ${roxoClaro};
    border-radius: 5px;
    padding: 15px;
    margin: 20px 0;
    box-shadow: ${boxShadowPadrao};

    p {
        color: ${roxoClaro};
    }
`;

export default MiniContainer;
