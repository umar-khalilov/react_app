import React from 'react';
import { format } from 'date-fns';

const CurrentDay = props => {
    const { currentDay } = props;
    return (
        <>
            <div>{format(currentDay, 'EEEE')}</div>
            <div>{format(currentDay, 'd')}</div>
        </>
    );
}

export default CurrentDay;
