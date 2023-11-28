// src/components/HomePage.js
import React from "react";
import FeatureProducts from "../components/FeatureProducts";
import { Link } from "react-router-dom";
import Creators from "./Creators";
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
    

    <div className="bg-white font-chakra-petch">

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
          <p className="text-xl md:text-2xl lg:text-xl text-black pb-8">
            Trade in offer
          </p>
          <h1 className="text-2xl md:text-4xl lg:text-5xl text-amber-600 font-bold lg:pb-5 sm:pb-4">
            Super Value Deals
          </h1>
          <h4 className="text-xl md:text-2xl lg:text:3xl  text-black pb-5 sm:pb-4">
            On all products
          </h4>
          <p className="text-xl md:text-1xl lg:text:2xl text-black pb-5 sm:pb-4">
            Save more today with Apna Fasion Store
          </p>
          <Link to="/Shop">
            <button 
            className='bg-blue-700 border-2 border-blue-700 rounded-lg text-md text-white py-2 px-2 font-chakra-petch font-extralight hover:bg-blue-800'>
                  Shop Now
            </button>
          </Link>
        </div>
      </div>
      
      {/* Five cards */}
      <div className="grid grid-cols-3 md:grid-cols-5 m-auto p-6 md:p-10 place-content-center bg-white" >
        <div className="border-lg border-2 border-gray-300 p-2 md:p-5 m-2 md:m-5 rounded-lg">
           <img className='w-20' src='/assets/icons/icon1.png' alt="icons" />
           <p className="text-center">Fast Orders</p>
        </div>

        <div  className="border-lg border-2 border-gray-300 p-2 md:p-5 m-2 md:m-5 rounded-lg">
           <img className='w-20' src='/assets/icons/icon2.png' alt="icons" />
           <p className="text-center">Quick Shipping</p>
        </div>

        <div  className="border-lg border-2 border-gray-300 p-2 md:p-5 m-2 md:m-5 rounded-lg">
           <img className='w-20' src='/assets/icons/icon3.png' alt="icons" />
           <p>High Saves</p>
        </div>

        <div  className="border-lg border-2 border-gray-300 p-2 md:p-5 m-2 md:m-5 rounded-lg">
           <img className='w-20' src='/assets/icons/icon4.png' alt="icons" />
           <p>24/7 Support</p>
        </div>

        <div  className="border-lg border-2 border-gray-300 p-2 md:p-5 m-2 md:m-5 rounded-lg">
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
              <p className="text-lg">Our customers never miss a bit on providing feedback</p>
          </div>
          <div className='grid grid-cols-2 md:grid-cols-4 m-auto py-10 md:py-14 gap-4 px-2'>
            <div className='border-2 border-gray-300 w-48 md:w-64 rounded-md shadow-lg m-auto'>
              <img src='/assets/blog/blog-1.jpg' alt='product' className='rounded-md md:rounded-3xl p-2'/>
              <p className="px-4 font-serif text-zinc-700 text-sm">Some quick example text to build on the card title and make up the bulk of the cards content....</p>
              <div className="text-right pr-5 pb-2">
                <a href="/" className="text-blue-900 font-semibold font-mono cursor-pointer overflow-hidden text-sm">
                Learn more
                </a>
              </div>
            </div>
            <div className='border-2 border-gray-300 w-48 md:w-64 rounded-md shadow-lg m-auto'>
              <img src='/assets/blog/blog-2.jpg' alt='product' className='rounded-md md:rounded-3xl p-2'/>
              <p className="px-4 font-serif text-zinc-700 text-sm">Some quick example text to build on the card title and make up the bulk of the cards content....</p>
              <div className="text-right pr-5 pb-2">
                <a className="text-blue-900 font-semibold font-mono cursor-pointer overflow-hidden text-sm">
                Learn more
                </a>
              </div>
            </div>
            <div className='border-2 border-gray-300 w-48 md:w-64 rounded-md shadow-lg m-auto'>
              <img src='/assets/blog/blog-3.jpg' alt='product' className='rounded-md md:rounded-3xl p-2'/>
              <p className="px-4 font-serif text-zinc-700 text-sm">Some quick example text to build on the card title and make up the bulk of the cards content....</p>
              <div className="text-right pr-5 pb-2">
                <a className="text-blue-900 font-semibold font-mono cursor-pointer overflow-hidden text-sm">
                Learn more
                </a>
              </div>
            </div>
            <div className='border-2 border-gray-300 w-48 md:w-64 rounded-md shadow-lg m-auto'>
              <img src='/assets/blog/blog-4.jpg' alt='product' className='rounded-md md:rounded-3xl p-2'/>
              <p className="px-4 font-serif text-zinc-700 text-sm">Some quick example text to build on the card title and make up the bulk of the cards content....</p>
              <div className="text-right pr-5 pb-2">
                <a className="text-blue-900 font-semibold font-mono cursor-pointer overflow-hidden text-sm">
                Learn more
                </a>
              </div>
            </div>
        </div>
      </div>

    <div class="bg-black py-10">
      <div class="mx-auto max-w-7xl px-2 md:px-8">
          <div className="pb-6">
            <h2 className="text-center text-blue-700 lg:text-5xl sm:text-2xl font-bold pb-4">Trusted by users Worldwide</h2>
            <p className="text-center text-gray-300 text-sm font-light">Lorem ipsum dolor sit amet consect adipisicing possimus.</p>
          </div>
        <div class="grid grid-cols-3 gap-x-2 gap-y-10 text-center font-sans md:grid-cols-3">
          <div class="mx-auto flex max-w-xs flex-col gap-y-4 border-r-2 border-blue-800 m-2 md:m-12">
            <p class="text-base leading-7 text-gray-400 px-4 md:px-12">Transactions every 24 hours</p>
            <p class="order-first text-2xl font-semibold text-white sm:text-5xl px-5 md:px-12">4000+</p>
          </div>
          <div class="mx-auto flex max-w-xs flex-col gap-y-4 border-r-2 border-blue-800 m-2 md:m-12">
            <p class="text-base leading-7 text-gray-400 px-4 md:px-12">Assets under holding</p>
            <p class="order-first text-2xl font-semibold text-white sm:text-5xl px-5 md:px-12">$2000+</p>
          </div>
          <div class="mx-auto flex max-w-xs flex-col gap-y-4 m-2 md:m-12">
            <p class="text-base leading-7 text-gray-400 px-6 md:px-12" >New users annually</p>
            <p class="order-first text-2xl font-semibold text-white sm:text-5xl px-5 md:px-12">10,000+</p>
          </div>
        </div>
      </div>
    </div>

       {/* Creators */}
      <div>
         <Creators />
      </div>
      
    </div>
  );
}

export default HomePage;
