import './App.css';
import CounterPage from './components/CounterPage';
import Calendar from './components/Calendar';
// import FlexContainer from './components/FlexContainer';
// import WindowSizes from './components/WindowSizes'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

function App (props) {
  const stepNumber = 100;
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/contacts'>Contacts</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/calendar'>Calendar</Link>
          </li>
          <li>
            <Link to='/counter'>Counter</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/contacts'>
          <Contacts />
        </Route>
        <Route path='/about'>
          <About />
        </Route>
        <Route path='/calendar'>
          <Calendar />
        </Route>
        <Route path='/counter'>
          <CounterPage stepNumber={stepNumber} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

const Home = () => {
  return <div>Home page</div>;
};

const Contacts = () => {
  return <div>Contacts page</div>;
};

const About = () => {
  return <div>About page</div>;
};

export default App;
