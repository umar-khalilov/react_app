import React from 'react';
import PropTypes from 'prop-types';
import { format, getYear, getMonth } from 'date-fns';
import Month from '../Month';
import styles from './CalendarBody.module.scss';

const WeekDays = () => {
  return (
    <tr style={{ color: '#eb1b57', fontSize: '1.5rem', fontWeight: 600 }}>
      <th>Sun</th>
      <th>Mon</th>
      <th>Tue</th>
      <th>Wed</th>
      <th>Thu</th>
      <th>Fri</th>
      <th>Sat</th>
    </tr>
  );
};

const CalendarBody = props => {
  const { currentDay } = props;
  return (
    <div className={styles.container}>
      <h1 className={styles.currentMonthAndYear}>
        {format(currentDay, 'MMMM y')}
      </h1>
      <table>
        <thead>
          <WeekDays />
        </thead>
        <tbody>
          <Month year={getYear(currentDay)} month={getMonth(currentDay)} />
        </tbody>
      </table>
    </div>
  );
};

CalendarBody.propTypes = {
  currentDay: PropTypes.instanceOf(Date),
};

export default CalendarBody;
