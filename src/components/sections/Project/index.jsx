import React from 'react';
import { GridContainer } from '../../styles/GridContainer.style';
import { ProjectConteiner } from './style';
import CardProject from '../../elements/cards/CardProject/';
import { BigParagraphBlack } from '../../styles/BigParagraph.style';
import { DecoTitleWhite } from '../../styles/DecoTitle.style';
import { project } from '../../../env/project';

function Component() {

    const cardExps = [];
    for(let exp of project) {
        cardExps.push(
            <CardProject key={project.indexOf(exp)}                   
                title={exp.title} 
                description={exp.description}
                tagTitle={exp.tagTitle}
                tags={exp.tags}
                year={exp.year}
            />
        );
    }

    return (
        <ProjectConteiner id="project">
            <GridContainer>
                <DecoTitleWhite>Projetos</DecoTitleWhite>
                <section>
                    { cardExps }
                </section>
            </GridContainer>
        </ProjectConteiner>
    );
}

export default Component;