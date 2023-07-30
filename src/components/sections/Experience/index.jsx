import React from 'react';
import { GridContainer } from '../../styles/GridContainer.style';
import { ExperienceConteiner } from './style';
import CardExperience from '../../elements/cards/CardExperience/';
import { BigParagraphBlack } from '../../styles/BigParagraph.style';
import { DecoTitleWhite } from '../../styles/DecoTitle.style';
import { experiences } from '../../../env/experiences';

function Component() {

    const cardExps = [];
    for(let exp of experiences) {
        cardExps.push(
            <CardExperience key={experiences.indexOf(exp)}                   
                title={exp.title} 
                description={exp.description}
                tagTitle={exp.tagTitle}
                tags={exp.tags}
                year={exp.year}
            />
        );
    }

    return (
        <ExperienceConteiner id="experience">
            <GridContainer>
                <DecoTitleWhite>Experiência</DecoTitleWhite>
                <section>
                    { cardExps }
                </section>
            </GridContainer>
        </ExperienceConteiner>
    );
}

export default Component;