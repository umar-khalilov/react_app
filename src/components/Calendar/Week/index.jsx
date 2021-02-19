import React from 'react';
import { parse, addDays } from 'date-fns';
import Day from '../Day';

const Week = props => {
    const { week, year } = props;
    const startOfWeek = parse('2021 8', 'Y w', new Date());
    const dayArray = new Array(7);
    dayArray.map((day, index) => <Day key={`${index}-${year}-${week}`} day={addDays(startOfWeek, index)} />);
    return <tr>{[dayArray]}</tr>;
}

export default Week;
