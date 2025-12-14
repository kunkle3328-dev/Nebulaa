import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Topbar from './Topbar';

const Layout: React.FC = () => {
  return (
    <div style={{ display: 'flex', height: '100vh', width: '100vw' }}>
      <Sidebar />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <Topbar />
        <main style={{ flex: 1, overflow: 'auto', padding: '16px' }}>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;