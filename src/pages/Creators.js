import React from 'react';
import {MdVerified} from 'react-icons/md';

const Creators = () => {
  return (
    <div className='bg-gray-100'>
      <div className="flex flex-col items-center m-auto py-10  ">
        <div className="my-10 border-b-4 border-red-700">
          <p className=" text-red-700 font-light text-4xl uppercase py-2">
            Creators
          </p>
        </div>

        <div className="grid grid-cols-2 w-fit md:w-[50%] m-auto gap-2 md:gap-10 px-2">
          <div className="border-2 border-gray-300 rounded-sm m-auto bg-slate-100 px-6 py-6 shadow-2xl">
            <img
              src="/assets/Saketimg.jpeg"
              alt="deve"
              className="object-cover rounded-full border-4 border-blue-700 Creators p-1"
            />
            <p className="flex justify-center items-center text-rose-950 font-chakra-petch uppercase m-auto py-3">
            <MdVerified className='text-blue-700'/> <span className='pl-1 font-bold text-[14px] md:text-[17px]'>Saket Singh </span> 
            </p>
            <p className='text-center text-gray-800 font-bold text-[13px] md:text-[15px]'>MERN Developer</p>
            <div className="flex justify-center gap-6 m-2 items-center">
              <a href="https://www.linkedin.com/in/saket-singh-810824240">
                <img
                  src="/assets/linkedin-img.png"
                  alt="Linkedin"
                  className="w-[40px]"
                />
              </a>
              <a href="https://github.com/SAKETSINGH120">
                <img
                  src="/assets/GitHub-img.png"
                  alt="Github"
                  className="w-[52px] "
                />
              </a>
            </div>
          </div>
          <div className="border-2 border-gray-300 rounded-sm m-auto bg-slate-100 px-6 py-6 shadow-2xl">
            <img
              src="/assets/shubhanshuimg.jpg"
              alt="deve"
              className="object-cover rounded-full border-4 border-blue-700 Creators p-1"
            />
            <p className="flex justify-center items-center text-rose-950 font-chakra-petch uppercase m-auto py-3" >
              <MdVerified className='text-blue-700 ' /> <span className='pl-1 text-[14px] font-bold md:text-[17px]'>Shubhanshu Rao</span> 
            </p>
            <p className='text-center text-gray-800 font-bold text-[13px] md:text-[15px]'>MERN Developer</p>
            <div className="flex justify-center gap-6 m-2 items-center">
              <a href="https://www.linkedin.com/in/shubhanshu-rao-052320208/">
                <img
                  src="/assets/linkedin-img.png"
                  alt="Linkedin"
                  className="w-[40px]"
                />
              </a>
              <a href="https://github.com/shubhanshurav">
                <img
                  src="/assets/GitHub-img.png"
                  alt="Github"
                  className="w-[52px]"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Creators;
