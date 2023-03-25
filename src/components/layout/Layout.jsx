import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Searchbar from '../Searchbar';

function Layout() {
  return (
    <>
      <div className='nav-section'>
        <div className='nav-logo'>
          <Link to='/'>Cooking app</Link>
        </div>
        <nav>
          <Searchbar />
          <Link className='nav-btn' to='/create'>
            Create Recipe
          </Link>
        </nav>
      </div>
      <div className='page-container'>
        <Outlet />
      </div>
    </>
  );
}

export default Layout;
