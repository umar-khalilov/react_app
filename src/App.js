import React, { Component } from 'react';
import './App.css';
import Greeting from './components/component';
import AlohaDashboard from './components/AlohaDash/index';
import Aloha from './components/Aloha/index';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        {
          id: 1,
          firstName: 'Neo',
          surname: 'Andersen'
        },
        {
          id: 2,
          firstName: 'Tomas',
          surname: 'Andersen'
        },
        {
          id: 3,
          firstName: 'Morpheus',
          surname: 'Nav'
        }, {
          id: 4,
          firstName: 'Trynity',
          surname: 'Andersen'
        }, {
          id: 5,
          firstName: 'Neoba',
          surname: 'Andersen'
        }
      ]
    };
  }
  render() {
const {users}=this.state;
    return (
     <>
     <AlohaDashboard users={users}/>
     </>
    );
  }
}

export default App;
