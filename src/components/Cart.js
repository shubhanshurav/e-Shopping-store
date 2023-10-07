import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CartItem from './CartItem';

const Cart = () => {

  const {cart} = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect( () => {
    setTotalAmount(cart.reduce( (acc, curr) => acc + curr.price,0).toFixed(2));
  }, [cart])

  return (
    <div> 
      { 
         cart.length > 0 ?
         (<div className='flex flex-row items-center justify-between m-auto p-5'>
            <div className='my-5 w-[66%] border-2 border-gray-200'>
               {
                cart.map( (item, index) => {
                  return <CartItem key={item.id} item={item} itemIndex={index} />
                })
               }
            </div>

           <div className='flex flex-col w-[30%] p-10 border-b-2 border-l-2 border-t-2 border-gray-200'>
            <div className='mb-72 p-5'>
                <div className='text-xl text-blue-700 font-medium'>Your Cart</div>
                <div className='text-4xl text-blue-700 font-semibold '>Summary</div>
                <p className='font-medium'>
                  <span>Total Items: {cart.length}</span>
                </p>
              </div>

              <div className='w-full'>
                <p>Total Amount: <b className='text-blue-700 pl-4 font-bold'>${totalAmount}</b></p>
                <button className='bg-blue-700 border-2 border-blue-700 rounded-2xl font-semibold text-sm text-white w-[70%] p-2 mt-5 hover:bg-blue-800'>Pay Now</button>
              </div>
           </div>
         </div>):
         (<div className='text-justify items-center h-[100vh]'> 
             <h1 className='font-bold'>Cart Empty</h1>
             <Link to={"/"}>
                 <button 
                 className='bg-blue-700 border-2 border-blue-700 rounded-2xl font-semibold text-sm text-white w-[10%] p-2 mt-5 hover:bg-blue-800'>
                  Shop Now
                 </button>
             </Link>
          </div>)
      }
    </div>
  )
}

export default Cart;