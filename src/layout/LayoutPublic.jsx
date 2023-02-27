import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

const LayoutPublic = () => {
  return (
    <>
      <Navbar />
      <main className='container'>
        <Outlet />
      </main>
      <footer className='container text-center'>Footer</footer>
    </>
  );
}

export default LayoutPublic;
