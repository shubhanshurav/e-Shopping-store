import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
// import { BsFillCartCheckFill } from 'react-icons/bs';
// import {CgProfile} from 'react-icons/cg';

const NavBar = () => {
 
  const {cart} = useSelector((state) => state);

  return (
    <nav className="p-2 bg-blue-900 fixed flex flex-row flex-wrap top-0 w-screen">
      <div className="container m-auto flex items-center justify-between">
        {/* Logo */}
          <Link to="/" className="text-center">
            <img src='/assets/AFSLogo.png' className='p-2 w-48 h-18' alt='Logo'/>
          </Link>

        {/* Search */}
        <div className="flex flex-row m-auto text-center">
          <input
            type="text" placeholder="Find Product here..."
            className="w-44 py-2 px-2 rounded-l-md  border-gray-300 focus:outline-none border-y-2 border-l-2 focus:border-blue-400"
          />
          <button className='w-20 py-2 px-2 rounded-r-md bg-transparent hover:text-stone-100 hover:bg-amber-500 text-white border-y-2 border-r-2'>Search</button>
        </div>

        {/* Navigation Links */}
        <ul className="flex flex-row text-white space-x-12 p-4 text-center">
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
        <div className="flex flex-row space-x-9 p-4 m-auto">
          <Link to="/Login" className="text-white text-4xl w-7">
             {/* <CgProfile /> */}
             <img src='/assets/user.svg'  alt='UserLogo'/>
          </Link>
          <Link to="/Cart" className="text-white flex place-content-center w-7">
                <img src='/assets/wishlist.svg'  alt='wishlist'/>
          </Link>
          <Link to="/Cart" className="text-white flex place-content-center w-7 relative">
                {/* <BsFillCartCheckFill className="mr-1 text-2xl" /> */}
                <img src='/assets/cart.svg'  alt='CartLogo'/>
                {
                  cart.length > 0 &&
                  <span className='absolute -top-1 -right-3 font-bold text-gray-800 text-xs bg-yellow-500 flex w-5 h-5 items-center justify-center animate-bounce rounded-full'>{cart.length}</span>
                } 
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default NavBar;
