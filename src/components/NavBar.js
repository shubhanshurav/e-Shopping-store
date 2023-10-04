import React from 'react';
import { Link } from 'react-router-dom';
// import { BsFillCartCheckFill } from 'react-icons/bs';
// import {CgProfile} from 'react-icons/cg';

const NavBar = () => {
  return (
    <nav className="p-2 bg-blue-900 sticky top-0">
      <div className="container m-auto flex items-center justify-between">
        {/* Logo */}
          <Link to="/" className="text-center">
            <img src='/assets/AFSLogo.png' className='p-2 w-48 h-18' alt='Logo'/>
          </Link>

        {/* Search */}
        <div className="flex flex-row m-auto text-center">
          <input
            type="text" placeholder="Find Product here..."
            className="w-48 py-2 px-2 rounded-l-md  border-gray-300 focus:outline-none border-y-2 border-l-2 focus:border-blue-400"
          />
          <button className='w-24 py-2 px-2 rounded-r-md bg-transparent hover:text-stone-100 hover:bg-amber-500 text-white border-y-2 border-r-2'>Search</button>
        </div>

        {/* Navigation Links */}
        <ul className="flex flex-row text-white space-x-8 p-4 text-center">
          <li>
             <Link to="/" className=" hover:border-b-2 hover:border-stone-300 hover:text-stone-300">Home</Link>
          </li>
          <li>
             <Link to="/Shop" className=" hover:border-b-2 hover:border-stone-300 hover:text-stone-300">Shop</Link>
          </li>
          <li>
             <Link to="/About" className=" hover:border-b-2 hover:border-stone-300 hover:text-stone-300">About</Link>
          </li>
          <li>
             <Link to="/Contact" className=" hover:border-b-2 hover:border-stone-300 hover:text-stone-300">Contact</Link>
          </li>
        </ul>

        {/* User Actions */}
        <div className="flex flex-wrap space-x-4 p-4">
          <Link to="/Login" className="text-white text-4xl">
             {/* <CgProfile /> */}
             <img src='/assets/user.svg'  alt='UserLogo'/>
          </Link>
          <Link to="/CartPage" className="text-white flex place-content-center w-12">
                <img src='/assets/wishlist.svg'  alt='wishlist'/>
          </Link>
          <Link to="/CartPage" className="text-white flex place-content-center w-12">
                {/* <BsFillCartCheckFill className="mr-1 text-2xl" /> */}
                <img src='/assets/cart.svg'  alt='CartLogo'/>
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default NavBar;
