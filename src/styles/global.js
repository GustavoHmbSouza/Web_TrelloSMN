import { createGlobalStyle } from 'styled-components';

const roxoClaro = 'rgb(113, 89, 193)';

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    html, body, #root
    {
        min-height: 100%;
    }

    body
    {
        background: #FFF;
    }

    body, input, button
    {
        font-size: 14px;
        font-family: Arial, Helvetica, sans-serif;
    }

    button
    {
        cursor: pointer;
    }

    #root{
        #cabecalho{
            font-size: 25px;
            color: ${roxoClaro};
            border-bottom: 1px solid ${roxoClaro};
            padding-bottom: 8px;
            margin-bottom: 30px;
        }
    }
`;
