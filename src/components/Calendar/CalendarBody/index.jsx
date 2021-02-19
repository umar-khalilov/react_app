import React from 'react';
import { getWeek, parse } from 'date-fns';
import Week from './../Week'

const weekDays = () => {
    return (
        <tr>
            <td>D</td>
            <td>D</td>
            <td>D</td>
            <td>D</td>
            <td>D</td>
            <td>D</td>
            <td>D</td>
        </tr>
    )
}

const CalendarBody = props => {
    const { currentDay } = props;
    return (
        <div>
            <table>
                <thead><weekDays /></thead>
                <tbody>
                <Week year={2021} week={9} />
                </tbody>
            </table>
        </div>
    );
}

export default CalendarBody;
