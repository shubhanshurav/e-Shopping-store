// src/components/HomePage.js
import React from "react";
import FeatureProducts from "../components/FeatureProducts";
import { Link } from "react-router-dom";
// import React, { useEffect, useState } from "react";
// import Spinner from '../components/Spinner';
// import Product from '../components/Product';

const HomePage = () => {

  // const API_URL = "https://fakestoreapi.com/products";
  // const [loading, setLoading] = useState(false);
  // const [posts, setPosts] = useState([]);

  // async function fetchProductData() {
  //   setLoading(true);

  //   try{
  //     const res = await fetch(API_URL);
  //     const data = await res.json();

  //     setPosts(data);
  //   }
  //   catch(error){
  //      console.log("There is something wrong,please try agai!!");
  //      setPosts([]);
  //   }

  //   setLoading(false);
  // }

  // useEffect( () => {
  //   fetchProductData();
  // },[])


  return (
    

    <div className="bg-white">

      {/* <div>
        {
          loading ? <Spinner /> : 
          posts.length > 0 ?
          (<div className='grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto my-6 space-y-6 space-x-6 min-h-[80vh]'>
              {
                posts.map( (post) => (
                <Product key = {post.id} post = {post} />
              ) )
              }
            </div> ) :
            <div className="flex justify-center items-center">
              <p>No Data Found</p>
            </div>
        }
      </div> */}
    
      {/* Banner  */}  
      <div
        className="bg-cover bg-no-repeat bg-center sm:h-64 md:h-96 lg:h-120"
        style={{ backgroundImage: `url('/assets/back.jpg')`}}
      >
        {/* Content inside the banner */}
        <div className="text-white text-left lg:pt-16 md:pt-10 sm:pt-8 py-16 px-16 inline-block">
          <p className="sm:text-xl md:text-2xl lg:text-xl text-black pb-8">
            Trade in offer
          </p>
          <h1 className="sm:text-2xl md:text-4xl lg:text-5xl text-amber-600 font-bold lg:pb-5 sm:pb-4">
            Super Value Deals
          </h1>
          <h4 className="sm:text-xl md:text-2xl lg:text:3xl  text-black pb-5 sm:pb-4">
            On all products
          </h4>
          <p className="sm:text-xl md:text-1xl lg:text:2xl text-black pb-5 sm:pb-4">
            Save more today with Apna Fasion Store
          </p>
          <button className="bg-orange-700 px-4 text-sm md:text-lg lg:text-xl py-2 border-solid border-2 border-orange-600 rounded-xl hover:bg-slate-200 hover:text-black">
            <Link to="/Shop">Shop Now</Link>
          </button>
        </div>
      </div>
      
      {/* Five cards */}
      <div className="flex flex-row flex-wrap m-auto p-10 place-content-center bg-white" >
        <div className="border-lg border-2 border-gray-300 p-5 m-5 rounded-lg">
           <img className='w-20' src='/assets/icons/icon1.png' alt="icons" />
           <p className="text-center">Fast Orders</p>
        </div>

        <div  className="border-lg border-2 border-gray-300 p-5 m-5 rounded-lg">
           <img className='w-20' src='/assets/icons/icon2.png' alt="icons" />
           <p className="text-center">Quick Shipping</p>
        </div>

        <div  className="border-lg border-2 border-gray-300 p-5 m-5 rounded-lg">
           <img className='w-20' src='/assets/icons/icon3.png' alt="icons" />
           <p>High Saves</p>
        </div>

        <div  className="border-lg border-2 border-gray-300 p-5 m-5 rounded-lg">
           <img className='w-20' src='/assets/icons/icon4.png' alt="icons" />
           <p>24/7 Support</p>
        </div>

        <div  className="border-lg border-2 border-gray-300 p-5 m-5 rounded-lg">
           <img className='w-20' src='/assets/icons/icon5.png' alt="icons" />
           <p>Online Orders</p>
        </div>
      </div>

      {/* featured Products  */}
          <FeatureProducts />

      {/* What our customers say...  Section*/}
      <div className="bg-white">
          <div className="text-center">
              <h1 className="text-4xl font-bold text-orange-600 p-4">What our customers say...</h1>
              <p>Our customers never miss a bit on providing feedback</p>
          </div>
          <div className='flex flex-wrap flex-row place-content-center m-auto pt-14'>
            <div className='border-2 border-gray-300 w-64 m-5 rounded-2xl'>
              <img src='/assets/blog/blog-1.jpg' alt='product' className='rounded-3xl p-2'/>
              <p className="px-4 font-serif text-zinc-700 text-sm">Some quick example text to build on the card title and make up the bulk of the cards content....</p>
              <div className="text-right pr-5 pb-2">
                <a className="text-blue-900 font-semibold font-mono cursor-pointer overflow-hidden text-sm">
                Learn more
                </a>
              </div>
            </div>
            <div className='border-2 border-gray-300 w-64 m-5 rounded-2xl'>
              <img src='/assets/blog/blog-2.jpg' alt='product' className='rounded-3xl p-2'/>
              <p className="px-4 font-serif text-zinc-700 text-sm">Some quick example text to build on the card title and make up the bulk of the cards content....</p>
              <div className="text-right pr-5 pb-2">
                <a className="text-blue-900 font-semibold font-mono cursor-pointer overflow-hidden text-sm">
                Learn more
                </a>
              </div>
            </div>
            <div className='border-2 border-gray-300 w-64 m-5 rounded-2xl'>
              <img src='/assets/blog/blog-3.jpg' alt='product' className='rounded-3xl p-2'/>
              <p className="px-4 font-serif text-zinc-700 text-sm">Some quick example text to build on the card title and make up the bulk of the cards content....</p>
              <div className="text-right pr-5 pb-2">
                <a className="text-blue-900 font-semibold font-mono cursor-pointer overflow-hidden text-sm">
                Learn more
                </a>
              </div>
            </div>
            <div className='border-2 border-gray-300 w-64 m-5 rounded-2xl'>
              <img src='/assets/blog/blog-4.jpg' alt='product' className='rounded-3xl p-2'/>
              <p className="px-4 font-serif text-zinc-700 text-sm">Some quick example text to build on the card title and make up the bulk of the cards content....</p>
              <div className="text-right pr-5 pb-2">
                <a className="text-blue-900 font-semibold font-mono cursor-pointer overflow-hidden text-sm">
                Learn more
                </a>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
