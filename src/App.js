import React, { useState } from 'react';
import CounterPage from './components/CounterPage';
import Calendar from './components/Calendar';
import FlexContainer from './components/FlexContainer';
import WindowSizes from './components/WindowSizes';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
// import PageUser from './components/PageUser';
// import UserContext from './context';
import StopWatch from './components/FuncStopWatch';
import ThemeSwitcher from './components/ThemeSwitcher';
import { ThemeContext } from './context';
import THEMES from './constants';


function App (props) {
  const themeState = useState(THEMES.LIGHT);

  return (
    <ThemeContext.Provider value={themeState}>
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
            <li>
              <Link to='/stopWatch'>StopWatch</Link>
            </li>
            <li>
              <Link to='/switchTheme'>SwitchTheme</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route exact path='/' component={Calendar} />
          <Route path='/counter' component={CounterPage} />
          <Route path='/flexContainer' component={FlexContainer} />
          <Route path='/windowSizes' component={WindowSizes} />
          <Route path='/stopWatch' component={StopWatch} />
          <Route path='/switchTheme' component={ThemeSwitcher} />
        </Switch>
      </BrowserRouter>
    </ThemeContext.Provider>
  );
}

export default App;
