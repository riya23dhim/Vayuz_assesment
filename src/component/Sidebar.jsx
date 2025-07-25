
import React from 'react'
import {NavLink} from 'react-router-dom';
import { Link } from 'react-scroll';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Sidebar = () => {
    useEffect(() => {
        AOS.init({ duration: 800, once: true }); 
      }, []);
  return (
    <div className='p-7 pt-5 flex flex-col min-h-screen gap-8 font-sans'>
        <div data-aos="fade-down" className='mx-auto '>
            <img className="h-7 w-33"src="./logo.png"/>

        </div>
       {/* rainbowbtn */}
        <button type="button" className=' rounded-full rounded-full bg-[length:300%_300%] bg-[position:0%_50%] cursor-pointer p-[1px] bg-gradient-to-r from-green-400 via-pink-500 via-blue-500 to-yellow-500 [animation:swirl_2s_ease_infinite] hover:scale-[1.02]'>
            <span className=' block text-[15px] font-semibold  text-gray-200 tracking-wide px-3.5 rounded-full bg-black py-3'><Link smooth={true} 
  duration={900} to="contact">
    CONTACT US</Link></span>
        </button>
        <div className='tracking-wider hover:text-gray-300  text-[15px] font-extralight text-bg-500 '>
<NavLink to="#">App Development</NavLink>
        </div>
        <div className='tracking-wider  hover:text-gray-300 text-[15px] font-extralight text-bg-500 '>
            <NavLink to="#">Challenges</NavLink>

        </div>
        <div className='tracking-wider  hover:text-gray-300  text-[15px] font-extralight text-bg-500 '>
            <NavLink to="#">Hire Developer</NavLink>
        </div>
        <div className='tracking-wider  hover:text-gray-300  text-[15px] font-extralight text-bg-500 '>
            <NavLink to="#">Community</NavLink>
        </div>
        {/* image at btm */}
        <div>
            <div className='mt-35'>
                <img className='h-25 w-65 rounded-sm' src="./image.png"/>
                <p className='h-10 text-[13px] font-light pt-4 tracking-wider text-gray-100 leading-snug'>Lorem ipsum dolor sit amet conse ctetur adipi sicing elit Assu menda.</p>
            </div>
        </div>
         
         
    </div>
  )
}

export default Sidebar