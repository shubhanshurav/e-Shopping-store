import React from 'react'

const CardCustomer = ({image,name,description}) => {

  return (
    <div className='flex  w-[40%]  border border-slate-300 m-8 rounded-md p-1 bg-slate-300' >
      <img src={image} alt="" loading='lazy' className='w-[200px] rounded-md' />

    <div className='m-3'>  
        <p className='text-black font-semibold'>{name}</p>
        <p className=' text-slate-600 '>{description}</p>
    </div>

    </div>
  )
}

export default CardCustomer