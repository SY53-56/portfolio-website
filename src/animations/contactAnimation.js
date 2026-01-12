import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)
export const contactAnimation=(contactRef)=>{
    const cxt = gsap.context(()=>{
         gsap.fromTo(".h1",{
            opacity:0,
            scale:0.2,
            y:-50,
             
         },{
            opacity:1,
            scale:1,
            y:0,
            duration:1,
            scrollTrigger: {
        trigger: ".h1",
        start: "top 80%",
        end: "bottom 20%",
        scrub: true,
      },
         }
        )
    },contactRef)
    return ()=>cxt.revert
}