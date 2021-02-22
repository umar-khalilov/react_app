import React from 'react';
import { WeekDays } from '../Week';
import Month from '../Month';
import { getYear, getMonth, format } from 'date-fns';
import styles from './CalendarBody.module.scss';

const CalendarBody = props => {
    const { currentDay } = props;
    return (
        <div className={styles.container}>
            <h1 className={styles.currentMonthAndYear}>{format(currentDay, 'MMMM y')}</h1>
            <table>
                <thead>
                    <WeekDays />
                </thead>
                <tbody>
                    <Month year={2021} month={2} currentDay={currentDay} />
                </tbody>
            </table>
        </div>
    );
}

export default CalendarBody;
