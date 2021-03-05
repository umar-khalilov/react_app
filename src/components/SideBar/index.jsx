import React, { useState } from 'react';
import styles from './SideBar.module.scss';
import cx from 'classnames';
import { Link } from 'react-router-dom';

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const classNames = cx(styles.containerSideBar, { [styles.open]: isOpen });

  const switchSideBar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button onClick={switchSideBar}>Show Button</button>

      <nav className={classNames}>
        <button onClick={switchSideBar}>
          {isOpen ? 'Show Bar' : 'Hide Bar'}
        </button>
        <ul>
          <li></li>
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
          <li>
            <Link to='/sideBar'>SwitchSideBar</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default SideBar;
