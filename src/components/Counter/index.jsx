import React, { Component } from 'react';
import styles from './counter.module.scss';
import PropTypes from 'prop-types';

class Counter extends Component {
  constructor (props) {
    super(props);
    this.state = {
      count: 0,
      isAdd: true,
    };
  }

  clickHandler = () => {
    this.setState((state, props) => {
      const { count } = state;
      const { stepNumber } = props;
      return { count: state.isAdd ? count + stepNumber : count - stepNumber };
    });
  };

  changeMode = () => this.setState({ isAdd: !this.state.isAdd });

  render () {
    const { count, isAdd } = this.state;
    const { stepNumber } = this.props;
    return (
      <div className={styles.container}>
        <section className={styles.colorDisplay}>
          <h1>Counter : {count}</h1>
          <h2>Step : {stepNumber}</h2>
        </section>
        <div>
          <button className={styles.btn} onClick={this.clickHandler}>
            {isAdd ? 'Add!' : 'Subtract!'}
          </button>
          <button className={styles.btn} onClick={this.changeMode}>
            Change Mode
          </button>
        </div>
        <p className={styles.colorDisplay}>
          Количество единиц добавляемых к счётчику = {stepNumber}
        </p>
      </div>
    );
  }
}

Counter.propTypes = {
  stepNumber: PropTypes.number.isRequired,
};

export default Counter;
