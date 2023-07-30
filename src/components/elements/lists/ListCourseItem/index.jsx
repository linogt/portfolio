import React from 'react';
import { ListCourseItemContainer } from './style';

function Component({courseName, progress, duration, suffix}) {
    return (
        <ListCourseItemContainer>
            <div>
                <p className={progress === "100%" ? "listCourseItem_progressFinished" : "listCourseItem_progress"}>{progress}</p>
                <h3>{courseName}</h3>
                <p>{suffix}</p>
            </div>
            <p>{duration}</p>
        </ListCourseItemContainer>
    );
};

export default Component;