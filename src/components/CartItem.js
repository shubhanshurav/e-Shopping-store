import React from 'react';
import { toast } from "react-hot-toast";
import {FcDeleteDatabase} from 'react-icons/fc';
import { useDispatch } from 'react-redux';
import { remove } from '../redux/Slices/CartSlice';

const CartItem = ({item, itemIndex}) => {

    const dispatch = useDispatch();
   
    const removeFromCart = () => {
        dispatch(remove(item.id));
        toast.error("Item Removed");
    }

  return (
    <div>
        <div className='flex lg:flex-row sm:flex-col gap-3 p-4 m-auto pl-5 border-b-2 border-gray-200'>
            <div className='h-[180px] m-auto'>
                <img src ={item.image} className='w-full h-full'/>
            </div>
            <div className=' m-auto px-10'>
                <h1 className='text-gray-700 font-semibold text-lg text-left mt-1'>{item.title}</h1>  
                <h1 className='text-gray-400 font-normal text-[13px] text-left'>{item.description.split(" ").slice(0,10).join(" ")+"..."}</h1>
                <h1>{item.category}</h1>
                <div className='flex flex-row w-full gap-12 items-center pt-4'>
                    <p className='text-blue-700 font-semibold'>${item.price}</p>
                    <div
                    onClick={removeFromCart}
                    className='cursor-pointer rounded-full bg-red-500 p-3'>
                        <FcDeleteDatabase />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CartItem;