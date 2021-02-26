import React from 'react';
import PropTypes from 'prop-types';
import { format, getYear, getMonth } from 'date-fns';
import Month from '../Month';
import { WeekDays } from '../Week/WeekDays';
import styles from './CalendarBody.module.scss';

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
          <Month year={getYear(currentDay)} month={getMonth(currentDay) + 1} />
        </tbody>
      </table>
    </div>
  );
};

CalendarBody.propTypes = {
  currentDay: PropTypes.instanceOf(Date),
};

export default CalendarBody;
