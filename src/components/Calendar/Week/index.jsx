import React from 'react';
import PropTypes from 'prop-types';
import { parse, addDays } from 'date-fns';
import Day from '../Day';

const Week = props => {
  const { week, year } = props;
  const startOfWeek = parse(`${year} ${week}`, 'Y w', new Date());
  const weekRender = () =>
    new Array(7).fill(null).map((_, index) => {
      return (
        <Day
          key={`${year}-${week}-${index}`}
          day={addDays(startOfWeek, index)}
        />
      );
    });
  return <tr>{weekRender()}</tr>;
};

Week.propTypes = {
  week: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
};

export default Week;
