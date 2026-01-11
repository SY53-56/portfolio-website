import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export const skillAnimation = (skillRef) => {
  const ctx = gsap.context(() => {
    gsap.from(".h1", {
      opacity: 0,
      y: -150,
      scale: 0.2,
      duration: 1,
        ease: "power2.out",
    
        scrollTrigger: {
        trigger: ".h1",
        start: "top 90%",
        end: "bottom 10%",
        scrub: true,
      },
    }
  )
  gsap.from(".skill",{
    opacity:0,
    y:150,
    scale:0.2,
    duration:0.6,
    ease:"power2.out",
        scrollTrigger: {
        trigger: ".h1",
        start: "top 90%",
        end: "bottom 10%",
        scrub: true,
      },
  })



  }, skillRef)

  return () => ctx.revert()
}
