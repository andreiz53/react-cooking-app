import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function Layout() {
  return (
    <>
      <div className='nav-section'>
        <div className='nav-logo'>
          <Link to='/'>Cooking app</Link>
        </div>
        <nav>
          <Link to='/create'>Create Recipe</Link>
          <Link to='/search'>Search recipes</Link>
        </nav>
      </div>
      <div className='page-container'>
        <Outlet />
      </div>
    </>
  );
}

export default Layout;
