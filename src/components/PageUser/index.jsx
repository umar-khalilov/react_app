import React from 'react';
import Sidebar from './SideBar';
import Header from './Header';

const PageUser = (props) => {
  return (
    <div style={{border: '1px dashed red'}}>
      <Header />
      <Sidebar />
    </div>
  );
};

export default PageUser;
