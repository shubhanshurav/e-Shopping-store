import React from 'react';

const Creators = () => {
  return (
    <div className='bg-gray-100'>
      <div className="flex flex-col items-center m-auto py-10  ">
        <div className="my-10 border-b-4 border-red-700">
          <p className=" text-red-700 font-light text-4xl uppercase py-2">
            Creators
          </p>
        </div>

        <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 w-[70%] m-auto gap-10">
          <div className="border-2 border-gray-300 p-3 rounded-xl m-auto bg-slate-100  px-10 py-10">
            <img
              src="/assets/Saketimg.jpeg"
              alt="deve"
              className="object-cover rounded-full border-4 border-blue-700 Creators p-1"
            />
            <p className="flex justify-center text-[23px] text-rose-950 font-semibold font-chakra-petch uppercase m-auto py-3">
              Saket Singh
            </p>
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
          <div className="border-2 border-gray-300 p-3 rounded-xl m-auto bg-slate-100 px-6 py-6">
            <img
              src="/assets/shubhanshuimg.jpg"
              alt="deve"
              className="object-cover rounded-full border-4 border-blue-700 Creators p-1"
            />
            <p className="flex justify-center text-[23px] text-rose-950 font-semibold font-chakra-petch uppercase m-auto py-3" >
              Shubhanshu Rao{" "}
            </p>
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