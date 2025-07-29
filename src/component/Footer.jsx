import React from 'react'
import { IoArrowUp } from "react-icons/io5";
import { Link } from 'react-scroll';
const Footer = () => {
  return (
    <div className=' ml-3 mb-14 md:mb-17 mt-2 md:mt-20 flex  xl:gap-10 gap-3  '>
        {/* left */}
        <div  data-aos="fade-up"  data-aos-offset="100" className='xl:w-[55%] mt-12 w-[60%]'>
            {/* first div */}
            <div className=' w-[100%] gap-1 flex md:gap-12 items-center '>
                <p className='text-gray-200 max-md:tracking-wide text-[4px] md:text-[15px] hover:scale-[1.04] p-1 px-2 hover:text-gray-300 rounded-full hover:bg-dark-hover cursor-pointer  '>Events</p>
                <p className='text-gray-200 max-md:tracking-wide text-[4px] md:text-[15px] hover:scale-[1.04] p-1 px-2 hover:text-gray-300 rounded-full hover:bg-dark-hover cursor-pointer  '>Gen AI</p>
                <p className='text-gray-200 max-md:tracking-wide text-[4px] md:text-[15px] hover:scale-[1.04] p-1 px-2 hover:text-gray-300 rounded-full hover:bg-dark-hover cursor-pointer '>Carrers</p>
                <p className='text-gray-200 max-md:tracking-wide text-[4px] md:text-[15px] p-1 px-2 hover:text-gray-300 rounded-full hover:bg-dark-hover cursor-pointer '>Case Study</p>
                <p className='text-gray-200 max-md:tracking-wide text-[4px] md:text-[15px] hover:scale-[1.04] p-1 px-2 hover:text-gray-300 rounded-full hover:bg-dark-hover cursor-pointer '>SME Talks</p>
            </div>
            <div className=' mt-12 md:mt-43 pr-17 xl:pr-47  p-1'>
                
                <p className='text-[8px] md:text-3xl font-sans font-light tracking-wider text-white leading-tight'>For any collaborative projects or enquires feel free to connect with us.</p>
                <p className='text-[8px] md:text-3xl mt-2 md:mt-6 font-sans  tracking-wider text-white'>vayuz.com</p>
            </div>
            <div className='tracking-widest cursor-pointer text-gray-400 text-[4px] md:text-sm mt-14 md:mt-43 flex  gap-1 md:gap-11 items-center'>
                <p className='hover:scale-[1.01] p-1 px-2 rounded-full hover:bg-dark-hover cursor-pointer '>About</p>
                <p className='hover:scale-[1.01] p-1 px-2  rounded-full hover:bg-dark-hover cursor-pointer '>Insights</p>
                <p className='hover:scale-[1.01] p-1 px-2  rounded-full hover:bg-dark-hover cursor-pointer '>Community</p>
                <p className='hover:scale-[1.01] p-1 px-2  rounded-full hover:bg-dark-hover cursor-pointer '>Privacy & Policy</p>

            </div>

        </div>
        {/* righjt */}
        {/* can use onchange and state to get value from form */}
        <div  data-aos="fade-right"  data-aos-offset="100" className='lg:w-[35%] m-2 md:m-5 w-[35%] flex flex-col '>
            <p className='text-white text-3xl md:text-7xl max-md:leading-[17px] font-normal  pl-5 md:pl-20 font-playfair max-md:tracking-[2px] tracking-wider  transform scale-y-120 scale-x-110 animate-pulse origin-top '>Connect With Us</p>
        {/* form */}
        <div  name="contact" className=' md:mt-23 mt-7 mx-1 md:mx-21'>
            <div className='relative w-50  md:w-75'>
                <label className="max-md:absolute bottom-4  text-gray-400/90 text-[4px] md:text-[14px]  tracking-wider" htmlFor='name'> Full Name</label>
            <input  id="name" className="text-gray-300 px-0 md:px-2 max-md:text-[4px] font-playfair tracking-widest peer md:h-5 h-5 focus:drop-shadow-sm focus:drop-shadow-cyan-100 w-[85%] md:w-[100%] border-b-[0.2px] md:border-b-2 border-b-gray-300 outline-0 border-0 "  name="name"  type="text" ></input>
            <span className="absolute bottom-0 left-0 w-0 md:h-[2.8px] h-[1.5px] bg-cyan-600/80  transition-all duration-500 peer-focus:w-full"></span></div>
            
            {/* margin from above */}
            <div className='relative md:mt-3 mt-2 w-50 md:w-75'>
                <label className="max-md:absolute bottom-4   text-gray-400/90 text-[4px] md:text-[14px]  tracking-wider" htmlFor='email'> Email</label>
            <input  id="email" className="text-gray-300 px-0 md:px-2 peer max-md:text-[4px] font-playfair tracking-widest  focus:drop-shadow-sm focus:drop-shadow-cyan-100 md:h-5 h-5 w-[85%] md:w-[100%] border-b-[0.2px] md:border-b-2 border-b-gray-300 outline-0 border-0 " name="name"  type="email" ></input>
            <span className="absolute bottom-0 left-0 w-0  md:h-[2.8px] h-[1.5px] bg-cyan-600/80  transition-all duration-500 peer-focus:w-full"></span></div>
            
            
            <div className=' relative md:mt-3 mt-2 w-50 md:w-75'>
                <label className="max-md:absolute bottom-4  text-gray-400/90 text-[4px] md:text-[14px] tracking-wider" htmlFor='number'> Phone Number</label>
            <input  id="number" className=" peer text-gray-300 max-md:text-[4px] font-playfair tracking-widest  focus:drop-shadow-sm focus:drop-shadow-cyan-100 md:h-5 h-5 w-[85%] md:w-[100%] border-b-[0.2px] md:border-b-2 border-b-gray-300 outline-0 border-0 bg-transparent px-0 md:px-2" name="name"  type="phone" ></input>
            <span className="absolute bottom-0 left-0 w-0  md:h-[2.8px] h-[1.5px] bg-cyan-600/80  transition-all duration-500 peer-focus:w-full"></span></div>
        </div>
        {/* sunmit */}
        <div className='md:mt-6 mt-3 ml-28 md:ml-70'>
            <button type="button " className=' border-[0.3px] md:border-1 md:px-6 px-3 font-semibold font-sans tracking-wide bg-cyan-700/40  text-[4px] md:text-[12px] cursor-pointer text-gray-100  py-1 md:py-[10px] rounded-full hover:scale-[1.05] hover:drop-shadow-md hover:drop-shadow-cyan-200 hover:border-cyan-100  hover:bg-cyan-700/60 border-cyan-500 '>SUBMIT</button>
        </div>
        
        <div className=' cursor-pointer group hover:scale-[1.01] flex items-center justify-center h-6 w-6 md:h-15 md:w-15  rounded-full bg-dark-hover/20 hover:bg-dark-hover cursor-pointer p-1 ml-35 md:ml-82 md:mt-25 mt-7  text-gray-400'><Link to="header" smooth={true} 
  duration={900}><IoArrowUp className=' text-3xl' /></Link>
  {/* tooltip */}
   <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-black/50 text-gray-400 md:text-xs text-[3px] rounded-md md:px-2 px-1 py-1 md:py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
    Go back to top
  </div></div>
        </div>
       

    </div>
  )
}

export default Footer