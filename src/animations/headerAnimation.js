import gsap from "gsap";

export const openMenu = (menu) => {
  gsap.to(menu.current, {
    x: 0,
    opacity: 1,
    pointerEvents: "auto",
    duration: 0.5,
    ease: "power3.out",
  });
};

export const closeMenu = (menu) => {
  gsap.to(menu.current, {
    x: 300,
    opacity: 0,
    pointerEvents: "none",
    duration: 0.4,
    ease: "power3.in",
  });
};
