import React from 'react';
import Fotter from './Fotter';
import Topbar from './Topbar';

const Layout = ({children}) => {
  return (
    <div className=''>
      <Topbar />
      <div className='mx-6 sm:mx-7 md:mx-10'>
      {children}
      </div>

      <Fotter />
    </div>
  );
}

export default Layout;
