import React, { useEffect, useRef } from 'react'
import card1 from "../assets/images/grid1.png"
import card2 from "../assets/images/grid2.png"
import glob from "../assets/video/glob.mp4"
import card4 from "../assets/images/grid4.png"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from 'gsap'
gsap.registerPlugin(ScrollTrigger)
export default function About() {
  let showRef= useRef(null)
    
useEffect(() => {
  const ctx = gsap.context(() => {

    gsap.fromTo(
      ".hello",
      {
        opacity: 0,
        y: -150,
        scale: 0.2,
        filter: "blur(10px)",
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        filter: "blur(0px)",
        ease: "power3.out",
        scrollTrigger: {
          trigger: showRef.current,
          start: "top 90%",   // jab section screen me aaye
          end: "top 30%",
          scrub: true,        // scroll ke saath smooth
        },
      }
    );

  }, showRef);

  return () => ctx.revert();
}, []);

    return (

        <div ref={showRef} className=' w-full '>
            <h1 className='hello text-6xl text-center text-white font-bold'>Hello,There👋</h1>
            <div className=' w-full h-full grid  grid-cols-1  md:grid-cols-2  lg:grid-cols-3  gap-6  px-3
                    lg:px-24
                  mt-20'>
                <div className="relative flex flex-col  w-auto px-4 py-5 h-[40vh]
                 border border-gray-400
               bg-[#080020b7]
           rounded-[20px]
            cursor-pointer
                transition-all duration-500
 
 hover:shadow-[0_0_15px_lightgray]
">
                    <img src={card1} className='w-[90%] h-[50%] object-cover ' alt="" />
                    <h1 className=' text-left text-[26px] font-bold z-1 text-[#d3d3d3]  my-5'>Hi there, I'm sahul</h1>
                    <p className='text-[#808080] text-[13px] m-w-[300px]'>With hand on project, I have honed my skills in both frontend and backend dev, creating dynamic and responsive websites.</p>

                </div>

                <div className="relative flex flex-col w-auto px-4 py-5 h-[40vh] border border-gray-400
  bg-[#080020b7]
  rounded-[20px]
  cursor-pointer
  transition-all duration-500
 
 hover:shadow-[0_0_15px_lightgray]
">
                    <img className='w-[90%] h-[50%] object-cover' src={card2}  alt="" />
                    <h1 className=' text-left text-[26px] font-bold z-1 text-[#d3d3d3]  my-5'>Tech Stack</h1>
                    <p className='text-[#808080] text-[13px] m-w-[300px]'>I specialize in a variety of languages, frameworks, and tools that allow me to build robust and scalable applications.</p>

                </div>

                <div className="relative flex flex-col items-start  w-auto row-span-2 h-[83vh] px-4 py-5 
  border border-gray-400
  bg-[#080020b7]
  rounded-[20px]
  cursor-pointer
  transition-all duration-500
hover:shadow-[0_0_15px_lightgray]
">
                   <video  autoPlay className='w-[90%] h-[80%] ml-6 object-cover mix-blend-lighten'
        loop
        muted
         >
                    <source src={glob} type="video/mp4"/>
                   </video>
                    <h1 className=' text-[24px] font-bold z-1 text-[#d3d3d3]  my-3'>I’m very flexible with time zone communications & locations</h1>
                    <p className='text-[#808080] text-[13px] m-w-[300px]'>I'm based in India, and open to remote work worldwide..</p>
               <button className='px-4 py-2 hover:shadow-[0_0_15px_lightgray] text-white rounded-md border bg-[#0f1217] hover:opacity-[0.7] cursor-pointer mt-10'>Contact me</button>
                </div>
                <div className="  relative flex flex-col px-2 py-1
  col-span-1
  md:col-span-1
  lg:col-span-2
  h-[300px]
 
  border border-gray-400
  bg-[#080020b7]
  rounded-[20px]
  cursor-pointer
  transition-all duration-500
  hover:shadow-[0_0_15px_lightgray]
">
                    <img className='w-[90%] h-[50%] object-cover ml-8' src={card4} alt="" />
                    <h1 className=' text-left text-[26px] font-bold z-1 text-[#d3d3d3]  my-5'>My Passion for Coding</h1>
                    <p className='text-[#808080] text-[13px] m-w-[300px]'>I love solving problems and building things through code. Programming isn't just my profession—it's my passion. I enjoy exploring new technologies, and enhancing my skills.</p>

                </div>
               

            </div>
        </div>
    )
}
