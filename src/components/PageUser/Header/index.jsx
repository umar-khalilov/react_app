import React from 'react';
import UserContext from '../../../context';

const Header = props => {
  const styles = {
    border: '2px solid blue',
    height: '200px',
    width: '100%',
  };

  const headerRender = user => {
      const {imgAvatar}= user;
    return (
      <div style={styles}>
        <h3>Header</h3>
        {JSON.stringify(imgAvatar)}
      </div>
    );
  };

  return (
    <UserContext.Consumer>
      {headerRender}
    </UserContext.Consumer>
  );
};

export default Header;
