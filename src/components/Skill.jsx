import React, { useEffect, useRef } from 'react'
import brain from "../assets/images/digital brain (2).png"
import { ComputerIcon } from 'lucide-react'
import  {imgData}  from '../imgData'
import { skillAnimation } from '../animations/skillAnimation'

export default function Skill() {
   const skillRef = useRef(null)
   useEffect(()=>{
   let removeAnimation = skillAnimation(skillRef)
   return ()=> removeAnimation ()
   },[])
  return (
    <div ref={skillRef} className=' w-full relative px-4 lg:px-20 mt-60'>
      <h1 className='h1 text-4xl font-bold text-center text-white'>My Skills 💪</h1>
      <div className='skill w-full relative h-[90vh] mt-10 items-start mix-blend-lighten flex justify-center '>
            <div className='absolute top-40 left-20 flex flex-col items-start max-w-[300px] gap-4'>
                     <h1 className="gradient text-5xl flex font-bold">Designer  <ComputerIcon/></h1>
    <p className='text-white'>I have expertise in HTML, CSS, JavaScript, and design tools like Figma and Adobe XD. My strength lies in blending aesthetics with functionality to create seamless user experiences.</p>  
            </div>

            <img className='w-[90%] absolute -top-20 mix-blend-difference object-cover' src={brain} alt="" />

            <div className='absolute top-40 right-16 flex flex-col items-start max-w-[300px] gap-4'>
            <h1 className="gradient text-5xl flex font-bold">Coder<i class='bx bx-code-block' ></i></h1>
            <p className='text-white'>I’m skilled in HTML, CSS, JavaScript, and frameworks like React and Node.js. I also have experience with database management using MongoDB and MySQL.</p>
            </div>

      </div>
       <div className=' max-w-[900px] absolute top-[600px] left-[280px] flex overflow-hidden mix-blend-lighten px-5 gap-6'>
         {imgData.map((img , index)=>(
          <img className='w-[170px] h-[100px] mix-blend-difference' src={img} key={index}/>
         ))}
       </div>
    </div>
  )
}
