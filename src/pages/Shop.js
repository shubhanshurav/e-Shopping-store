import React, {useState,useEffect} from "react";
import Card from "../components/Card";
import shopData from '../Data';
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";
import Spinner from '../components/Spinner';
import Product from '../components/Product';
import ErrorPage from "../components/ErrorPage";

const Shop=() => {

  const API_URL = "https://dummyjson.com/products/";
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);

  const [shopdata , setShopData] = useState(shopData);


  async function fetchProductData() {
     setLoading(true);

      try {
        const res = await fetch(API_URL);
        const data = await res.json();

        setPosts(data.products);
      } catch (error) {
        console.error("There is something wrong, please try again!!");
        setPosts([]);
      }

      setLoading(false);
  }

  useEffect( () => {
    fetchProductData();
  },[])

  return (
    <div className="overflow-hidden font-chakra-petch bg-bluebg-50 text-richblack-5">
      <div id="imagesection">
        <img
          src="./assets/banner/b1.jpg"
          alt="banner"
          className="w-[100%] h-[250px]"
        />
      </div>

      <div className="-mt-44 ">
        {" "}
        <p className="text-[35px] md:text-[40px] font-semibold flex justify-center text-white  ">
          {" "}
          <span className="text-red-700 ">#100%</span> Off On All Products
        </p>
        <p className=" flex justify-center font-semibold text-[20px] text-blue-300">
          Make your orders we will deliver..
        </p>
      </div>
 
      <div className="py-6 md:py-14 px-4">
        {
          loading ? <Spinner /> : 
          posts.length > 0 ?
          (<div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-0 md:gap-6 m-auto py-24 md:py-12'>
              {
                posts.map( (post) => (
                  <Product key = {post.id} post = {post}  />
              ) )
              }
            </div> ) :
            <div className="flex justify-center items-center">
              <ErrorPage />
            </div>
        }
      </div>

      <div className="mt-12">
        {
          // loading ? <Spinner /> : 
          shopdata.length > 0 ?
          (<div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 px-2 gap-4 md: mx-auto py-8'>
              {
                shopdata.map((card) => (
                  <Card key = {card.id} card = {card} />
                ))
              }
            </div> ) :
            <div className="flex justify-center items-center">
               <ErrorPage />
            </div>
        }
      </div>

      <div className="flex justify-center gap-2 text-green-400 cursor-pointer font-semibold ">
        <a
          href="#imagesection"
          className="h-[30px] w-[30px] px-2 py-2 border border-slate-400	rounded-md "
        >
          <FaAngleDoubleLeft />
        </a>
        <a
          href="#imagesection"
          className=" h-[30px] w-[30px] px-3 py-1 border border-slate-400 rounded-md "
        >
          1
        </a>
        <a
          href="#imagesection"
          className="h-[30px] w-[30px] px-3 py-1 border border-slate-400 rounded-md "
        >
          2
        </a>
        <a
          href="#imagesection"
          className="h-[30px] w-[30px] px-3 py-1 border border-slate-400 rounded-md  "
        >
          3
        </a>
        <a
          href="#imagesection"
          className="h-[30px] w-[30px] px-2 py-2 border border-slate-400 rounded-md  "
        >
          <FaAngleDoubleRight />
        </a>
      </div>
    </div>
  );
};

export default Shop;
