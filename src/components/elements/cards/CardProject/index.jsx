import React from 'react';
import { CardContainer } from './style';
import { GridContainer } from '../../../styles/GridContainer.style';


function Component({title, imagem, description, tagTitle, tags = [], year}) {

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
                        <h3>{title}</h3>
                    </div>
                    <figure >
                            <img src={imagem} />
                    </figure>
                    <p>{description}</p>
                    <a href={year} target="_blank"><b>Ver mais</b></a>
                    
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