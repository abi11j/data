import React from 'react'

function CTA() {
  return (
    <div className='lg:flex grid max-w-[1080px] mx-auto lg:px-2 px-4 py-20 gap-5'>
        <div className='lg:w-[58%] w-full'>
            <h2 className='text-[35px] leading-[110%] font-bold mb-3'>
            Want tips & tricks to optimize your flow?
            </h2>
            <p className='text-[#787878] text-[20px] font-semibold'>Sign up to our newsletter and stay up to date.</p>
        </div>
        <div className='flex flex-col justify-center'>
            <div className='flex gap-2 mb-3 '>
                <input type="email" placeholder='Enter Email' className='px-2 py-2 w-full rounded-md' />
                <button className='hover:scale-105 duration-300 cursor-pointer bg-[#00DF9A] rounded-md px-4 w-[30%] text-[#003000] font-semibold'>Notify Me</button>
            </div>
            <p className='w-[75%] text-[#787878] font-medium leading-[120%]'>We care bout the protection of your data. Read our <span className='text-[#00DF9A] underline'>Privacy Policy.</span></p>
        </div>
    </div>
  )
}

export default CTA