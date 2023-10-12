import React from 'react';

const Footer = () => {
  return (
    <div className='bg bg-gray-100 '>
  
<div className='flex  flex-col justify-center items-center m-10 py-10  '>

<div className='flex gap-10'>
<div className=' border-2 p-3 rounded-xl bg-slate-100 '>   
      <img src="/assets/Saketimg.jpeg" alt="deve" className='w-[280px] h-[300px] object-cover rounded-xl Creators'/>
      <p className='flex justify-center text-[25px] text-rose-950 font-semibold uppercase m-3'>Saket Singh</p>
    <div className='flex justify-center gap-6 m-2  '>    
      <a href="https://www.linkedin.com/in/saket-singh-810824240"><img src="/assets/linkedin-img.png" alt="Linkedin" className='w-[40px]'/></a>
      <a href="https://github.com/SAKETSINGH120"><img src="/assets/Github-img.png" alt="Github" className='w-[40px] '/></a>
    </div>
</div>
<div className=' border-2 p-3 rounded-xl bg-slate-100'>   
      <img src="/assets/shubhanshuimg.jpg" alt="deve" className='w-[280px] h-[300px] object-cover rounded-xl Creators'/>
      <p className='flex justify-center text-[25px] text-rose-950 font-semibold uppercase m-3'>Shubhanshu Rav </p>
    <div className='flex justify-center gap-6 m-2  '>    
      <a href="https://www.linkedin.com/in/shubhanshu-rao-052320208/"><img src="/assets/linkedin-img.png" alt="Linkedin" className='w-[40px]'/></a>
      <a href="https://github.com/shubhanshurav"><img src="/assets/Github-img.png" alt="Github" className='w-[40px] '/></a>
    </div>
</div>

</div>

<div className=''>  
     <p className=' text-[40px] text-red-700    font-semibold uppercase mt-5' >Creators</p>
</div>

</div>



        <div className='grid lg:grid-cols-4 mg:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 border-b-2 border-t-2 border-gray-300 m-5'>
            {/* contact  */}
            <div className='p-5'>
                <div className='border-b-4 border-orange-600 w-24 pb-3'>
                    <h1 className='text-lg font-bold'>Contact</h1>
                </div>
                <div className='pt-4'>
                    <p className='mb-6'><span className='font-bold'>Address: </span>Thika town, Naltex building, 2nd floor</p>
                    <p className='mb-6'><span className='font-bold'>Phone:</span> <a href="tel:+91987654321" className='text-orange-400 font-bold'>Call us at +91987654321</a></p>
                    <p className='mb-6'><span className='font-bold'>Email:</span> <a href="mailto:abc123@gmail.com" className='text-blue-400 font-bold'> Email us at abc123@gmail.com</a></p>
                    <p className='mb-6'><span className='font-bold'>Hours:</span> From 10 AM To 8 PM</p>
                    <div className='mb-6'>
                        <p className='font-bold'>Follow the developer</p>
                    </div>
                </div>
            </div>

            {/* About  */}
            <div className='p-5'>
                <div className='border-b-4 border-orange-600 w-24 pb-3'>
                    <h1 className='text-lg font-bold'>About</h1>
                </div>
                <div className='flex flex-wrap flex-col pt-4 text-gray-700'>
                    <a href='/About' className='mb-7 hover:text-blue-800'>About Us</a>
                    <a href='/' className='mb-7 hover:text-blue-800'>Delivery</a>
                    <a href='/' className='mb-7 hover:text-blue-800'>Privacy Policy</a>
                    <a href='/' className='mb-7 hover:text-blue-800'>Terms & Conditions</a>
                    <a href='/' className='mb-7 hover:text-blue-800'>Fee Policy</a>
                </div>
            </div>

            {/* Account  */}
            <div className='p-5'>
                <div className='border-b-4 border-orange-600 w-24 pb-3'>
                    <h1 className='text-lg font-bold'>Account</h1>
                </div>
                <div className='flex flex-wrap flex-col pt-4 text-gray-700'>
                    <a href='/About' className='mb-7 hover:text-blue-800'>Profile</a>
                    <a href='/' className='mb-7 hover:text-blue-800'>View Cart</a>
                    <a href='/' className='mb-7 hover:text-blue-800'>Help</a>
                    <a href='/' className='mb-7 hover:text-blue-800'>Payments</a>
                    <a href='/' className='mb-7 hover:text-blue-800'>My Wishlist</a>
                    <a href='/' className='mb-7 hover:text-blue-800'>Coupons</a>
                </div>
            </div>

            {/* Install App */}
            <div className='p-5'>
                <div className='border-b-4 border-orange-600 w-24 pb-3'>
                    <h1 className='text-lg font-bold'>Install App</h1>
                </div>
                <div className='flex flex-wrap flex-col pt-4 font-medium'>
                    <p>Available On Google Play Services & App Store</p>
                    <a href='/' ><img src='/assets/pay/play.jpg' alt='PlayStoreLogo' className='w-56 border-2 border-green-600 rounded-2xl mb-3 mt-3 hover:-translate-y-1.5' /></a>
                    <a href='/' ><img src='/assets/pay/app.jpg' alt='AppStoreLogo' className='w-56 border-2 border-green-600 rounded-2xl mb-3 hover:-translate-y-1.5' /></a>
                    <p>Payment Methods</p>
                    <a href='/' ><img src='/assets/pay/pay.png' alt='AppStoreLogo' className='w-64 border-2 border-green-600 rounded-2xl mt-3 p-4 hover:-translate-y-1.5' /></a>
                </div>
            </div>
        </div>

        <div className='flex justify-between h-10 m-6 tracking-tight'>
            <div className='text-sm text-slate-600'>
                <p>©Developed by Shubhanshu Rao & Saket Singh Developers 2023</p>
            </div>
            <div className='text-sm text-slate-600 cursor-pointer'>
                <p>Privacy Policy <span className='p-1'>Terms of Use</span> <span  className='p-1'>Contact Us</span></p>
            </div>
        </div>
    </div>
  )
}

export default Footer;