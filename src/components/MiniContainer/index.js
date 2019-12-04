import styled from 'styled-components';
import { corPrimaria, boxShadowPadrao } from '../../styles/variaveisGlobais';

const MiniContainer = styled.article`
    max-width: 180px;
    border: 1px solid ${corPrimaria};
    border-radius: 5px;
    padding: 15px;
    margin: 20px 0;
    box-shadow: ${boxShadowPadrao};

    p {
        color: ${corPrimaria};
    }
`;

export default MiniContainer;
