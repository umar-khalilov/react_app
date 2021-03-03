import React,{useContext} from 'react';
import cx from 'classnames';
import styles from 'ThemeSwitcher.module.scss';
import {ThemeContext} from '../../context';

const ThemeSwitcher = () => {
    const [theme, themeState]= useContext(ThemeContext);
    const classNames = cx({
        [styles.dark]: Th,
        [styles.light]: ,
    })
  return (
    
      <div>
        <h1>Switcher Themes</h1>
        <button>Switch Theme</button>
      </div>
    
  );
};

export default ThemeSwitcher;
