import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {GiHamburgerMenu} from 'react-icons/gi';
import {RxCross1} from 'react-icons/rx';
import { ACCOUNT_TYPE } from "../utils/constants"
import ProfileDropdown from "../components/Auth/ProfileDropdown"

const NavBar = () => {
  const { cart, wish,cartCard } = useSelector((state) => state);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { token } = useSelector((state) => state.auth)
  const { user } = useSelector((state) => state.profile)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    // Close the sidebar when a link is clicked
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-bluebg-200 sticky top-0 shadow-2xl z-10 py-1">
      <div className="flex flex-row px-3 justify-between">

        {/* Logo */}
        <div className="flex p-2">
           <Link to="/" className="text-center ">
             <img src='/assets/logo.png' className='w-24 md:w-28' alt='Logo'/>
           </Link>
        </div>

        <div className='flex flex-row gap-5 md:gap-8 ml-0 md:ml-48'>
          {/* Navigation Links */}
          <div className='hidden md:flex'>
            <ul className="flex flex-row text-white space-x-4 p-4 text-center">
              <li className='p-2'>
                <Link to="/" className="hover:border-b-2 hover:border-stone-300 hover:text-stone-300 font-chakra-petch font-lg" >Home</Link>
              </li>
              <li className='p-2'>
                <Link to="/Shop" className="hover:border-b-2 hover:border-stone-300 hover:text-stone-300 font-chakra-petch font-lg">Shop</Link>
              </li>
              <li className='p-2'>
                <Link to="/About" className="hover:border-b-2 hover:border-stone-300 hover:text-stone-300 font-chakra-petch font-lg" >About</Link>
              </li>
              <li className='p-2'>
                <Link to="/Contact" className="hover:border-b-2 hover:border-stone-300 hover:text-stone-300 font-chakra-petch font-lg" >Contact</Link>
              </li>
            </ul>
          </div>

          {/* User Actions */}
          <div className='items-center flex gap-5'>
              {user && user?.accountType !== ACCOUNT_TYPE.INSTRUCTOR && (
                <Link to="/dashboard/cart" className="relative w-7">
                <img src='/assets/cart.svg' alt='CartLogo'/>
                  {(cart.length > 0 || cartCard.length > 0) && (
                    <span className='absolute -top-1 -right-3 font-bold text-gray-800 text-xs bg-yellow-500 flex w-5 h-5 items-center justify-center animate-bounce rounded-full'>{cart.length + cartCard.length}</span>
                  )}
                </Link>
              )}
              {user && user?.accountType !== ACCOUNT_TYPE.INSTRUCTOR && (
                <Link to="/dashboard/wishlist" className="text-white flex place-content-center w-7 relative">
                  <img src='/assets/wishlist.svg' alt='wishlist'/>
                  {wish.length > 0 &&
                    <span className='absolute -top-1 -right-3 font-bold text-gray-800 text-xs bg-yellow-500 flex w-5 h-5 items-center justify-center animate-bounce rounded-full'>{wish.length}</span>
                  }
                </Link>
              )}
          </div>
        </div>
        
        {/* login signup & user profiledropdown */}
        <div className="flex flex-row space-x-2 md:space-x-8 ml-0 md:ml-8 items-center">
            {token === null && (
              <Link to="/login">
                <button className="rounded-[8px] mx-1 md:mx-0 border border-richblack-700 bg-richblack-800 px-[12px] py-[4px] md:py-[8px] text-richblack-100">
                  Log in
                </button>
              </Link>
            )}
            {token === null && (
              <Link to="/signup">
                <button className="rounded-[8px] border border-richblack-700 bg-richblack-800 px-[12px] py-[4px] md:py-[8px] text-richblack-100">
                  Sign up
                </button>
              </Link>
            )}

          {token !== null && <ProfileDropdown />}
        </div>
      
      {/* hamburger menu  */}
      <button onClick={toggleMenu}>
         <GiHamburgerMenu className="text-3xl block md:hidden" fontSize={24} fill="#AFB2BF" />
      </button>
 
     {/* for smartphone view */}
      {isMenuOpen && 
        <div className="fixed inset-0 bg-black bg-opacity-[95%] z-50">
          
          <div className="flex justify-end p-4">
              <button onClick={toggleMenu}>
                <RxCross1 className="text-white font-bold text-3xl" />
              </button>
          </div>

            {/* Navigation Links */}
            <div className='flex flex-col items-start pl-12 -mt-8 text-white'>
              <ul className='flex flex-col gap-y-6 text-richblack-25'>
                <li className='' onClick={handleLinkClick}>
                  <Link to="/" className="hover:border-b-2 hover:border-stone-300 hover:text-stone-300 font-chakra-petch font-lg" >Home</Link>
                </li>
                <li className='' onClick={handleLinkClick}>
                  <Link to="/Shop" className="hover:border-b-2 hover:border-stone-300 hover:text-stone-300 font-chakra-petch font-lg" >Shop</Link>
                </li>
                <li className='' onClick={handleLinkClick}>
                  <Link to="/About" className="hover:border-b-2 hover:border-stone-300 hover:text-stone-300 font-chakra-petch font-lg" >About</Link>
                </li>
                <li className='' onClick={handleLinkClick}>
                  <Link to="/Contact" className="hover:border-b-2 hover:border-stone-300 hover:text-stone-300 font-chakra-petch font-lg" >Contact</Link>
                </li>
              </ul>
            </div>
        </div>
      }
      </div>
    </nav>
  );
}

export default NavBar;



