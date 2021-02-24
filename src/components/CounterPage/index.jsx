import React, { Component } from 'react';
import Counter from '../Counter';

class CounterPage extends Component {
  constructor (props) {
    super(props);
    this.state = {
      stepNumber: 5,
    };
  }

  handleChange = e => {
    this.setState({ stepNumber: Number(e.target.value) });
  };

  render () {
    const { stepNumber } = this.state;
    return (
      <div>
        stepNumber: {stepNumber}
        <div>
          <input
            type='range'
            min='0'
            max='50'
            value={stepNumber}
            onChange={this.handleChange}
          />
        </div>
        <Counter stepNumber={stepNumber} />
      </div>
    );
  }
}

export default CounterPage;
