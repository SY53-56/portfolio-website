import React, { useEffect, useRef } from "react";
import blackhole from "../../public/blackhole.webm"
import gsap from "gsap";
export default function BlackHole() {
  const videoRef = useRef(null)
   useEffect(()=>{
      const ctx = gsap.context(()=>{
        gsap.from(videoRef.current,{
          opacity:0,
          y:-100,
          duration:1,
          ease:"power3.out",
          delay:0.2
        })
      },videoRef)
       return () => ctx.revert();
   },[]) 
  
  return (
    <div ref={videoRef} className="video absolute top-10 lg:top-0 w-150 lg:w-full  mix-blend-lighten -z-10">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full mt-[-23%] "
      >
        <source src={blackhole} type="video/webm" />
      </video>
    </div>
  );
}
