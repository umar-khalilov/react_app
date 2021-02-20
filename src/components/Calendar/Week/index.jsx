import React from 'react';
import { parse, addDays } from 'date-fns';
import Day from '../Day';

const Week = props => {
    const { week, year } = props;
    const startOfWeek = parse(`${year} ${week}`, 'Y w', new Date());
    const dayArray = [];
    // dayArray.map((index) => <Day key={`${year}-${week}-${index}`} day={addDays(startOfWeek, index)} />);
    for (let i = 0; i < 7; i++) {
        dayArray.push(<Day key={`${year}-${week}-${i}`} day={addDays(startOfWeek, i)} />);
    }
    return <tr>{[dayArray]}</tr>;
}

export const WeekDays = () => {
    return (
        <tr>
            <td>Sun</td>
            <td>Mon</td>
            <td>Tue</td>
            <td>Wed</td>
            <td>Thu</td>
            <td>Fri</td>
            <td>Sat</td>
        </tr>
    );
}


export default Week;
