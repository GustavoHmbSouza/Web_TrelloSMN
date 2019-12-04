import styled from 'styled-components';
import { corPrimaria, corSecundaria } from '../../styles/variaveisGlobais';

export const Menu = styled.nav`
    display: flex;
    flex-direction: column;
    background: ${corPrimaria};
    justify-content: space-between;
    height: 100vh;

    padding: 40px 5px;
    svg {
        font-size: 35px;
        cursor: pointer;
        color: White;

        &:hover {
            color: ${corSecundaria};
        }
    }

    #iconesMenu {
        display: flex;
        flex-direction: column;

        & + #iconesMenu {
            margin-top: 30px;
        }
    }

    .icone {
        margin: 0 auto;

        & + .icone {
            margin-top: 20px;
        }
    }
`;
