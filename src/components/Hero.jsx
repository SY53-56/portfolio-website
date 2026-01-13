import React, { useEffect, useRef } from "react";
import { ArrowRightIcon, DiamondIcon } from "lucide-react";
import Button from "./Button";
import HeroVideo from "../../public/hero-video.mp4"
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
export default function Hero() {
   const heroRef= useRef(null)
  const contentRef =useRef(null)
 useEffect(() => {
    const ctx = gsap.context(() => {
      
      // 1. Entrance Animation: Jab page load ho tab content upar aaye
      gsap.from(contentRef.current.children, {
        opacity: 0,
        y: 30,
        duration: 1,
       // stagger: 0.2,
        ease: "power2.out",
      });

      // 2. Scroll Trigger: Niche scroll karte hi visibility kam ho jaye
      gsap.to(contentRef.current, {
        opacity: 0,
        y: -100, // Thoda upar ki taraf slide hote hue gayab hoga
        filter:"blur(10px)",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top 10%",   // Jab hero top par ho
          end: "bottom 30%",  // Jab bottom 30% screen par bache
          scrub: 1,           // Scroll ke saath smooth chalta hai
        },
      });

    

    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
   <div ref={heroRef} className="hero w-full   flex justify-between px-10 lg:px-20 mb-30 lg:mb-16">
      <div ref={contentRef} className="herop w-full lg:w-[45%] relative  flex flex-col  mt-50 lg:mt-2 items-start  justify-center gap-5">
               <div  className="border flex items-center gap-2 rounded-2xl px-3 py-1.5 
                        text-[#72a1de] 
                        shadow-[0_0_5px_#72a1de84] 
                        border-[#72a1de94] 
                        bg-[#2200493d] ">
                                <i className='bx bxl-sketch'></i>
                <h1 className="text-[14px] lg:text-[20px]">      full stack Developer Portfolio</h1>
               </div>
<h1 className=" text-3xl lg:text-6xl mt-5 mb-10 text-white font-bold">
  Providing <span className="gradient">the best</span> <br />
  Project <span className="gradient">Experience</span>
</h1>
              <p className=" text-[18px] lg:text-[20px] w-full lg:max-w-[550px] mb-10 text-white">I'm a full stack developer with experience in Website, Mobile and Software development. Check out my projects and skills.</p>
         <div className="flex gap-4">
               <Button name="contact" className="bg-[#2200493d] border border-[#72a1de81]
                     shadow-[0_0_5px_#72a1de81]
                     hover:shadow-[0_0_15px_#72a1de81]
                     px-8 py-2 rounded-md text-white transition-all duration-300"/>
                    

                    <a href="../../public/Sahul_Kumar_Resume.pdf" target="_blank" className="bg-[#2200493d] border border-[#72a1de81]
                     shadow-[0_0_5px_#72a1de81]
                     hover:shadow-[0_0_15px_#72a1de81]
                     px-8 py-2 rounded-md text-white transition-all duration-300">Resume View</a>
         </div>
      </div>
      <div className=" w-[45%] hidden lg:flex">
 <video autoPlay
        loop
        muted
        playsInline  className="h-[900px] w-full mix-blend-lighten">
          <source src={HeroVideo} type="video/mp4"/>
        </video>
      </div>
   </div>
  );
}
