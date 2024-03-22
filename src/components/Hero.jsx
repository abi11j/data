import React from 'react'
import { ReactTyped } from "react-typed";
import  Bgel  from './Elements/Bgel';
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function Hero() {
  const timeLine = gsap.timeline()
 

  useGSAP(()=>{
    timeLine.fromTo('.heroTitle',{
        x:0,
        y:-50,
        opacity:0,
    },
    {
        y:0,
        x:0,
        opacity:1,
        duration: 1,
        ease:'ease-out'
    })
}, []);

useGSAP(()=>{
  timeLine.fromTo('.preheroTitle',{
      x:0,
      y:-50,
      opacity:0,
      
  },
  {
      y:0,
      x:0,
      opacity:1,
      duration: 0.5,
      ease:'ease-out'
  })
}, []);

useGSAP(()=>{
  timeLine.fromTo('.dymText',{
      x:0,
      y:50,
      opacity:0,
  },
  {
      y:0,
      x:0,
      opacity:1,
      duration: 1,
      ease:'ease-out'
  })
}, []);

useGSAP(()=>{
  timeLine.fromTo('.subDymText',{
      x:0,
      y:50,
      opacity:0,
      delay: 1,
  },
  {
      y:0,
      x:0,
      opacity:1,
      duration: 1,
      ease:'ease-out'
  })
}, []);

useGSAP(()=>{
  timeLine.fromTo('.btnText',{
      x:0,
      y:50,
      opacity:0,
      delay: 1,
  },
  {
      y:0,
      x:0,
      opacity:1,
      duration: 0.5,
      ease:'ease-out'
  })
}, []);


  return (
    <div className='flex flex-col max-w-[1080px] mx-auto lg:px-0 px-4 mt-[130px] mb-[200px] relative'>
      <p className='preheroTitle text-[#00DF9A] font-bold md:text-[18px] text-[13px]  text-center'>GROWING WITH DATA ANALYTICS</p>
      <h1 className='heroTitle md:text-[64px] text-[35px] font-bold text-center leading-[120%]' >Grow with data.</h1>
      
      <div className='dymText md:text-[36px] text-[20px] font-bold justify-center flex flex-wrap'>
        <h2 className='mr-[10px] text-center'>Fast, flexible financing for:</h2>
        <p className='text-[#787878]'><ReactTyped
      strings={[
        "BTB",
        "SASS",
        "BTC",
      ]}
      typeSpeed={120}
      backSpeed={140}
      
      loop
    /></p>
      </div>
      <p className='subDymText md:text-[20px] text-[14px] font-bold text-center leading-[130%] text-[#787878] md:w-[55%] w-[90%] mx-auto'>Monitor your data analytics to increase revenue for BTB, BTC, & SASS platforms.</p>
      <div className='btnText flex justify-center my-5'>
      <button className='hover:scale-105 hover:bg-slate-100 duration-300 cursor-pointer bg-[#fafafa] text-[#2D2D2D] md:text-[16px] text-[14px]  font-semibold md:px-[20px] px-[10px] py-[10px]  rounded-md md:mr-5 mr-2'>Get Started</button>
      <button className='hover:scale-105 hover:bg-slate-100 hover:text-[#003000] duration-300 cursor-pointer border-[2px] border-[#fafafa] text-[#fafafa] md:text-[16px] text-[14px] font-semibold md:px-[20px] px-[10px] py-[10px] rounded-lg'>See More</button>
    </div>

    <Bgel />
      

    </div>
  )
}

export default Hero