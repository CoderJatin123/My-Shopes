import React from 'react';
import Fotter from './Fotter';
import Topbar from './Topbar';

const Layout = ({children}) => {
  return (
    <div>
      <Topbar />
      {children}
      <Fotter />
    </div>
  );
}

export default Layout;
