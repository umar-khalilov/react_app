import React, { Component } from 'react';
import './App.css';
import Counter from './components/calendar';

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <>
        <Counter/>
      </>
    );
  }
}


export default App;
