import React from 'react';
import { EducationContainer } from './style';
import { GridContainer } from '../../styles/GridContainer.style';
import { DecoTitleBlack } from '../../styles/DecoTitle.style';
import { BigParagraphWhite } from '../../styles/BigParagraph.style';
import CardCourse from '../../elements/cards/CardCourse';
import { courseTypes, courses } from '../../../env/courses';
import ListCourseItem from '../../elements/lists/ListCourseItem';
import bookIcon from '../../../assets/book.svg';
import globeIcon from '../../../assets/globe.svg';


function Component() {


    return(
        <EducationContainer id="about">
            <GridContainer>
                <DecoTitleBlack>Sobre Mim</DecoTitleBlack>
                <section>
                    <p>Estudante de Engenharia de Computação, atualmente atuando como Estagiário Desenvolvedor Full Stack, viso progredir meu conhecimento pois almejo para minha carreira o título de Backend Engineer Senior. Sou apaixonado pela área de tecnologia e uma pessoa de fácil comunicação, desejo conquistar o máximo de experiência dentro do mercado de trabalho para que ao término da minha faculdade eu esteja preparado para cargos maiores.</p>
                </section>
                <span className='dec'></span>
            </GridContainer>
        </EducationContainer>
    );
}

export default Component;