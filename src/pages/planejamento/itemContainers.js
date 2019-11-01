import React from 'react';
import MiniContainer from '../../components/MiniContainer/index';

export default function itemContainers(props) {
    const dado = props.dado;
    return (
        <>
            {dado.Nom_Sigla.indexOf('SOL') != -1 ? (
                <MiniContainer>
                    <h1>{dado.Nom_Sigla}</h1>
                    <p>{dado.Nom_Name}</p>
                </MiniContainer>
            ) : (
                ''
            )}

            {dado.Nom_Sigla.indexOf('FIX') != -1 ? (
                <MiniContainer>
                    <h1>{dado.Nom_Sigla}</h1>
                    <p>{dado.Nom_Name}</p>
                </MiniContainer>
            ) : (
                ''
            )}
        </>
    );
}
