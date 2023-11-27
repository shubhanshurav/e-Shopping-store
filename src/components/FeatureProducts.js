import React from "react";
import { Link } from "react-router-dom";

const FeatureProducts = () => {
  return (
    <div>
      <div className="text-center">
        <h1 className="text-4xl font-bold text-orange-600 p-4">
          Featured Products
        </h1>
        <p>All Weather New Modern Designs</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 m-auto pt-14 px-2 gap-2">
        <div className="border-2 border-gray-300 w-48 md:w-64 rounded-2xl m-auto">
          <img
            src="/assets/products/f3.jpg"
            alt="product"
            className="rounded-3xl p-2"
          />
          <div className="border-b-2 border-gray-400 m-2 md:m-4 pb-4">
            <p className="pb-3 text-red-400 font-mono">adidas</p>
            <h1 className="text-lg md:text-xl">Women's Badge of Sport Tee</h1>
          </div>
          <div className="text-center pb-5">
            <h3 className="text-red-500 font-bold text-xl md:text-2xl">
              in stock
            </h3>
            <strike className="text-orange-400">$50% Off</strike>
          </div>
        </div>

        <div className="border-2 border-gray-300 w-48 md:w-64 rounded-2xl m-auto">
          <img
            src="/assets/products/f4.jpg"
            alt="product"
            className="rounded-3xl p-2"
          />
          <div className="border-b-2 border-gray-400 m-2 md:m-4 pb-4">
            <p className="pb-3 text-red-400 font-mono">levi's</p>
            <h1 className="text-lg md:text-xl">
              Men's 1950s Sportswear T-Shirt
            </h1>
          </div>
          <div className="text-center pb-5">
            <h3 className="text-red-500 font-bold text-xl md:text-2xl">
              in stock
            </h3>
            <strike className="text-orange-400">$50% Off</strike>
          </div>
        </div>

        <div className="border-2 border-gray-300 w-48 md:w-64 rounded-2xl m-auto">
          <img
            src="/assets/products/f5.jpg"
            alt="product"
            className="p-2 rounded-3xl"
          />
          <div className="border-b-2 border-gray-400 m-2 md:m-4 pb-4">
            <p className="pb-3 text-red-400 font-mono">under armour</p>
            <h1 className="text-lg md:text-xl">
              Men's Tech 2.0 Short Sleeve T-Shirt
            </h1>
          </div>
          <div className="text-center pb-5">
            <h3 className="text-red-500 font-bold text-xl md:text-2xl">
              in stock
            </h3>
            <strike className="text-orange-400">$50% Off</strike>
          </div>
        </div>

        <div className="border-2 border-gray-300 w-48 md:w-64 rounded-2xl m-auto">
          <img
            src="/assets/products/f6.jpg"
            alt="product"
            className="rounded-3xl p-2"
          />
          <div className="border-b-2 border-gray-400 m-2 md:m-4 pb-4">
            <p className="pb-3 text-red-400 font-mono">h&m</p>
            <h1 className="text-lg md:text-xl">
              Women's Basic Tee, Men's Rebel Bold Tee
            </h1>
          </div>
          <div className="text-center pb-5">
            <h3 className="text-red-500 font-bold text-xl md:text-2xl">
              in stock
            </h3>
            <strike className="text-orange-400">$50% Off</strike>
          </div>
        </div>
      </div>

      <div
        className="bg-cover bg-no-repeat bg-center m-3 md:m-5 h-44 rounded-lg md:rounded-2xl"
        style={{ backgroundImage: `url('/assets/banner/b2.jpg')` }}
      >
        <h1 className="text-white text-center pt-5 text-xl">Repair Services</h1>
        <h1 className="text-white text-center p-3 text-xl md:text-2xl">
          On 70% Off on All Products And Accessories
        </h1>
        <div className="text-center">
          <Link to="/Shop">
            <button className="bg-blue-700 border-2 border-blue-700 rounded-md text-md text-white py-1 px-2 font-chakra-petch font-extralight hover:bg-blue-800">
              Shop Now
            </button>
          </Link>
        </div>
      </div>

      <div className="text-center">
        <h1 className="text-4xl font-bold text-orange-600 p-4">New Arrivals</h1>
        <p>Your Best Designer Outfits</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 place-content-center m-auto py-14 gap-2 border-b">
        <div className="border-2 border-gray-300 w-44 md:w-64 m-auto rounded-2xl shadow-lg">
          <img
            src="/assets/products/img2.png"
            alt="product"
            className="rounded-3xl p-2"
          />
          <div className="border-b-2 border-gray-400 m-2 md:m-6 pb-4">
            <p className="pb-3 text-red-400 font-mono">adidas</p>
            <h1 className="text-xl">Women's Badge of Sport Tee</h1>
          </div>
          <div className="text-center pb-5">
            <h3 className="text-red-500 font-bold text-2xl">in stock</h3>
            <strike className="text-orange-400">$50% Off</strike>
          </div>
        </div>

        <div className="border-2 border-gray-300 w-44 md:w-64 m-auto rounded-2xl shadow-lg">
          <img
            src="/assets/products/img3.png"
            alt="product"
            className="rounded-3xl p-2"
          />
          <div className="border-b-2 border-gray-400 m-2 md:m-6 pb-4">
            <p className="pb-3 text-red-400 font-mono">levi's</p>
            <h1 className="text-xl">Men's 1950s Sportswear T-Shirt</h1>
          </div>
          <div className="text-center pb-5">
            <h3 className="text-red-500 font-bold text-2xl">in stock</h3>
            <strike className="text-orange-400">$50% Off</strike>
          </div>
        </div>

        <div className="border-2 border-gray-300 w-44 md:w-64 m-auto rounded-2xl shadow-lg">
          <img
            src="/assets/products/img4.png"
            alt="product"
            className="p-2 rounded-3xl"
          />
          <div className="border-b-2 border-gray-400 m-2 md:m-6 pb-4">
            <p className="pb-3 text-red-400 font-mono">under armour</p>
            <h1 className="text-xl">Men's Tech 2.0 Short Sleeve T-Shirt</h1>
          </div>
          <div className="text-center pb-5">
            <h3 className="text-red-500 font-bold text-2xl">in stock</h3>
            <strike className="text-orange-400">$50% Off</strike>
          </div>
        </div>

        <div className="border-2 border-gray-300 w-44 md:w-64 m-auto rounded-2xl shadow-lg">
          <img
            src="/assets/products/img5.png"
            alt="product"
            className="rounded-3xl p-2"
          />
          <div className="border-b-2 border-gray-400 m-2 md:m-6 pb-4">
            <p className="pb-3 text-red-400 font-mono">h&m</p>
            <h1 className="text-xl">Women's Basic Tee, Men's Rebel Bold Tee</h1>
          </div>
          <div className="text-center pb-5">
            <h3 className="text-red-500 font-bold text-2xl">in stock</h3>
            <strike className="text-orange-400">$50% Off</strike>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 m-auto gap-2 md:gap-10 py-4 md:py-8 px-2 md:px-20">
        {/* card1 */}
        <div className="flex flex-col border border-gray-300 m-auto px-2 md:px-5 rounded-lg text-start shadow-lg py-3 md:py-6">
          <div className="">
            <img src="/assets/banner/b17.jpg" className="rounded-md" />
          </div>
          <div className="pt-2 p-2 text-md font-chakra-petch">
            <h1>Hot Deals</h1>
            <p>Buy One get One free.</p>
            <p>The latest best collection</p>
            <p>Feel Cute with our outfits</p>
            <button className="bg-blue-700 border-2 border-blue-700 rounded-lg text-md text-white py-1 px-2 mt-2 font-chakra-petch font-extralight hover:bg-blue-800">
              Shop Now
            </button>
          </div>
        </div>

        {/* card2 */}
        <div className="flex flex-col border border-gray-300 m-auto px-2 md:px-5 rounded-lg text-start shadow-lg py-6">
          <div className="">
            <img src="/assets/banner/b10.jpg" className="rounded-md" />
          </div>
          <div className="pt-2 text-md font-chakra-petch">
            <p>Season-In</p>
            <p>All Weather Attire</p>
            <p>It never matter which season it is</p>
            <p>We got you covered</p>
            <button className="bg-blue-700 border-2 border-blue-700 rounded-lg text-md text-white py-1 px-2 mt-2 font-chakra-petch font-extralight hover:bg-blue-800">
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureProducts;
