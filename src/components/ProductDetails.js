import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ImageCarousel from "./ImageCarousel";
import { AiOutlineHeart, AiTwotoneHeart } from "react-icons/ai";
import { addWish, removeWish } from "../redux/Slices/WishSlice";
import { add, remove } from "../redux/Slices/CartSlice";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import StarRating from "./StarRating";
import { GrNext, GrPrevious } from "react-icons/gr";

const ProductDetails = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [productDetails, setProductDetails] = useState(null);
  const { cart, wish } = useSelector((state) => state);
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/products/${id}`);
        const data = await response.json();
        setProductDetails(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    };

    fetchData();
  }, [id]);

  if (!productDetails) {
    return <div>Loading...</div>;
  }

  const handleImageClick = (index) => {
    setCurrentImageIndex(index);
  };

  const nextImage = () => {
    setCurrentImageIndex(
      (currentImageIndex + 1) % productDetails.images.length
    );
  };

  const previousImage = () => {
    setCurrentImageIndex(
      currentImageIndex === 0
        ? productDetails.images.length - 1
        : currentImageIndex - 1
    );
  };

  const addToWishList = () => {
    dispatch(addWish(productDetails));
    toast.success("Item added to Wishlist");
  };

  const removeFromWishList = () => {
    dispatch(removeWish(productDetails.id));
    toast.error("Item removed from Wishlist");
  };

  const addToCart = () => {
    dispatch(add(productDetails));
    toast.success("Item added to Cart");
  };

  const removeFromCart = () => {
    dispatch(remove(productDetails.id));
    toast.error("Item removed from Cart");
  };

  return (
    <div className="flex flex-col-reverse md:flex-row justify-between px-5 md:px-10 py-8 md:py-20 border m-6 md:m-10 shadow-2xl">
      <div className="pr-8">
        <div className="flex pb-2">
          <div className="text-gray-700 font-semibold text-xl text-left truncate w-full py-1 uppercase">
            <p>{productDetails.title}</p>
          </div>
          <div>
            {wish.some((p) => p.id === productDetails.id) ? (
              <button
                onClick={removeFromWishList}
                className="text-gray-700 rounded-full font-semibold text-[12px] p-1 px-1 uppercase
              transition duration-300 ease-in"
              >
                <AiTwotoneHeart className="text-2xl text-red-700" />
              </button>
            ) : (
              <button
                onClick={addToWishList}
                className="text-gray-700 rounded-full font-semibold text-[12px] p-1 px-1 uppercase
              transition duration-300 ease-in"
              >
                <AiOutlineHeart className="text-2xl text-red-700"/>
              </button>
            )}
          </div>
        </div>
        <div className="flex justify-between items-center py-2">
          <p className="text-lg md:text-xl font-bold py-2">{productDetails.brand}</p>
          <p className="text-lg font-medium uppercase py-2">
            {productDetails.category}
          </p>
        </div>
        <div>
          {productDetails.description ? (
            <p className="w-full text-gray-600 font-normal text-lg text-left">
              {productDetails.description}
            </p>
          ) : null}
        </div>
        <div className="text-sm">
          <div className="flex justify-between">
            <p className="font-semibold text-lg py-2">Stock: </p>
            <p className="text-blue-700 font-semibold py-2">{productDetails.stock}</p>
          </div>
        </div>
        <div className="text-sm ">
          <div className="flex justify-between">
            <p className="font-semibold text-lg py-2">Ratings: </p>
            <p className="font-semibold text-lg py-2">⭐⭐⭐⭐⭐ </p>
            {/* <StarRating rating={productDetails.rating} />  */}
          </div>
        </div>
        <div className="flex justify-between items-center w-full mt-2">
          <div>
            <p className="text-blue-700 text-lg font-bold m-auto">
              ${productDetails.price}
            </p>
          </div>
          {cart.some((p) => p.id === productDetails.id) ? (
            <button
              onClick={removeFromCart}
              className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[15px] p-1 px-3 uppercase
            hover:bg-gray-700 hover:text-white
            transition duration-300 ease-in"
            >
              Remove Item
            </button>
          ) : (
            <button
              onClick={addToCart}
              className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[15px] p-1 px-3 uppercase
            hover.bg-gray-700 hover.text-white
            transition duration-300 ease-in"
            >
              Add to Cart
            </button>
          )}
        </div>
      </div>
      <div className="w-full md:w-[50%] px-6 py-4 md:py-0">
        <div className="h-full md:h-[200px]">
          <img
            src={productDetails.images[currentImageIndex]}
            className="h-full w-full"
            alt={productDetails.title}
          />
          <div className="top-0 right-0 left-0 flex justify-between -mt-16 -mx-4 ">
            <button
              onClick={previousImage}
              className=" text-2xl border-[1px] border-black py-1 m-1 rounded bg-gray-100"
            >
              <GrPrevious />
            </button>
            <button
              onClick={nextImage}
              className=" text-2xl border-[1.5px] border-black py-1 m-1 rounded bg-gray-100"
            >
              <GrNext />
            </button>
          </div>
        </div>
        <div className="flex overflow-x-auto">
          {productDetails.images.map((image, index) => (
            <img
              key={index}
              src={image}
              // alt={`${productDetails.title} - Image ${index + 1}`}
              alt={`${productDetails.title} - ${index + 1}`}
              className={`w-1/4 mx-1 my-2 cursor-pointer ${
                index === currentImageIndex ? "border border-blue-500" : ""
              }`}
              onClick={() => handleImageClick(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
