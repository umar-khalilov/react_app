import './App.css';
import CounterPage from './components/CounterPage';
import Calendar from './components/Calendar';
import FlexContainer from './components/FlexContainer';
import WindowSizes from './components/WindowSizes';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

function App (props) {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to='/'>Calendar</Link>
          </li>
          <li>
            <Link to='/counter'>Counter</Link>
          </li>
          <li>
            <Link to='/flexContainer'>FlexContainer</Link>
          </li>
          <li>
            <Link to='/windowSizes'>WindowSizes</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route exact path='/' component={Calendar} />
        <Route path='/counter' component={CounterPage} />
        <Route path='/flexContainer' component={FlexContainer} />
        <Route path='/windowSizes' component={WindowSizes} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
