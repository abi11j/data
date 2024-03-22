import {useState} from 'react'
import { navLinks } from '../content';
import { HiOutlineMenu } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

function Navbar() {
    const [toggle, setToggle] = useState(false);

  return (
    <div className='flex justify-between items-center max-w-[1080px] mx-auto h-[80px] lg:px-2 px-4'>
        <h1 className='text-[#00DF9A] text-[35px] font-bold select-none'>Logo.</h1>
        <ul className='gap-[15px] items-center md:flex hidden'>
            {navLinks.map((link, index) =>{
                return index == navLinks.length - 1 ? <li key={link.id} className='bg-[#fafafa] text-[#2D2D2D] font-semibold px-[20px] py-[10px] rounded-md hover:scale-105 duration-300 cursor-pointer'>{link.title}</li> : <li className='hover:scale-105 duration-200 cursor-pointer text-[#787878] hover:text-white' key={link.id}>{link.title}</li>
            })}
        </ul>

            <div className='md:hidden flex text-[35px]' onClick={()=>setToggle(!toggle)}>
                {toggle ? <AiOutlineClose /> : <HiOutlineMenu />}
            </div>

            <ul className={`fixed top-0 bg-[#00DF9A] opacity-[0.99] rounded-r-lg w-[50%] h-screen px-4 z-10 items-center md:hidden ease-out duration-200 ${toggle ? "flex-col left-0" : "left-[-100%]"}`}>
            <div className='h-[80px] flex items-center select-none'>
            <h1 className='text-[#003000] text-[35px] font-bold'>Logo.</h1>
            </div>
            {navLinks.map((link, index) =>{
                return index == navLinks.length - 1 ? <li key={link.id} className='bg-[#fafafa] text-[#2D2D2D] font-semibold px-[20px] py-[10px] rounded-md text-center'>{link.title}</li> : <li key={link.id} className='text-[#000000] my-[15px] border-b-2 border-[#1f8d6a] font-semibold py-2'>{link.title}</li>
            })}
        </ul>

    </div>
  )
}

export default Navbar