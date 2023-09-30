import React from 'react';
import { Link } from 'react-router-dom';
import { BsFillCartCheckFill } from 'react-icons/BsFillCartCheckFill';


const NavBar = () => {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="text-white text-2xl font-bold">
          Logo
        </a>

        {/* Search */}
        <div className="flex-1 ml-4">
          <input
            type="text"
            placeholder="Search..."
            className="w-50 py-2 px-4 rounded-md border border-gray-300 focus:outline-none focus:border-blue-400"
          />
        </div>

        {/* Navigation Links */}
        <ul className="flex space-x-8 pr-20">
          <li>
             <Link to="/" className="text-white hover:underline">Home</Link>
          </li>
          <li>
             <Link to="/Shop" className="text-white hover:underline">Shop</Link>
          </li>
          <li>
             <Link to="/About" className="text-white hover:underline">About</Link>
          </li>
          <li>
             <Link to="/Contact" className="text-white hover:underline">Contact Us</Link>
          </li>
        </ul>

        {/* User Actions */}
        <div className="flex items-center space-x-4 pr-5">
          <Link to="/Login" className="text-white hover:underline">Login</Link>
          <Link to="/Cart" className="text-white ">
             <BsFillCartCheckFill />
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default NavBar;
