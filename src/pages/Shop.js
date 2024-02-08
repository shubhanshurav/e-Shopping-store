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

  const [searchTerm, setSearchTerm] = useState('');
  const [filteredItems, setFilteredItems] = useState([]);

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);

    const filtered = posts.filter((post) =>
      post.title.toLowerCase().includes(term)
    );
    setFilteredItems(filtered);
  };


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
    <div className="overflow-hidden font-chakra-petch bg-richblack-25 ">
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

    {/* Search functionality */}
     <div className="">
        <div className='flex flex-row m-auto rounded-md text-center w-[50%] my-5'>
                  <input
                    type="text"
                    placeholder="Find Product here..."
                    className="w-[70%] p-1 px-4 font-semibold h-10 font-chakra-petch text-black rounded-l-md"
                    value={searchTerm}
                    onChange={handleSearch}
                  />
                  <button className='p-1 w-[30%] h-10 rounded-r-md text-black font-bold bg-[orange]'>
                    search
                  </button>
          </div>

            {/* Display filtered items */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {filteredItems.map((post) => (
                <Product key={post.id} post = {post} />
              ))}
            </div>
     </div>

 
      <div className="py-6 md:py-14 px-4">
        {
          loading ? <Spinner /> : 
          posts.length > 0 ?
          (<div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-2 m-auto py-12 px-4 md:px-1'>
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
          (<div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-2 mx-auto py-8 px-4 md:px-1'>
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
