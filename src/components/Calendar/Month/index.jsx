import React from 'react';
import Week from '../Week';
import PropTypes from 'prop-types';
import { parse, getWeek, addWeeks, getYear } from 'date-fns';

const Month = props => {
  const { year, month, currentDay } = props;
  const startOfMonth = parse(`${year} ${month}`, 'y M', new Date());
  const weekArray = [];
  for (let i = 0; i < 5; i++) {
    const startOfWeek = addWeeks(startOfMonth, i);
    weekArray.push(
      <Week
        key={`${month}-${year}-${i}`}
        currentDay={currentDay}
        week={getWeek(startOfWeek)}
        year={getYear(startOfWeek)}
      />
    );
  }
  return <>{[weekArray]}</>;
};

Month.propTypes = {
  year: PropTypes.number.isRequired,
  month: PropTypes.number.isRequired,
};

export default Month;
