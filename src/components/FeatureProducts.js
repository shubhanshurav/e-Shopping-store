import React from 'react';

const FeatureProducts = () => {
  return (
    <div className='flex flex-wrap flex-row place-content-center m-auto pt-14'>
       <div className='border-2 border-gray-500 w-64 m-5 rounded-2xl'>
           <img src='/assets/products/f3.jpg' alt='product' className='rounded-3xl p-2'/>
           <div className='border-b-2 border-gray-400 m-6 pb-4'>
                <p className='pb-3 text-red-400 font-mono'>adidas</p>
                <h1 className='text-xl'>Women's Badge of Sport Tee</h1>
           </div>
           <div className='text-center pb-5'>
              <h3 className='text-red-500 font-bold text-2xl'>in stock</h3>
              <p>$50% Off</p>
           </div>
       </div>

       <div className='border-2 border-gray-500 w-64 m-5 rounded-2xl'>
           <img src='/assets/products/f4.jpg' alt='product' className='rounded-3xl p-2'/>
           <div className='border-b-2 border-gray-400 m-6 pb-4'>
                <p className='pb-3 text-red-400 font-mono'>levi's</p>
                <h1 className='text-xl'>Men's 1950s Sportswear T-Shirt</h1>
           </div>
           <div className='text-center pb-5'>
              <h3 className='text-red-500 font-bold text-2xl'>in stock</h3>
              <p>$50% Off</p>
           </div>
       </div>

       <div className='border-2 border-gray-500 w-64 m-5 rounded-2xl'>
           <img src='/assets/products/f5.jpg' alt='product' className='p-2 rounded-3xl'/>
           <div className='border-b-2 border-gray-400 m-6 pb-4'>
                <p className='pb-3 text-red-400 font-mono'>under armour</p>
                <h1 className='text-xl'>Men's Tech 2.0 Short Sleeve T-Shirt</h1>
           </div>
           <div className='text-center pb-5'>
              <h3 className='text-red-500 font-bold text-2xl'>in stock</h3>
              <p>$50% Off</p>
           </div>
       </div>

       <div className='border-2 border-gray-500 w-64 m-5 rounded-2xl'>
           <img src='/assets/products/f6.jpg' alt='product' className='rounded-3xl p-2'/>
           <div className='border-b-2 border-gray-400 m-6 pb-4'>
                <p className='pb-3 text-red-400 font-mono'>h&m</p>
                <h1 className='text-xl'>Women's Basic Tee, Men's Rebel Bold Tee
</h1>
           </div>
           <div className='text-center pb-5'>
              <h3 className='text-red-500 font-bold text-2xl'>in stock</h3>
              <p>$50% Off</p>
           </div>
       </div>

       
    </div>
  )
}

export default FeatureProducts;