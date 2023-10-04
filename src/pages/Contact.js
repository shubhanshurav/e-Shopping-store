import React from "react";

const Contact = () => {
  return (
    <div>
      <div
        className="bg-cover bg-no-repeat bg-center h-64 md:h-96 lg:h-120 scroll-smooth "
        style={{ backgroundImage: `url('/assets/banner/b2.jpg')` }}
      >
        <div className="flex flex-col text-center pt-32">
          <h1 className="font-bold text-4xl text-red-700">Reach Out to Us</h1>
          <p className="text-orange-600 text-2xl pt-5">
            We are only a step away from you
          </p>
        </div>
      </div>

      <div className="flex flex-row flex-wrap m-4">
        {/* Map */}
        <div className="bg-gray-300 p-3 flex-1 rounded-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3548.305258970253!2d77.9894667097838!3d27.209564247174697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39747766625cce3f%3A0x9eb5b271353779a9!2sInstitute%20of%20Engineering%20%26%20Technology%2C%20Khandari%2C%20Agra!5e0!3m2!1sen!2sin!4v1696408031855!5m2!1sen!2sin"
            // width="600"
            // height="450"
            allowfullscreen
            loading="lazy"
            className=" inset-0 w-full h-full border-4 border-gray-500 rounded-sm"
          ></iframe>
        </div>

        {/* Contact details */}
        <div className="bg-slate-100 p-5 flex-1 rounded-xl">
          <div className="font-bold text-2xl text-center p-3">
            <h1>Contact Us</h1>
          </div>
          <div className="flex flex-col text-center">
            <p className="p-3">
              <span className="font-bold">Address: </span>Thika town, Naltex
              building, 2nd floor
            </p>
            <a href="tel:+1 (234) 567-890" className="p-3">
              <span className="font-bold">Phone: </span>Call us at +1 (234)
              567-890
            </a>
            <p className="p-3">
              <span className="font-bold">Hours: </span>From 9 a.m To 5 p.m
            </p>
            <p className="p-5 text-start text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
              quos iusto rerum architecto a eaque consequuntur impedit! Harum
              earum iste, suscipit soluta, culpa necessitatibus quia sit nulla
              doloremque officia cum.Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Velit hic veniam unde numquam in ullam
              laudantium odit explicabo itaque! Voluptate similique, accusantium
              consequatur provident soluta quaerat maxime adipisci vero sed.
            </p>
          </div>
        </div>
      </div>

      {/* Contact form  */}
      <div className="bg-white py-8">
        <div className="max-w-4xl mx-auto bg-gray-200 border-2 border-gray-200 p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl text-green-500 font-semibold pb-8 text-center">Leave Us A Message</h2>
          <form>
            <div className="mb-4 flex flex-row">
              <div className="pr-44">
                  <label for="firstName" className="font-semibold block text-gray-600">
                  First name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    placeholder="First Name"
                    className="w-full border rounded px-3 py-3 focus:outline-none focus:border-blue-500"
                    required
                  />
              </div>

              <div>
                  <label for="lastName" className="block font-semibold text-gray-600">
                    Last name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    placeholder="Last Name"
                    className="w-full border rounded px-3 py-3 focus:outline-none focus:border-blue-500"
                    required
                  />
              </div>
            </div>

            <div className="mb-4">
              <label for="email" className="font-semibold block text-gray-600">
                Email address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email id"
                className="w-full border rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label for="message" className="font-semibold block text-gray-600">
              Write Your Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Type your message here...."
                className="w-full border rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                rows="6"
                required
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline-blue active:bg-blue-700"
              >
              Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
