import React from 'react';
import { CardContainer } from './style';
import { GridContainer } from '../../../styles/GridContainer.style';

function Component({title, description, tagTitle, tags = [], year}) {

    const elementTags = [];
    for (let tag of tags) {
        elementTags.push(
            <span className="highlightText" key={tags.indexOf(tag)}>{tag}</span>
        );
    }

    return (
        <CardContainer>
            <GridContainer>
                <div className="cardExp_content">
                    <div>
                        <span>{year}</span>
                        <h3>{title}</h3>
                    </div>
                    <p>{description}</p>
                </div>
                <div className="cardExp_tags_wrapper">
                    <h4>{tagTitle}</h4>
                    <div className="cardExp_tags">
                        { elementTags }
                    </div>
                </div>
            </GridContainer>
        </CardContainer>
    );
}

export default Component;