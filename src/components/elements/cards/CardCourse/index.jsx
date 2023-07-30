import React from 'react';
import { CardContainer } from './style';

function Component({label, title, description, duration}) {
    return (
        <CardContainer>
            <div className='cardKnow_main'>
                <p>
                    {label} 
                    {
                        duration && (
                            ` (${duration})`
                        )
                    }
                </p>
                <h3>{title}</h3>
            </div>
            <p>{description}</p>
        </CardContainer>
    );
}

export default Component;