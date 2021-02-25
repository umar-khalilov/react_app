import React from 'react';
import PropTypes from 'prop-types';
import {
  parse,
  getWeek,
  addWeeks,
  getYear,
  getWeeksInMonth,
  startOfWeek,
} from 'date-fns';
import Week from '../Week';

const Month = props => {
  const { year, month } = props;
  const startOfMonth = parse(`${year} ${month}`, 'yyyy M', new Date());
  const weekStart = startOfWeek(startOfMonth);
  const weekMonthRender = () =>
    new Array(getWeeksInMonth(startOfMonth)).fill(null).map((_, index) => {
      const startOfWeek = addWeeks(weekStart, index);
      return (
        <Week
          key={`${month}-${year}-${index}`}
          week={getWeek(startOfWeek)}
          year={getYear(startOfWeek)}
        />
      );
    });
  return <>{weekMonthRender()}</>;
};

Month.propTypes = {
  year: PropTypes.number.isRequired,
  month: PropTypes.number.isRequired,
};

export default Month;
