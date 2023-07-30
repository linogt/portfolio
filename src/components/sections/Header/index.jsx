import React, { useEffect, useState } from 'react';
import { GridContainer } from '../../styles/GridContainer.style';
import { HeaderContainer } from './style';

function Component() {

    return (
        <>
            <span id="top"></span>
            <HeaderContainer>
                <GridContainer>
                    <h2><a href="#top"></a></h2>
                    <ul>
                        <li><a href="#about">Sobre</a></li>
                        <li><a href="#experience">Experiência</a></li>
                        <li ><a href="#education">Formação</a></li>
                        <li><a href="#project">Projetos</a></li>
                        <li><a href="#contact">Contato</a></li>
                    </ul>
                </GridContainer>
            </HeaderContainer>
        </>
    );
}

export default Component;