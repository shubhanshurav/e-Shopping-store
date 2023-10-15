import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { add, remove} from '../redux/Slices/CartSlice';
import { addWish, removeWish} from '../redux/Slices/WishSlice';
import { toast } from "react-hot-toast";
import StarRating from './StarRating'; 
import {AiTwotoneHeart} from 'react-icons/ai';
import {AiOutlineHeart} from 'react-icons/ai';

const Card = ({ card }) => {

  const { cart, wish } = useSelector((state) => state);
  const dispatch = useDispatch();

  const addToWishList = () => {
    dispatch(addWish(card));
    toast.success("Item added to Wishlist");
  }

  const removeFromWishList = () => {
    dispatch(removeWish(card.id));
    toast.error("Item removed from Wishlist");
  }
  const addToCart = () => {
    dispatch(add(card));
    toast.success("card added to Cart");
  }

  const removeFromCart = () => {
    dispatch(remove(card.id));
    toast.error("card removed from Cart");
  }

  return (
    <div className="border-inherit border rounded-xl py-2 px-3 m-auto">

      <div className="text-xl">
      {wish.some((p) => p.id == card.id) ? (
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
      </div>
       <img src={card.image} className="w-full rounded-xl" alt="" />
      

      <h1 className="text-gray-700 font-normal text-md text-left mt-1 uppercase">
            {card.company}
      </h1> 

      <h1 className="text-gray-800 font-semibold text-lg text-left mt-1 py-2">
            {card.Heading}
      </h1> 
      <div className='text-sm'>
         <div className='flex justify-between'>
            <p className='font-md text-lg'>Stock: </p>
            <p className='text-blue-700 font-bold'>{card.stock}</p>
         </div>
      </div>
      <div className='text-sm '>
         <div className='flex justify-between'>
            <p className='font-md text-lg'>Ratings: </p> 
            <StarRating rating={card.rating} /> 
         </div>
      </div>

      <p className="text-blue-700 font-bold mt-3 ">
        {" "}
        ${card.price} <s className="text-red-400 px-2">59.00$</s>
      </p>

      <div className="flex justify-between mt-6">
      <Link to="/Shop/ViewDetails" className='text-red-600 font-semibold hover:text-black '>View Details</Link>

        {cart.some((p) => p.id === card.id) ? (
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
  );
};

export default Card;


