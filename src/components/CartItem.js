import React from "react";
import { toast } from "react-hot-toast";
import { RiDeleteBin2Line } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import StarRating from './StarRating'; 

const CartItem = ({ item, itemIndex}) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.error("Item Removed");
  };
  

  return (
    <div>
      <div className="flex lg:flex-row sm:flex-col gap-3 p-4 m-auto pl-5 border-b-[3px] border-gray-200">
      <div className="h-[180px] m-auto">
        {item.thumbnail ? (
          <img src={item.thumbnail} className="w-full h-full" />
        ) : item.image ? (
          <img src={item.image} className="w-full h-full rounded-lg" alt="cartimage" />
        ) : null}
      </div>

        <div className=" m-auto px-10">
          <h1 className="text-gray-700 font-semibold text-lg text-left mt-1">
            {item.title}
          </h1>
          <div>
          {item.description ? (
            <p className='w-40 text-gray-400 font-normal text-[12px] text-left py-1'>
              {item.description.split(" ").slice(0, 10).join(" ") + "..."}
            </p>
          ) : null}
        </div>
          <h1 className="text-gray-700 font-semibold text-lg text-left mt-1">
            {item.company}
          </h1>
          <h1 className="text-gray-700 font-semibold text-lg text-left mt-1">
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
          <div className="flex flex-row w-full gap-12 items-center pt-4">
            <p className="text-blue-700 font-semibold">${item.price}</p>
            <div
              onClick={removeFromCart}
              className="cursor-pointer rounded-full bg-red-600 text-white p-2 text-3xl"
            >
              <RiDeleteBin2Line />
            </div>
          </div>
        </div>
      </div>

      {/* <div className="flex lg:flex-row sm:flex-col gap-3 p-4 m-auto pl-5 border-b-[3px] border-gray-200">
            <img src={item.image} className="w-full rounded-xl" alt="" />

            <p className="text-amber-800">{item.company}</p>

            <p className="text-black text-[18px]  font-semibold mt-3">{item.description}</p>

          <div className="flex flex-row w-full gap-12 items-center pt-4">
            <p className="text-blue-700 font-semibold">${item.price}</p>
            <div
              onClick={removeFromCart}
              className="cursor-pointer rounded-full bg-red-600 text-white p-2 text-3xl"
            >
              <RiDeleteBin2Line />
            </div>
          </div>
        </div> */}
    </div>
  );
};

export default CartItem;
