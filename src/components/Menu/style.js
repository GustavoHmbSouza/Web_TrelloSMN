import styled from 'styled-components';

const roxoClaro = 'rgb(113, 89, 193)';
const verdeAgua = 'rgb(3, 212, 167)';

export const Menu = styled.nav`
    display: flex;
    flex-direction: column;
    background: ${roxoClaro};
    justify-content: space-between;
    height: 100vh;

    padding: 40px 5px;
    svg{
        font-size: 35px;
        cursor: pointer;
        color: White;

        &:hover{
            color: ${verdeAgua}
        }
    }

    #iconesMenu 
    {
        display: flex;
        flex-direction: column;

        & + iconesMenu{
            margin-top: 30px;
        }
    }

    .icone{
        margin: 0 auto;

        & + .icone{
            margin-top: 20px;
        }
    }
`;