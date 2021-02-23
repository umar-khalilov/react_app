import React, { Component } from 'react';
import CurrentDay from './CurrentDay';
import CalendarBody from './CalendarBody';
import styles from './Calendar.module.scss';

class Calendar extends Component {
  constructor (props) {
    super(props);
    this.state = {
      currentDay: new Date(),
    };
  }

  render () {
    return (
      <div className={styles.container}>
        <CurrentDay currentDay={this.state.currentDay} />
        <CalendarBody currentDay={this.state.currentDay} />
      </div>
    );
  }
}

export default Calendar;
