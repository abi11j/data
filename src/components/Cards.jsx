import React from 'react'
import Card from './Elements/Card' 
import { cardData } from '../content'

function Cards() {
  return (
    <div className='bg-white w-full text-[#003000]'>
    <div className='max-w-[1080px] mx-auto lg:px-0 px-10 py-20'>
        <div className='flex lg:flex-row flex-col lg:gap-8 gap-2 my-20'>
        {cardData.map((item, index)=>{ return(
            <Card key={item.id} idd={index} img={item.img} title={item.title} price={item.price} ft={item.ft} st={item.st} tt={item.tr}/>
            )
          })}
        </div>
    </div>
    </div>
  )
}

export default Cards