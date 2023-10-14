import React from 'react';
import { Link } from 'react-router-dom';

const FeatureProducts = () => {
  return (
   <div>
      <div className="text-center">
          <h1 className="text-4xl font-bold text-orange-600 p-4">Featured Products</h1>
          <p>All Weather New Modern Designs</p>
      </div>
      <div className='flex flex-wrap flex-row place-content-center m-auto pt-14'>
         <div className='border-2 border-gray-300 w-64 m-5 rounded-2xl'>
           <img src='/assets/products/f3.jpg' alt='product' className='rounded-3xl p-2'/>
           <div className='border-b-2 border-gray-400 m-6 pb-4'>
                <p className='pb-3 text-red-400 font-mono'>adidas</p>
                <h1 className='text-xl'>Women's Badge of Sport Tee</h1>
           </div>
           <div className='text-center pb-5'>
              <h3 className='text-red-500 font-bold text-2xl'>in stock</h3>
              <strike className='text-orange-400'>$50% Off</strike>
           </div>
         </div>

         <div className='border-2 border-gray-300 w-64 m-5 rounded-2xl'>
            <img src='/assets/products/f4.jpg' alt='product' className='rounded-3xl p-2'/>
            <div className='border-b-2 border-gray-400 m-6 pb-4'>
                  <p className='pb-3 text-red-400 font-mono'>levi's</p>
                  <h1 className='text-xl'>Men's 1950s Sportswear T-Shirt</h1>
            </div>
            <div className='text-center pb-5'>
               <h3 className='text-red-500 font-bold text-2xl'>in stock</h3>
               <strike className='text-orange-400'>$50% Off</strike>
            </div>
         </div>

         <div className='border-2 border-gray-300 w-64 m-5 rounded-2xl'>
            <img src='/assets/products/f5.jpg' alt='product' className='p-2 rounded-3xl'/>
            <div className='border-b-2 border-gray-400 m-6 pb-4'>
                  <p className='pb-3 text-red-400 font-mono'>under armour</p>
                  <h1 className='text-xl'>Men's Tech 2.0 Short Sleeve T-Shirt</h1>
            </div>
            <div className='text-center pb-5'>
               <h3 className='text-red-500 font-bold text-2xl'>in stock</h3>
               <strike className='text-orange-400'>$50% Off</strike>
            </div>
         </div>

         <div className='border-2 border-gray-300 w-64 m-5 rounded-2xl'>
            <img src='/assets/products/f6.jpg' alt='product' className='rounded-3xl p-2'/>
            <div className='border-b-2 border-gray-400 m-6 pb-4'>
                  <p className='pb-3 text-red-400 font-mono'>h&m</p>
                  <h1 className='text-xl'>Women's Basic Tee, Men's Rebel Bold Tee</h1>
            </div>
            <div className='text-center pb-5'>
               <h3 className='text-red-500 font-bold text-2xl'>in stock</h3>
               <strike className='text-orange-400'>$50% Off</strike>
            </div>
         </div>
    </div>

      <div
         className="bg-cover bg-no-repeat bg-center m-5 h-44 rounded-2xl"
         style={{ backgroundImage: `url('/assets/banner/b2.jpg')`}}
      >
         <h1 className="text-white text-center pt-5 text-xl">Repair Services</h1>
         <h1 className="text-white text-center p-3 text-2xl">On 70% Off on All Products And Accessories</h1>
         <div className='text-center'>
            <Link to='/'>
               <button className="bg-orange-600 px-6 py-2 border-solid border-4 border-amber-400 rounded-2xl hover:bg-slate-200 hover:text-black hover:border-amber-600 place-content-center">
               Explore Now
               </button>
            </Link>
         </div>
      </div>

      <div className="text-center">
          <h1 className="text-4xl font-bold text-orange-600 p-4">New Arrivals</h1>
          <p>Your Best Designer Outfits</p>
      </div>
      <div className='flex flex-wrap flex-row place-content-center m-auto pt-14'>
      <div className='border-2 border-gray-300 w-64 m-5 rounded-2xl'>
           <img src='/assets/products/img2.png' alt='product' className='rounded-3xl p-2'/>
           <div className='border-b-2 border-gray-400 m-6 pb-4'>
                <p className='pb-3 text-red-400 font-mono'>adidas</p>
                <h1 className='text-xl'>Women's Badge of Sport Tee</h1>
           </div>
           <div className='text-center pb-5'>
              <h3 className='text-red-500 font-bold text-2xl'>in stock</h3>
              <strike className='text-orange-400'>$50% Off</strike>
           </div>
         </div>

         <div className='border-2 border-gray-300 w-64 m-5 rounded-2xl'>
            <img src='/assets/products/img3.png' alt='product' className='rounded-3xl p-2'/>
            <div className='border-b-2 border-gray-400 m-6 pb-4'>
                  <p className='pb-3 text-red-400 font-mono'>levi's</p>
                  <h1 className='text-xl'>Men's 1950s Sportswear T-Shirt</h1>
            </div>
            <div className='text-center pb-5'>
               <h3 className='text-red-500 font-bold text-2xl'>in stock</h3>
               <strike className='text-orange-400'>$50% Off</strike>
            </div>
         </div>

         <div className='border-2 border-gray-300 w-64 m-5 rounded-2xl'>
            <img src='/assets/products/img4.png' alt='product' className='p-2 rounded-3xl'/>
            <div className='border-b-2 border-gray-400 m-6 pb-4'>
                  <p className='pb-3 text-red-400 font-mono'>under armour</p>
                  <h1 className='text-xl'>Men's Tech 2.0 Short Sleeve T-Shirt</h1>
            </div>
            <div className='text-center pb-5'>
               <h3 className='text-red-500 font-bold text-2xl'>in stock</h3>
               <strike className='text-orange-400'>$50% Off</strike>
            </div>
         </div>

         <div className='border-2 border-gray-300 w-64 m-5 rounded-2xl'>
            <img src='/assets/products/img5.png' alt='product' className='rounded-3xl p-2'/>
            <div className='border-b-2 border-gray-400 m-6 pb-4'>
                  <p className='pb-3 text-red-400 font-mono'>h&m</p>
                  <h1 className='text-xl'>Women's Basic Tee, Men's Rebel Bold Tee</h1>
            </div>
            <div className='text-center pb-5'>
               <h3 className='text-red-500 font-bold text-2xl'>in stock</h3>
               <strike className='text-orange-400'>$50% Off</strike>
            </div>
         </div>

         <div className='grid lg:grid-cols-2 sm:grid-cols-2 place-content-center m-auto p-14'>
            {/* card1 */}
           <div className='grid lg:grid-cols-2 sm:grid-flow-row border-2 border-gray-300 m-2 p-3 rounded-2xl'>
             <div className=''>
               <img src='/assets/banner/b17.jpg' className='w-64 rounded-2xl p-2'/>
             </div>
             <div className='p-4 text-md'>
               <h1>Hot Deals</h1>
               <p>Buy One get One free.</p>
               <p>The latest best collection in our closet</p>
               <p>Feel Cute with our outfits</p>
               <Link to='/'>
                  <button className="bg-orange-600 px-3 py-1 text-sm border-solid border-2 border-black rounded-2xl hover:bg-slate-200 hover:text-black place-content-center">
                  Explore Now
                  </button>
               </Link>
             </div>
           </div>

          {/* card2 */}
           <div className='grid lg:grid-cols-2 border-2 border-gray-300 m-2 p-3 rounded-2xl'>
             <div className=''>
                <img src='/assets/banner/b10.jpg' className='w-64 rounded-2xl p-2'/>
             </div>
             <div className='p-4 text-md '>
               <p>Season-In</p>
               <p>All Weather Attire</p>
               <p>It never matter which season it is</p>
               <p>We got you covered</p>
               <Link to='/'>
                  <button className="bg-orange-600 px-3 py-1 text-sm border-solid border-2 border-black rounded-2xl hover:bg-slate-200 hover:text-black place-content-center">
                  Explore Now
                  </button>
               </Link>
             </div>

           </div>
         </div>
      </div>

   </div>
  )
}

export default FeatureProducts;