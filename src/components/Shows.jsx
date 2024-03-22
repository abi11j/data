import React from 'react'
import { laptop } from '../assets'





function Shows() {
  return (
    <div className='anPlc bg-white py-12'>
    <div className='lg:flex grid max-w-[1080px] mx-auto lg:px-2 px-4'>
        <img className='imgAn w-[500px] lg:mx-0 mx-auto' src={laptop} alt="" />
        <div className='flex flex-col justify-center lg:mx-0 mx-auto lg:w-full w-[85%] lg:mt-0 mt-5 lg:text-start text-center'>
        <p className='text-[#00DF9A] font-bold md:text-[15px] text-[13px] '>DATA ANALYTICS DASHBOARD</p>
        <h1 className='md:text-[54px] text-[#003000] text-[35px] font-bold  leading-[110%] pb-3' >Manage Data Analytics Centrally</h1>
        <p className='text-[#787878] md:text-[16px] text-[13px] font-semibold'> 
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            molestiae delectus culpa hic assumenda, voluptate reprehenderit
            dolore autem cum ullam sed odit perspiciatis. Doloribus quos velit,
            eveniet ex deserunt fuga?
        </p>
            <button className='hover:scale-105 duration-300 cursor-pointer text-[#fafafa] bg-[#2D2D2D] md:text-[16px] text-[14px]  font-semibold md:px-[20px] px-[20px] py-[10px] lg:mx-0 mx-auto rounded-md mt-4 w-fit'>Get Started</button>
 
        </div>
    </div>
    </div>
  )
}

export default Shows