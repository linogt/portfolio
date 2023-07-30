import React from 'react';
import { GridContainer } from '../../styles/GridContainer.style';
import { ApresentationContainer } from './style';
import profileImage from '../../../assets/profile.png'

function Component() {
    return (
        <ApresentationContainer>
            <GridContainer>
                <figure>
                    <img src={profileImage} alt="minha foto"  />
                </figure>
                <article>
                    <h1>Olá, eu sou<br></br>Gabriel Garcia</h1>
                    <p>Desenvolvedor Full Stack </p>
                </article>
                <span className='dec'></span>
            </GridContainer>
        </ApresentationContainer>
    );
}


export default Component;