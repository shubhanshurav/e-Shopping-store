import React from "react";

const Footer = () => {
  return (
    <div className=" bg-gray-100 ">

      <div className="grid lg:grid-cols-4 mg:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 border-b-2 border-t-2 border-gray-300 m-5">
        {/* contact  */}
        <div className="p-5">
          <div className="border-b-4 border-orange-600 w-24 pb-3">
            <h1 className="text-lg font-bold">Contact</h1>
          </div>
          <div className="pt-4">
            <p className="mb-6">
              <span className="font-bold">Address: </span>Thika town, Naltex
              building, 2nd floor
            </p>
            <p className="mb-6">
              <span className="font-bold">Phone:</span>{" "}
              <a href="tel:+91987654321" className="text-orange-400 font-bold">
                Call us at +91987654321
              </a>
            </p>
            <p className="mb-6">
              <span className="font-bold">Email:</span>{" "}
              <a
                href="mailto:abc123@gmail.com"
                className="text-blue-400 font-bold"
              >
                {" "}
                Email us at abc123@gmail.com
              </a>
            </p>
            <p className="mb-6">
              <span className="font-bold">Hours:</span> From 10 AM To 8 PM
            </p>
            <div className="mb-6">
              <p className="font-bold">Follow the developer</p>
            </div>
          </div>
        </div>

        {/* About  */}
        <div className="p-5">
          <div className="border-b-4 border-orange-600 w-24 pb-3">
            <h1 className="text-lg font-bold">About</h1>
          </div>
          <div className="flex flex-wrap flex-col pt-4 text-gray-700">
            <a href="/About" className="mb-7 hover:text-blue-800">
              About Us
            </a>
            <a href="/" className="mb-7 hover:text-blue-800">
              Delivery
            </a>
            <a href="/" className="mb-7 hover:text-blue-800">
              Privacy Policy
            </a>
            <a href="/" className="mb-7 hover:text-blue-800">
              Terms & Conditions
            </a>
            <a href="/" className="mb-7 hover:text-blue-800">
              Fee Policy
            </a>
          </div>
        </div>

        {/* Account  */}
        <div className="p-5">
          <div className="border-b-4 border-orange-600 w-24 pb-3">
            <h1 className="text-lg font-bold">Account</h1>
          </div>
          <div className="flex flex-wrap flex-col pt-4 text-gray-700">
            <a href="/Login" className="mb-7 hover:text-blue-800">
              Profile
            </a>
            <a href="/" className="mb-7 hover:text-blue-800">
              View Cart
            </a>
            <a href="/" className="mb-7 hover:text-blue-800">
              Help
            </a>
            <a href="/Checkout" className="mb-7 hover:text-blue-800">
              Payments
            </a>
            <a href="/Wishlist" className="mb-7 hover:text-blue-800">
              My Wishlist
            </a>
            <a href="/" className="mb-7 hover:text-blue-800">
              Coupons
            </a>
          </div>
        </div>

        {/* Install App */}
        <div className="p-5">
          <div className="border-b-4 border-orange-600 w-24 pb-3">
            <h1 className="text-lg font-bold">Install App</h1>
          </div>
          <div className="flex flex-wrap flex-col pt-4 font-medium">
            <p>Available On Google Play Services & App Store</p>
            <a href="/">
              <img
                src="/assets/pay/play.jpg"
                alt="PlayStoreLogo"
                className="w-56 border-2 border-green-600 rounded-2xl mb-3 mt-3 hover:-translate-y-1.5"
              />
            </a>
            <a href="/">
              <img
                src="/assets/pay/app.jpg"
                alt="AppStoreLogo"
                className="w-56 border-2 border-green-600 rounded-2xl mb-3 hover:-translate-y-1.5"
              />
            </a>
            <p>Payment Methods</p>
            <a href="/Checkout">
              <img
                src="/assets/pay/pay.png"
                alt="AppStoreLogo"
                className="w-64 border-2 border-green-600 rounded-2xl mt-3 p-4 hover:-translate-y-1.5"
              />
            </a>
          </div>
        </div>
      </div>

      <div className="flex justify-between h-10 m-6 tracking-tight">
        <div className="text-sm text-slate-600">
          <p>©Developed by Shubhanshu Rao & Saket Singh Developers 2023</p>
        </div>
        <div className="text-sm text-slate-600 cursor-pointer">
          <p>
            Privacy Policy <span className="p-1">Terms of Use</span>{" "}
            <span className="p-1">Contact Us</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
