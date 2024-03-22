import React from 'react';
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function Bgel() {

    useGSAP(()=>{
        gsap.fromTo('.bgEl',{
            x:130,
            y:-100,
            rotation:0,
        },
        {
            scale:1.4,
            yoyo:true,
            y:-50,
            x:185,
            rotation:35,
            repeat:-1,
            duration: 4.5,
            ease:'ease-in-out'
        })
    }, []);

    useGSAP(()=>{
        gsap.fromTo('.bg1El',{
            x:-60,
            y:10,
            rotation:0,
        },
        {
            scale:1.3,
            yoyo:true,
            y:-50,
            x:-155,
            rotation:155,
            repeat:-1,
            duration: 5.5,
            ease:'ease-in-out'
        })
    }, []);

    useGSAP(()=>{
        gsap.fromTo('.bg2El',{
            x:-250,
            y:50,
            rotation:0,
        },
        {
            scale:1.1,
            yoyo:true,
            y:-50,
            x:-155,
            rotation:130,
            repeat:-1,
            duration: 7.5,
            ease:'ease-in-out'
        })
    }, []);

    useGSAP(()=>{
        gsap.fromTo('.bg3El',{
            x:50,
            y:60,
            rotation:0,
        },
        {
            scale:1.3,
            yoyo:true,
            y:-50,
            x:55,
            rotation:130,
            repeat:-1,
            duration: 5,
            ease:'ease-in-out'
        })
    }, []);


  return (
    <>
    <div className="bgEl sm:flex hidden z-[-1] bg-[#00300] absolute top-0  left-0  h-3 w-2 p-20">
        <div className="mx-auto h-0 w-0 border-r-[15px] border-b-[25px] 
            border-l-[15px] border-solid border-r-transparent
            border-l-transparent border-b-[#00DF9A] blur-sm">
        </div>
    </div>
    <div className="bg1El sm:flex hidden z-[-1] bg-[#00300] absolute top-0 right-0  h-3 w-2 p-20">
        <div className="mx-auto h-0 w-0 border-r-[15px] border-b-[25px] 
            border-l-[15px] border-solid border-r-transparent
            border-l-transparent border-b-[#00DF9A] blur-sm">
        </div>
    </div>
    <div className="bg2El sm:flex hidden z-[-1] bg-[#00300] absolute bottom-0 right-0  h-3 w-2 p-20">
        <div className="mx-auto h-0 w-0 border-r-[15px] border-b-[25px] 
            border-l-[15px] border-solid border-r-transparent
            border-l-transparent border-b-[#00DF9A] blur-sm">
        </div>
    </div>
    <div className="bg3El sm:flex hidden z-[-1] bg-[#00300] absolute bottom-0 left-0 h-3 w-2 p-20">
        <div className="mx-auto h-0 w-0 border-r-[15px] border-b-[25px] 
            border-l-[15px] border-solid border-r-transparent
            border-l-transparent border-b-[#00DF9A] blur-sm">
        </div>
    </div>
    </>
  )
}

export default Bgel