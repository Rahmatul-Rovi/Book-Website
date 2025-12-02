import React, { useState } from 'react';
import { Link } from 'react-router';

const Navbar = () => {
  const[isLoggedIn, setIsLoggedIn] = useState(false);
    const links = <>
       <Link to='/'> <li className='m-2'>Home</li></Link>
       <Link to='/about'> <li className='m-2'>About</li></Link>
       <Link to='/readList'> <li className='m-2'>ReadList</li></Link>
    </>
    return (
       <div className="navbar shadow-lg bg-blue-500/10">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-white rounded-box z-[1] mt-3 w-52 p-2 shadow-xl">
      {links}
      </ul>
    </div>
   <a 
    href="/" 
    className="btn btn-ghost text-xl"
>
    Book-Website
</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
       {links}
    </ul>
  </div>
 <div className="navbar-end">
    {isLoggedIn ? (
        <>
            <a className="btn btn-ghost">Hello, User!</a> 
            <Link to="/logout" className="btn btn-warning">Logout</Link>
        </>
    ) : (
        <>
            <Link to="/login" className="btn btn-secondary">Login</Link>
            
            <Link to="/register" className="btn btn-primary">Register</Link>
        </>
    )}
  </div>
</div>
    );
};

export default Navbar;