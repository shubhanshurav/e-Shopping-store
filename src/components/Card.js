import React from "react";

const Card = ({ image, id, company, price, Heading }) => {
  return (
    <div className="w-[250px] border-inherit border rounded-xl py-3 px-3 m-5">
      <img src={image} className="w-full rounded-xl" alt="" />

      <p className="text-amber-800	">{company}</p>

      <p className="text-black text-[18px]  font-semibold mt-3">{Heading}</p>

      <p className="text-green-400 mt-3  ">
        {" "}
        {price} <s className="text-red-400 ">59.00$</s>
      </p>

      <div className="flex justify-between mt-6">
        <p className="text-red-600 font-semibold  ">View Details</p>

        <button className="bg-green-500 text-white py-2 px-2 rounded-md text-sm  font font-semibold ">
          {
            false ? <p>Remove Item</p> : <p>Add to Cart</p>
          }
        </button>
      </div>
    </div>
  );
};

export default Card;


