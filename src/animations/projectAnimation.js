// src/animations/projectAnimations.js
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

export const projectAnimation= (projectRef) => {
  const ctx = gsap.context(() => {
    // Animate heading
    gsap.fromTo(
      ".project1",
      { opacity: 0, scale: 0.2, y: -30 },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: ".project1",
          start: "top 60%",
          end: "bottom 40%",
          scrub: true,
        },
      }
    );

    const projects = gsap.utils.toArray(".project");

    // Default: all blurred + scaled down
    gsap.set(projects, { filter: "blur(10px)", opacity: 0.4, scale: 0.95 });

    projects.forEach((project) => {
      const content = project.querySelector(".content");
      gsap.set(content, { x: 50, opacity: 0 }); // slide offscreen right

      ScrollTrigger.create({
        trigger: project,
        start: "top 70%",
        end: "bottom 30%",
        onEnter: () => {
          gsap.to(project, { filter: "blur(0px)", opacity: 1, scale: 1, duration: 0.6, ease: "power3.out" });
          gsap.to(content, { x: 0, opacity: 1, duration: 0.8, ease: "power3.out", delay: 0.1 });
        },
        onLeave: () => {
          gsap.to(project, { filter: "blur(10px)", opacity: 0.4, scale: 0.95, duration: 0.4 });
          gsap.to(content, { x: 50, opacity: 0, duration: 0.3 });
        },
        onEnterBack: () => {
          gsap.to(project, { filter: "blur(0px)", opacity: 1, scale: 1, duration: 0.6 });
          gsap.to(content, { x: 0, opacity: 1, duration: 0.6 });
        },
        onLeaveBack: () => {
          gsap.to(project, { filter: "blur(10px)", opacity: 0.4, scale: 0.95, duration: 0.4 });
          gsap.to(content, { x: 50, opacity: 0, duration: 0.3 });
        },
      });
    });
  }, projectRef);

  return () => ctx.revert(); // cleanup
};
