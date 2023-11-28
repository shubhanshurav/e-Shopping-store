import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {GiHamburgerMenu} from 'react-icons/gi';
import {RxCross1} from 'react-icons/rx';

const NavBar = () => {
  const { cart, wish,cartCard } = useSelector((state) => state);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-blue-800 sticky top-0 shadow-2xl">
      <div className="m-auto flex lg:flex-row ">
        
        {/* Hamburger Menu */}
        <div className="lg:hidden m-auto p-4 sm:-mt-1">
          <button
            onClick={toggleMenu}
            className="text-white border-2 border-white rounded-sm p-3"
          >
            {isMenuOpen ? <RxCross1 /> : <GiHamburgerMenu />}
          </button>
        </div>

        {/* Logo */}
        <div className={`m-auto lg:flex ${isMenuOpen ? 'hidden' : 'block'}`}>
           <Link to="/" className="text-center ">
             <img src='/assets/logo.png' className='w-32' alt='Logo'/>
           </Link>
       </div>

        {/* Search */}
        <div className={`lg:flex lg:flex-row lg:w-auto lg:items-center p-2 m-auto ${isMenuOpen ? 'block' : 'hidden'}`}>
          <div className='flex flex-row mr-8'>
              <input
                type="text"
                placeholder="Find Product here..."
                className="w-44 p-1 h-10 font-chakra-petch rounded-l-md border-gray-300 focus:outline-none border-y-2 border-l-2 focus:border-blue-400"
              />
              <button className='p-1 w-10 h-10 rounded-r-md bg-transparent hover:text-stone-100 hover:bg-gray-900 text-white border-y-2 border-r-2'>
                <img src='/assets/icons/SearchIcon.png' className='h-6 w-6' alt="searchicon" />
              </button>
          </div>

          {/* Navigation Links */}
          <div className='m-auto'>
            <ul className={`lg:flex lg:flex-row lg:w-auto text-white lg:space-x-8 sm:space-x-0 p-4 text-center ${isMenuOpen ? 'block' : 'hidden'}`}>
              <li className='p-2'>
                <Link to="/" className="hover:border-b-2 hover:border-stone-300 hover:text-stone-300 font-chakra-petch font-lg" onClick={toggleMenu}>Home</Link>
              </li>
              <li className='p-2'>
                <Link to="/Shop" className="hover:border-b-2 hover:border-stone-300 hover:text-stone-300 font-chakra-petch font-lg" onClick={toggleMenu}>Shop</Link>
              </li>
              <li className='p-2'>
                <Link to="/About" className="hover:border-b-2 hover:border-stone-300 hover:text-stone-300 font-chakra-petch font-lg" onClick={toggleMenu}>About</Link>
              </li>
              <li className='p-2'>
                <Link to="/Contact" className="hover:border-b-2 hover:border-stone-300 hover:text-stone-300 font-chakra-petch font-lg" onClick={toggleMenu}>Contact</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* User Actions */}
        <div className={`lg:flex flex-row space-x-8 m-auto ${isMenuOpen ? 'hidden' : 'flex'}`}>
          <Link to="/Login" className="text-white w-7">
            <img src='/assets/user.svg' alt='UserLogo'/>
          </Link>
          <Link to="/Wishlist" className="text-white flex place-content-center w-7 relative">
            <img src='/assets/wishlist.svg' alt='wishlist'/>
            {wish.length > 0 &&
              <span className='absolute -top-1 -right-3 font-bold text-gray-800 text-xs bg-yellow-500 flex w-5 h-5 items-center justify-center animate-bounce rounded-full'>{wish.length}</span>
            }
          </Link>
          <Link to="/Cart" className="text-white flex place-content-center w-7 relative">
            <img src='/assets/cart.svg' alt='CartLogo'/>
            {(cart.length > 0 || cartCard.length > 0) && (
              <span className='absolute -top-1 -right-3 font-bold text-gray-800 text-xs bg-yellow-500 flex w-5 h-5 items-center justify-center animate-bounce rounded-full'>{cart.length + cartCard.length}</span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;

