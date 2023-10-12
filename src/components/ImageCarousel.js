import React, { useState } from 'react';
import {GrPrevious,GrNext} from 'react-icons/gr';

const ImageCarousel = ({ post }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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
      <div className="h-[180px]">
        <img src={post.images[currentImageIndex]} className="h-full w-full" alt={post.title} />
        <div className="top-0 right-0 left-0 flex justify-between -mt-16 -mx-4 ">
          <button onClick={previousImage} className=" text-2xl border-[1px] border-black py-1 m-1 rounded bg-gray-100">
          <GrPrevious />
          </button>
          <button onClick={nextImage} className=" text-2xl border-[1.5px] border-black py-1 m-1 rounded bg-gray-100">
           <GrNext />
          </button>
        </div>
      </div>
      <div className="flex overflow-x-auto">
        {post.images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`${post.title} - Image ${index + 1}`}
            className={`w-1/4 mx-1 my-2 cursor-pointer ${
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
