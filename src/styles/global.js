import { createGlobalStyle } from 'styled-components';
import { corPrimaria } from './variaveisGlobais';

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
        display: grid;
        grid-template-columns: 60px minmax(100px, 1400px);

        #cabecalho{
            font-size: 25px;
            color: ${corPrimaria};
            border-bottom: 1px solid ${corPrimaria};
            padding-bottom: 8px;
            margin-bottom: 30px;
        }
    }
`;
