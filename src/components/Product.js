import React from 'react';
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from 'react-redux';
import { add, remove} from '../redux/Slices/CartSlice';


const Product = ({post}) => {

  const {cart} = useSelector((state) => state) ;
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(add(post));
    toast.success("Item added to Cart");
  }

  const removeFromCart = () => {
    dispatch(remove(post.id));
    toast.error("Item removed from Cart");
  }
  
  return (
   //  <div className='flex flex-row bg-gray-200 border-2 border-gray-500 p-5 rounded-lg'>
        <div className='flex-col items-center justify-between cursor-pointer transition duration-300 ease-in shadow-xl gap-3 p-4 mt-10 ml-5 pl-5 rounded-xl border-2 border-gray-200 ' >
            <div>
               <p className='text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1'>{post.title}</p>
            </div>
            <div>
               <p className='w-40 text-gray-400 font-normal text-[10px] text-left'>{post.description.split(" ").slice(0,10).join(" ")+"..."}</p>
            </div>
            <div className='h-[180px]'>
               <img src={post.image} className='h-full w-full'/>
            </div>
            <div>
               <p className='font-semibold'>{post.category}</p>
            </div>
            <div className='flex justify-between gap-12 items-center w-full mt-5'>
               <div>
                  <p className='text-blue-700 font-semibold '>${post.price}</p>
               </div>

               {
                  cart.some((p) => p.id == post.id) ?
                  (<button
                  onClick={removeFromCart} className='text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1 px-3 uppercase
                   hover:bg-gray-700 hover:text-white
                   transition duration-300 ease-in' >
                        Remove Item
                  </button>) : 
                  (<button
                     onClick={addToCart} className='text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1 px-3 uppercase
                     hover:bg-gray-700 hover:text-white
                     transition duration-300 ease-in'>
                        Add to Cart
                  </button>)
               }
            </div>
        </div>
   //  </div>
  )
}

export default Product;