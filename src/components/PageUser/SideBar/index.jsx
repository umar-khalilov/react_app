import React from 'react';
import UserContext from '../../../context';

const SideBar = props => {
  const styles = {
    border: '1px solid',
    height: '50%',
    width: '200px',
  };
  const sideBarRender = user => {
    const { firstName, lastName } = user;
    return (
      <div style={styles}>
        <h3>Sidebar</h3>
        {JSON.stringify(firstName, lastName)}
      </div>
    );
  };

  return (
    <UserContext.Consumer>
      {sideBarRender}
    </UserContext.Consumer>
  );
};

export default SideBar;
