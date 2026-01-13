import React, { useEffect, useRef } from "react";
import project1 from "../../public/movieBooking.webm";
import project2 from "../../public/project2.webm"
import project3 from "../../public/weather.webm"

import { projectAnimation } from "../animations/projectAnimation";

export default function Project() {
   let projectRef =useRef(null)

useEffect(()=>{
    const revertAnimations = projectAnimation(projectRef)
     return () => revertAnimations();
},[])

  return (
    <div id="Project"  ref={projectRef} className="w-full flex flex-col justify-center items-center text-white mt-54 px-10 transition-all duration-300">
      
      <h1 className="project1 text-4xl text-center font-bold">
        My Projects 👨‍💻
      </h1>

      <div className="project w-[80%] flex  flex-col justify-center items-center gap-5 lg:gap-16 mt-20">
        
        {/* PROJECT ROW */}
        <div className="project w-full flex flex-col lg:flex-row gap-10 lg:gap-50 items-center px-3">

          {/* VIDEO */}
          <div className="project  w-[300px] h-[240px]  lg:w-[500px] lg:h-[270px] shadow-[0_0_10px_lightgray] transition-all duration-300 hover:shadow-[0_0_15px_rgb(255,255,255)] rounded-lg overflow-hidden">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            >
              <source src={project1} type="video/webm" />
            </video>
          </div>

          {/* CONTENT */}
          <div className="content flex-1">
            <h1 className="text-3xl font-bold mb-6 max-w-[450px]">
              Animated <span className="gradient">Movie booking</span> Website
            </h1>

            <p className="text-lg text-gray-300 max-w-[400px] min-w-[300px] w-[90%] mb-10">
           This is a Movie Booking Website built with React. Users can browse movies, view details, and book tickets. I am currently developing features and improving the user experience.
            </p>

          <button
  onClick={() => window.open("https://github.com/SY53-56/QuickShow", "_blank")}
  className="flex items-center gap-2 px-4 py-2 border rounded-md 
             bg-[#2200493d] cursor-pointer
             hover:shadow-[0_0_15px_#72a1de81]
             text-[#72a1de81] border-[#72a1de81]
             transition-all duration-300"
>
  <i className="bx bx-link-external"></i>
  Website
</button>

          </div>

        </div>
           <div className="project w-full flex flex-col lg:flex-row gap-10 lg:gap-50 items-center px-3">

          {/* VIDEO */}
          <div className="w-[300px] h-[240px] lg:w-[500px] lg:h-[270px] shadow-[0_0_10px_lightgray] transition-all duration-300 hover:shadow-[0_0_15px_rgb(255,255,255)] rounded-lg overflow-hidden">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            >
              <source src={project2} type="video/webm" />
            </video>
          </div>

          {/* CONTENT */}
          <div className="content flex-1">
            <h1 className="text-3xl font-bold mb-6 max-w-[450px]">
              Animated <span className="gradient">Protfolio</span> Website
            </h1>

            <p className="text-lg text-gray-300 max-w-[400px] min-w-[300px] w-[90%] mb-10">
               This is my personal portfolio website built using React. 
  It showcases my projects, skills, and contact information with a modern and responsive design.
            </p>

            <button onClick={()=>window.open("https://react-weather-app-liart-theta.vercel.app/")} className="flex items-center gap-2 px-4 py-2 border rounded-md 
              bg-[#2200493d] cursor-pointer
              hover:shadow-[0_0_15px_#72a1de81]
              text-[#72a1de81] border-[#72a1de81]
             transition-all duration-300">
              
              <i className="bx bx-link-external"></i>
              Website
            </button>
          </div>

        </div>
           <div className="project w-full flex flex-col lg:flex-row gap-10 lg:gap-50 items-center px-3">

          {/* VIDEO */}
          <div className="w-[300px] h-[240px] lg:w-[500px] lg:h-[270px] shadow-[0_0_10px_lightgray] transition-all duration-300 hover:shadow-[0_0_15px_rgb(255,255,255)] rounded-lg overflow-hidden">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            >
              <source src={project3} type="video/webm" />
            </video>
          </div>

          {/* CONTENT */}
          <div className="content flex-1">
            <h1 className="text-3xl font-bold mb-6 max-w-[450px]">
              simple <span className="gradient">Weather</span> Website
            </h1>

            <p className="text-lg text-gray-300 max-w-[400px] min-w-[300px] w-[90%] mb-10">
          A weather application built with React and OpenWeather API. 
  Users can search any city and get real-time weather information along with forecasts.
            </p>

            <button className="flex items-center gap-2 px-4 py-2 border rounded-md 
              bg-[#2200493d] cursor-pointer
              hover:shadow-[0_0_15px_#72a1de81]
              text-[#72a1de81] border-[#72a1de81]
             transition-all duration-300">
              
              <i className="bx bx-link-external"></i>
              Website
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
