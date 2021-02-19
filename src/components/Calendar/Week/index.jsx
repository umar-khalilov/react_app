import React from 'react';
import { parse } from 'date-fns';

const Week = props => {
    const { week, year } = props;
    const startOfWeek = parse('2021 8', 'Y w', new Date());
    return <tr></tr>;
}

export default Week;
