import React from 'react'


function Card({idd, img, title, price, ft, st, tt}) {
  return (
        <div key={idd} className={`w-full ${idd == 1 ? "bg-gray-100 scale-105 hover:scale-110 shadow-2xl" : "hover:scale-105 shadow-xl"} lg:mb-0 mb-20 flex flex-col p-4 my-4 rounded-lg duration-300`}>
        <img className='w-20 bg-transparent mx-auto mt-[-3rem] bg-white' src={img} alt="/" />
        <h2 className='text-2xl font-bold text-center py-8'>{title}</h2>
        <p className='text-center text-4xl font-bold'>{price}</p>
        <div className='text-center font-medium'>
            <p className='py-2 border-b mx-8 mt-8'>{ft}</p>
            <p className='py-2 border-b mx-8'>{st}</p>
            <p className='py-2 border-b mx-8'>{tt}</p>
        </div>
        <button className={`${idd == 1 ? "bg-[#000300] text-[#fafafa]" : "bg-[#00df9a]" } hover:scale-105 duration-300  w-[200px] rounded-md font-semibold my-6 mx-auto px-6 py-3`}>Start Trial</button>
    </div>
  )
}

export default Card