import React from 'react'
import { useEffect } from 'react';
import { GoArrowUpRight } from "react-icons/go";
import { Link, NavLink } from 'react-router-dom'
import Accordion from './Accordian.jsx';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Hero = () => {
    // little aos
  useEffect(() => {
    AOS.init({ duration: 800, once: true }); 
  }, []);
  return (
    <div className='mt-4 flex gap-10 flex-col  '>
        {/* first div */}
        <div className='flex flex-wrap md:flex-row '>
            {/* leftsec */}
            <div className='lg:w-[41%] w-[70%] w-[85%] p-6 m-4 mt-19 md:p-2 '>
                <div  data-aos="fade-down" className='text-white '>
                <p className='text-5xl font-playfair '>Unlock the Potential of Flutter</p>
                <p className='mt-4 text-xl font-extralight font-sans tracking-wider'> Your Premier Partner for Cross-Platform App Excellence!</p>
                </div>
                <div className='mt-13 text-white'>
                <button className='bg-techblue hover:drop-shadow-sm hover:drop-shadow-cyan-200 hover:bg-techblue/90 cursor-pointer hover:scale-[1.01] relative overflow-hidden px-9 py-4 text-[14px] backdrop-blur-md tracking-wider rounded-full group'>
                    <span className='relative z-10'> UPGRADE YOUR TECH</span>
                <span class=" shine absolute inline-block top-0 left-[-75%] w-[50%] h-full bg-white/20 transform skew-x-[-25deg] group-hover:left-[130%] transition-all duration-1000 ease-in-out"></span>
                </button>
                </div>
            </div>
            {/* right sec div1 */}
            <div data-aos="fade-right" className='relative lg:flex-1 mt-3 '>
                {/* gradient */}
                <div className='absolute inset-0 right-0 bottom-0 z-0'>
                    <div className='  w-[400px] h-[500px] bg-gradient-to-bl from-[#2BA9CC] via-[#6dcf9f] to-black opacity-30 rounded-full blur-3xl ml-39 mt-7 animate-hue'></div>
                </div>
                <img className=" w-[84%] h-[100%] relative z-10 rounded-xl " src="./reactcode.png"/>
                {/* floating =code  */}
                <div className='z-20 absolute hidden lg:block lg:bottom-[-110px] lg:h-41 lg:w-79 lg:left-[100px] rounded-xl p-3 bg-gray-950 text-white text-[10px]'>
                    
                        <div className='w-full flex gap-1 h-5'>
                            <span className='h-2 w-2  inline-block  rounded-full bg-red-600'></span>
                            <span className='h-2 w-2 inline-block  rounded-full bg-yellow-400'></span>
                            <span className='h-2 w-2 inline-block  rounded-full bg-green-500'></span></div>
                        {/* erite code */}
                        <code className='text-gray-400'>
                        Case {"{"} <br/>
                        &nbsp;&nbsp;child: ErrorCaseWidget( <br />
            &nbsp;&nbsp;errorException: state.errorObject,<br />
            &nbsp;&nbsp;onRetryCall: () {'=>'} <br />
            &nbsp;&nbsp;loadDataOnRetry(context),<br />
            &nbsp;&nbsp;)<br />
            {'})'}</code> </div>
            {/* second code */}
            <div className='z-20 hidden sm:block absolute bottom-[80px] h-20 w-70 right-[7px] rounded-xl p-3 bg-gray-950 text-white text-[10px]'>
                    
                        <div className='w-full flex gap-1 h-5'>
                            <span className='h-2 w-2  inline-block  rounded-full bg-red-600'></span>
                            <span className='h-2 w-2 inline-block  rounded-full bg-yellow-400'></span>
                            <span className='h-2 w-2 inline-block  rounded-full bg-green-500'></span></div>
                        {/* erite code */}
                        <code className='text-gray-400'>
                        onTapImgArrowLeft(BuildContext context) {'{'} <br />
            &nbsp;&nbsp;Navigator.pop(context); <br />
            {'}'}</code> </div>
                
            </div>
            

            </div>
            {/* second div */}
            <div className=' m-4 p-2 mt-37 gap-10 text-white flex md:flex-row flex-wrap justify-center items-center '>
                {/* firtsec */}
                <div data-aos="fade-up"  data-aos-delay="100" className=' xl:flex-[1] pt-7 xl:px-2 px-5'>
                    <p className='text-5xl font-playfair'>Flutter's Dawn</p>
                    <p className='text-md mt-1 tracking-wide'> History of Fluter</p>
                </div>
                <div data-aos="fade-up"  data-aos-delay="100" className='  xl:flex-[4] xl:px-18 px-5'>
                
                    <p className='text-[15.5px] tracking-wider font-extralight  text-gray-200 font-sans'> Uncover the fascinating story of Flutter in 'Flutter’s Dawn: History of Flutter.’ From humble origins to global acclaim, delve into its captivating narrative. Explore milestones, triumphs, and challenges. Whether tech enthusiast or curious mind, join us on this captivating journey!
                        <Link className= ' text-[15.5px] text-cyan-400'> {" "}Click to begin!</Link>
                       
                    </p>
               
                </div>
                <div  className=' xl:flex-[1] mt-5 p-2'>
                    <div  className=' cursor-pointer hover:drop-shadow-xs hover:drop-shadow-cyan-200  hover:scale-[1.03] relative overflow-hidden group flex justify-center items-center gap-2 px-7 py-3 bg-techblue text-md rounded-full'>
                
                  <button  >BEGIN
                  </button>
                  <span class=" shine absolute inline-block top-0 left-[-75%] w-[40%] h-full bg-white/20 transform skew-x-[-25deg] group-hover:left-[130%] transition-all duration-1000 ease-in-out"></span>

                  <span className=' text-gray-200 font-extralight text-3xl'><GoArrowUpRight  /></span>
                  </div>

                </div>

                 


        </div>
        {/* third div */}
        <div  className='flex mt-20 flex-col mx-auto'>
                    <div className='p-4 flex flex-col justify-center items-center gap-3'>
                        <p className='text-5xl text-white font-extralight tracking-tight font-playfair'>Our Dynamic Services Suite!</p>
                        <p className='font-sans text-xl font-extralight tracking-wider text-gray-300'>Embrace Innovation: Let's Create Together!</p>
                    </div>
                    <div className='mx-auto px-10 lg:px-39 text-center'>
                        <p className='text-gray-300  text-[15px] font-extralight'>Step into innovation! Explore our range of services and let’s create something extraordinary together.
                        Your vision, our expertise. Let’s begin!</p>
                    </div>
                 </div>
        {/* fouth div */}
        <div className='flex m-5 mr-[-10px]  mt-10 gap-2 flex-wrap '>
            {/* text */}
<div data-aos="fade-up"  data-aos-offset="100" className='lg:w-[60%] w-[80%] text-justify'>
    <div>
    <p className=' text-3xl font-playfair tracking-wide text-gray-300'>Flutter App Development</p>
    
    <p className='mt-3 pr-20 tracking-wider text-sm leading-snug font-sans font-extralight text-gray-400'>Unlock endless possibilities with Flutter App Development. Build beautiful, high-performance applications for any platform – faster and easier than ever before. Ready to revolutionize your app experience?<NavLink className="text-cyan-500" to="#"> {" "}Let’s get started today!</NavLink> </p>
    </div>
    {/* accordion */}
    <div className='mt-7 text-gray-300'>
    <Accordion title={"UI/UX Design"}>We design interfaces that are intuitive, visually appealing, and user-friendly.
Our process ensures your product is aligned with user needs and business goals.
We focus on creating seamless interactions and delightful user journeys.
From wireframes to prototypes, every detail is thoughtfully crafted.
Let’s build designs that make your users stay and engage.</Accordion>
    <Accordion title={"Customization & Integration"}>We provide tailored solutions to match your unique business requirements.
Seamlessly integrate with third-party APIs, services, and platforms.
Our approach ensures smooth functionality across all your systems.
From custom features to complete workflows, we make it happen.
Let us bring flexibility and scalability to your application.</Accordion>
    <Accordion title={"Testing & Quality Assurance"}>We ensure your product is reliable, secure, and performs flawlessly.
Our QA experts conduct thorough manual and automated testing.
We identify and resolve bugs before they impact your users.
From functional to performance testing, we cover it all.
Delivering a robust, high-quality product is our commitment.</Accordion>
    <Accordion title={"Maintenance & Support"}>We ensure your product is reliable, secure, and performs flawlessly.
Our QA experts conduct thorough manual and automated testing.
We identify and resolve bugs before they impact your users.
From functional to performance testing, we cover it all.
Delivering a robust, high-quality product is our commitment.</Accordion>
    <Accordion title={"Consulting & Training"}>Get expert guidance to refine your app strategy and roadmap.
We offer personalized training sessions for your teams.
Our consulting ensures you make informed technical decisions.
Stay updated with the latest trends and best practices.
Let’s empower your team to manage and grow your product confidently.</Accordion>
    <Accordion title={"Migration & Upgrades"}>We make transitioning from legacy systems smooth and hassle-free.
Our experts handle data migration with zero downtime.
Upgrade your application for better speed, security, and scalability.
We ensure compatibility with modern frameworks and platforms.
Future-proof your systems with our structured upgrade approach.</Accordion>
</div>
</div>
<div   data-aos="fade-left"  data-aos-offset="50" className=' lg:w-[37%] w-[80%] mt-8 text-gray-300'>
    <img className='w-[100%] h-[500px] rounded-sm' src="./acc.png"/>
</div>

        </div>
        
    </div>
  )
}

export default Hero;