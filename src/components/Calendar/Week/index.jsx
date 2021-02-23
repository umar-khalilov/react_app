import React from 'react';
import { parse, addDays } from 'date-fns';
import Day from '../Day';

const Week = props => {
    const { week, year, currentDay } = props;
    const startOfWeek = parse(`${year} ${week}`, 'Y w', new Date());
    const dayArray = new Array(7);
    // dayArray.map((index) => {
    //     return (<Day key={`${year}-${week}-${index}`} currentDay={currentDay} day={addDays(startOfWeek, index)} />);
    // });
    for (let i = 0; i < 7; i++) {
        dayArray.push(<Day key={`${year}-${week}-${i}`} currentDay={currentDay} day={addDays(startOfWeek, i)} />);
    }
    return <tr>{[dayArray]}</tr>;
}

export const WeekDays = () => {
    return (
        <tr style={{ color: "#eb1b57", fontSize: "1.5rem", fontWeight: 600 }}>
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
