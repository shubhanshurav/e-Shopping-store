import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import WishListItem from './WishListItem';

const WishList = () => { 

  const {wish} = useSelector((state) => state);
  
  return (
    <div className='bg-richblack-5 justify-center items-center'> 
      { 
         wish.length > 0 ?
         (<div className='flex flex-col items-center justify-between m-auto p-5'>
            <div className='m-auto w-[90%] border-[3px] border-gray-200'>
               {
                wish.map( (item, index) => {
                 return <WishListItem key={item.id} item={item} itemIndex={index} />
                })
               }
            </div>
         </div>):
         (<div className='text-center items-center h-screen w-screen'> 
             <h1 className='font-semibold text-3xl font-chakra-petch m-7'>Wishlist Empty</h1>
             <Link to="/Shop">
                 <button 
                 className='bg-bluebg-200 border-2 border-bluebg-200 rounded-lg text-md text-white py-2 px-2 font-chakra-petch font-extralight hover:bg-blue-800'>
                  Shop Now
                 </button>
             </Link>
          </div>)
      }
    </div>
  )
}

export default WishList;