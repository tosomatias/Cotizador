import React from 'react';
import { primerMayuscula } from '../helper';

import styled from '@emotion/styled';

const ContenedorResumen = styled.div`
    padding: 1rem;
    text-align: center;
    background-color: #00838F;
    color: #FFF;
    margin-top: 1rem;
`;

const Resumen = ({datos}) => {

    const {marca,year,plan} = datos;
    if(marca === "" || year === ""|| plan === "") return null;


    return ( 
        <ContenedorResumen>
            <h1>Resumen de la Cotizacion</h1>
            <ul>
                <li>Marca:{primerMayuscula(marca)} </li>
                <lik>Año: {primerMayuscula(year)}</lik>
                <li>Plan:{primerMayuscula(plan)} </li>
            </ul>
        </ContenedorResumen>

    );
}

export default Resumen;