import React from 'react';
import { getWeek, parse } from 'date-fns';
import Week from './../Week'

const CalendarBody = props => {
    const { currentDay } = props;
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <td>S</td>
                        <td>M</td>
                        <td>T</td>
                        <td>W</td>
                        <td>T</td>
                        <td>F</td>
                        <td>S</td>
                    </tr>
                </thead>
                <tbody>
                    <Week year={2021} week={9} />
                </tbody>
            </table>
        </div>
    );
}

export default CalendarBody;
