import React from 'react';

const Footer = () => {
  return (
    <div className='flex flex-row'>
        {/* contact  */}
        <div className='p-5'>
            <div className='border-b-4 border-orange-600 w-24 pb-3'>
                <h1 className='text-2xl'>Contact</h1>
            </div>
            <div className='pt-4'>
                <p className='mb-6'><span className='font-bold'>Address: </span>Thika town, Naltex building, 2nd floor</p>
                <p className='mb-6'><span className='font-bold'>Phone:</span> Call us at +1 (234) 567-890</p>
                <p className='mb-6'><span className='font-bold'>Hours:</span> From 8 a.m To 6 p.m</p>
                <div className='mb-6'>
                    <p>Follow the developer</p>
                </div>
            </div>
        </div>

        {/* About  */}
        <div className='p-5'>
            <div className='border-b-4 border-orange-600 w-24 pb-3'>
                <h1>About</h1>
            </div>
            <div className='flex flex-wrap flex-col pt-4'>
                <a href='/About' className='mb-7'>About Us</a>
                <a href='/' className='mb-7'>Delivery</a>
                <a href='/' className='mb-7'>Privacy Policy</a>
                <a href='/' className='mb-7'>Terms & Conditions</a>
                <a href='/' className='mb-7'>Fee Policy</a>
            </div>
        </div>

        {/* Account  */}
        <div className='p-5'>
            <div className='border-b-4 border-orange-600 w-24 pb-3'>
                <h1>Account</h1>
            </div>
            <div className='flex flex-wrap flex-col  pt-4'>
                <a href='/About' className='mb-7'>Profile</a>
                <a href='/' className='mb-7'>View Cart</a>
                <a href='/' className='mb-7'>Help</a>
                <a href='/' className='mb-7'>Payments</a>
                <a href='/' className='mb-7'>My Wishlist</a>
                <a href='/' className='mb-7'>Coupons</a>
            </div>
        </div>

        {/* Install App */}
        <div className='p-5'>
            <div className='border-b-4 border-orange-600 w-24 pb-3'>
                <h1>Install App</h1>
            </div>
            <div className='flex flex-wrap flex-col  pt-4'>
                <p>Available On Google Play Services & App Store</p>
                <img src='/assets/pay/play.jpg' alt='PlayStoreLogo' className='w-56 border-2 border-green-600 rounded-2xl mb-3 mt-3' />
                <img src='/assets/pay/app.jpg' alt='AppStoreLogo' className='w-56 border-2 border-green-600 rounded-2xl mb-3' />
                <p>Payment Methods</p>
                <img src='/assets/pay/pay.png' alt='AppStoreLogo' className='w-64 border-2 border-green-600 rounded-2xl mt-3 p-4' />
            </div>
        </div>
    </div>
  )
}

export default Footer;