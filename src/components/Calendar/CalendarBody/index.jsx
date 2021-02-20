import React from 'react';
import { WeekDays } from '../Week';
import Month from '../Month';

const CalendarBody = props => {
    const { currentDay } = props;
    return (
        <div>
            <table>
                <thead>
                    <WeekDays />
                </thead>
                <tbody>
                    <Month year={2021} month={2} />
                </tbody>
            </table>
        </div>
    );
}

export default CalendarBody;
