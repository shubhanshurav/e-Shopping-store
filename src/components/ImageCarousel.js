import React, { useState } from 'react';
import {GrPrevious,GrNext} from 'react-icons/gr';
import { useNavigate } from 'react-router-dom';

const ImageCarousel = ({ post }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const navigate = useNavigate();

  const handleImageClick = (index) => {
    setCurrentImageIndex(index);
  };

  const nextImage = () => {
    setCurrentImageIndex((currentImageIndex + 1) % post.images.length);
  };

  const previousImage = () => {
    setCurrentImageIndex(
      currentImageIndex === 0 ? post.images.length - 1 : currentImageIndex - 1
    );
  };


  return (
    <div>
      <div className="h-[120px] md:h-[180px]">
        <img src={post.images[currentImageIndex]} className="h-40 w-full object-contain" alt={post.title} onClick={()=>navigate("/Shop/productDetails/" + post.id)}/>
        <div className="top-0 right-0 left-0 flex justify-between -mt-16 -mx-4 ">
          <button onClick={previousImage} className=" text-2xl border-[1px] border-black py-1 m-1 rounded bg-richblack-100">
          <GrPrevious className='text-white'/>
          </button>
          <button onClick={nextImage} className=" text-2xl border-[1.5px] border-black py-1 m-1 rounded bg-richblack-100">
           <GrNext className='text-white'/>
          </button>
        </div>
      </div>
      <div className="flex overflow-x-auto">
        {post.images.map((image, index) => (
          <img
            key={index}
            src={image}
            // alt={`${post.title} - Image ${index + 1}`}
            alt={`${post.title} -  ${index + 1}`}
            className={`w-[25%] mx-1 my-2 cursor-pointer ${
              index === currentImageIndex ? 'border border-blue-500' : ''
            }`}
            onClick={() => handleImageClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
