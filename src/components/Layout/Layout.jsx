import React from 'react'
import Nav from './../Nav/Nav';
import { Outlet } from 'react-router-dom';
import Footer from './../Footer/Footer';

export default function Layout() {
  return (
    <div className='w-full flex flex-col justify-center items-center'>
      <Nav/>
     <Outlet></Outlet>
     <Footer/>
    </div>
  )
}
