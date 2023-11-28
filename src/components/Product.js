import React from 'react';
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from 'react-redux';
import { add, remove} from '../redux/Slices/CartSlice';
import { addWish, removeWish} from '../redux/Slices/WishSlice';
import ImageCarousel from './ImageCarousel'; 
import StarRating from './StarRating'; 
import {AiOutlineHeart} from 'react-icons/ai';
import {AiTwotoneHeart} from 'react-icons/ai';

const Product = ({ post }) => {
  
  const { cart, wish } = useSelector((state) => state);
  const dispatch = useDispatch();

  const addToWishList = () => {
    dispatch(addWish(post));
    toast.success("Item added to Wishlist");
  }

  const removeFromWishList = () => {
    dispatch(removeWish(post.id));
    toast.error("Item removed from Wishlist");
  }

  const addToCart = () => {
    dispatch(add(post));
    toast.success("Item added to Cart");
  }

  const removeFromCart = () => {
    dispatch(remove(post.id));
    toast.error("Item removed from Cart");
  }

  if(post == null) return null;
  
  return (
    <div className='flex flex-col justify-between cursor-pointer transition duration-300 ease-in shadow-xl px-4 py-4 m-auto rounded-xl border-2 border-gray-200'>
      <div className='text-gray-700 font-semibold text-lg text-left truncate w-40 py-1 uppercase'>
        <p >{post.title}</p>
      </div>
      <div>
        {wish.some((p) => p.id === post.id) ? (
            <button
              onClick={removeFromWishList}
              className='text-gray-700 rounded-full font-semibold text-[12px] p-1 px-1 uppercase
              transition duration-300 ease-in'>
                <AiTwotoneHeart className='text-2xl text-red-700' />
            </button>
          ) : (
            <button
            onClick={addToWishList}
            className='text-gray-700 rounded-full font-semibold text-[12px] p-1 px-1 uppercase
              transition duration-300 ease-in'>
                <AiOutlineHeart className='text-2xl text-red-700' />
            </button>
          )}
        <ImageCarousel post={post} />
      </div>
      <div className='flex justify-between items-center py-2'> 
        <p className='text-md md:text-xl font-bold'>{post.brand}</p>
        <p className='text-sm font-medium uppercase'>{post.category}</p>
      </div>
      <div>
          {post.description ? (
            <p className='w-45 text-gray-400 font-normal text-[12px] text-left'>
              {post.description.split(" ").slice(0, 8).join(" ") + "..."}
            </p>
          ) : null}
      </div>
      <div className='text-sm'>
         <div className='flex justify-between'>
            <p className='font-md text-lg'>Stock: </p>
            <p className='text-blue-700 font-bold'>{post.stock}</p>
         </div>
      </div>
      <div className='text-sm '>
         <div className='flex justify-between'>
            <p className='font-md text-lg'>Ratings: </p> 
            <StarRating rating={post.rating} /> 
         </div>
      </div>
      <div className='flex justify-between items-center w-full mt-2'>
        <div>
          <p className='text-blue-700 font-semibold m-auto'>${post.price}</p>
        </div>
        {cart.some((p) => p.id === post.id) ? (
          <button
            onClick={removeFromCart}
            className='text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1 px-3 uppercase
            hover:bg-gray-700 hover:text-white
            transition duration-300 ease-in'>
            Remove Item
          </button>
        ) : (
          <button
            onClick={addToCart}
            className='text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1 px-3 uppercase
            hover.bg-gray-700 hover.text-white
            transition duration-300 ease-in'>
            Add to Cart
          </button>
        )}
      </div>
    </div>
  )
}

export default Product;
