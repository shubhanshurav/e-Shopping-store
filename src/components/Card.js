import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { add, remove} from '../redux/Slices/CartSlice';
import { toast } from "react-hot-toast";
import StarRating from './StarRating'; 

const Card = ({ card }) => {

  const { cart } = useSelector((state) => state);
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(add(card));
    toast.success("card added to Cart");
  }

  const removeFromCart = () => {
    dispatch(remove(card.id));
    toast.error("card removed from Cart");
  }

  return (
    <div className="w-[250px] border-inherit border rounded-xl py-3 px-3 m-5">
      <img src={card.image} className="w-full rounded-xl" alt="" />

      <h1 className="text-gray-700 font-semibold text-lg text-left mt-1">
            {card.company}
      </h1> 

      <h1 className="text-gray-700 font-semibold text-lg text-left mt-1">
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

      <p className="text-green-400 mt-3 ">
        {" "}
        {card.price} <s className="text-red-400 ">59.00$</s>
      </p>

      <div className="flex justify-between mt-6">
      <Link to="/Shop/ViewDetails" className='text-red-600 font-semibold hover:text-black '>View Details</Link>

        {cart.some((crd) => crd.id === card.id) ? (
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


