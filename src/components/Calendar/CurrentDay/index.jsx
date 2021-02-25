import React from 'react';
import PropTypes from 'prop-types';
import { format } from 'date-fns';
import styles from './CurrentDay.module.scss';

const CurrentDay = props => {
  const { currentDay } = props;
  return (
    <div className={styles.currentContainer}>
      <h1 className={styles.dayOfWeek}>{format(currentDay, 'EEEE')}</h1>
      <div className={styles.dayStyles}>{format(currentDay, 'd')}</div>
    </div>
  );
};

CurrentDay.propTypes = {
  currentDay: PropTypes.instanceOf(Date),
};

export default CurrentDay;
