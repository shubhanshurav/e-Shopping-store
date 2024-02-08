import React from "react";
import { RiDeleteBin2Line } from "react-icons/ri";
import StarRating from './StarRating'; 
import { useDispatch, useSelector} from 'react-redux';
import {removeWish} from '../redux/Slices/WishSlice';
import { toast } from "react-hot-toast";
import {Link} from 'react-router-dom';

const WishListItem = ({ item, itemIndex}) => {  
  // const { cartCard } = useSelector((state) => state);

  const dispatch = useDispatch();

  const removeFromWishlist = () => {
    dispatch(removeWish(item.id));
    toast.error("Item Removed");
  };

  return (
    <div>
      <div className="flex flex-col md:flex-row gap-3 p-4 m-auto pl-5 border-b-[3px] border-gray-200">
        <div className="m-auto w-full">
            {item.thumbnail ? (
            <img src={item.thumbnail} className="w-full h-full rounded-md" alt=""/>
            ) : item.image ? (
            <img src={item.image} className="w-full h-full rounded-md" alt="cartimage" />
            ) : null}
        </div>

        <div className=" m-auto px-10 lg:w-[35%] sm:w-[70%]">
          <h1 className="text-gray-700 font-semibold text-lg text-left mt-1">
            {item.title}
          </h1>
          <div>
          {item.description ? (
            <p className='w-40 text-gray-400 font-normal text-[12px] py-1'>
              {item.description.split(" ").slice(0, 10).join(" ") + "..."}
            </p>
          ) : null}
        </div>
          <h1 className="text-gray-700 font-md text-lg text-left mt-1 uppercase">
            {item.company}
          </h1>
          <h1 className="text-gray-700 font-light text-xl text-left mt-1 py-3">
            {item.Heading}
          </h1>  
          <h1>{item.category}</h1>
          <h1 className="text-sm font-bold">{item.brand}</h1>
          <div className="text-sm">
            <div className="flex justify-between">
              <p className="font-semibold text-lg">Stock: </p>
              <p className="text-blue-700 font-bold">{item.stock}</p>
            </div>
          </div>
          <div className="text-sm ">
            <div className="flex justify-between">
              <p className="font-semibold text-lg">Ratings: </p>
              <StarRating rating={item.rating} />
            </div>
          </div>
          <div className="flex flex-row w-full gap-12 items-center pt-4 sm:justify-between">
            <p className="text-blue-700 font-semibold">${item.price}</p>
            <div
              onClick={removeFromWishlist}
              className="cursor-pointer rounded-full bg-[red] text-white p-2 text-3xl"
            >
              <RiDeleteBin2Line />
            </div> 
          </div>
            <div>
                <Link to="/Checkout">
                <button className='bg-blue-700 border-2 border-blue-700 rounded-lg font-chakra-petch font-semibold text-sm text-white w-full px-4 py-2 mt-5 hover:bg-blue-800'>
                  Proceed To Checkout</button>
                </Link>

                {/* {cartCard.some((p) => p.id === item.id) ? (
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
              )} */}
            </div>
        </div>
      </div>
    </div>
  );
};

export default WishListItem;