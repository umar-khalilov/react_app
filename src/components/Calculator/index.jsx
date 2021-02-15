import React, { Component } from 'react';
import BoilingVerdict from '../BoilingVerdict/index';
import styles from '../BoilingVerdict/Boiling.module.css';
import style from '../Calculator/Calculator.module.css';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {temperature: ''};
  }

  handleChange(e) {
    this.setState({temperature: e.target.value});
  }

  render() {
    const temperature = this.state.temperature;
    return (
      <fieldset className={styles.water}>
        <legend className={style.wordColor}>Введите температуру в градусах Цельсия:</legend>
        <input
          value={temperature}
          onChange={this.handleChange} />
        <BoilingVerdict
          celsius={parseFloat(temperature)} />
      </fieldset>
    );
  }
}

export default Calculator;