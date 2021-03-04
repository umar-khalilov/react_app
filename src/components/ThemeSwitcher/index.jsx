import React, { useContext } from 'react';
import cx from 'classnames';
import { ThemeContext } from '../../context';
import THEMES from '../../constants';

const stylesMap = {
  [THEMES.LIGHT]: {
    backgroundColor: 'white',
    color: 'black',
    height: '100vh',
  },
  [THEMES.DARK]: {
    backgroundColor: 'black',
    color: 'white',
    height: '100vh',
  },
};

const ThemeSwitcher = () => {
  const [theme, setTheme] = useContext(ThemeContext);

  const switchTheme = () => {
    setTheme(theme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT);
  };

  const currentThemeStyles = stylesMap[theme];

  return (
    <div style={currentThemeStyles}>
      <h1>Switcher Themes</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit minima
        ratione ad enim ipsa suscipit consectetur iste fugiat, a illo.
      </p>
      <button onClick={switchTheme}>
        {theme === THEMES.LIGHT ? 'Set Dark Theme' : 'Set Light Theme'}
      </button>
    </div>
  );
};

export default ThemeSwitcher;
