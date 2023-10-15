import React from "react";
import { Link, useNavigate } from "react-router-dom";
// import ViewDetails from "./ViewDetails";

const Card = ({ image, id, company, price, Heading,selectHandler , shopdata}) => {


const navigate = useNavigate();

  return (
    <div className="w-[250px] border-inherit border rounded-xl py-3 px-3 m-5  cursor-pointer" onClick={() => navigate("/Shop/ViewDetail/" + id)}>
      <img src={image} className="w-full rounded-xl" alt="" />

      <p className="text-amber-800	">{company}</p>

      <p className="text-black text-[18px]  font-semibold mt-3">{Heading}</p>

      <p className="text-green-400 mt-3  ">
        {" "}
        {price} <s className="text-red-400 ">59.00$</s>
      </p>


      <div className="flex justify-between mt-6">


     {/* <Link to ="/Shop/ViewDetail"> <button className='text-red-600 font-semibold hover:text-black ' onClick = {() => selectHandler(id)}  >View Details</button></Link> */}

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


