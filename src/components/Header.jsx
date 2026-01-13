import React, { useEffect, useRef } from "react";
import {
  GithubIcon,
  LinkedinIcon,
  MenuIcon,
  TwitterIcon,
  XIcon,
} from "lucide-react";
import { openMenu, closeMenu } from "../animations/headerAnimation";
import gsap from "gsap";

export default function Header() {
  const headerRef = useRef(null);
  const menuRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headerRef.current, {
        opacity: 0,
        y: -80,
        duration: 1.5,
        ease: "power3.out",
      });
    }, headerRef);

    return () => ctx.revert();
  }, []);

  const links = [
     { name: "About", path: "#Ablot" },
  { name: "Skills", path: "#Skill" },
  { name: "Projects", path: "#Project" },
  { name: "Contact", path: "#Contact" },
  ]
 const socials = [
  { icon: GithubIcon, path: "https://github.com/SY53-56" },
  { icon: LinkedinIcon, path: "https://www.linkedin.com/in/sahul-yadav-067a88329/" },
  { icon: TwitterIcon, path: "https://x.com/SahulYadav07" },
];


  return (
    <header
      ref={headerRef}
      className="top-0 z-50 w-full bg-[rgba(99,102,241,0.15)] backdrop-blur-md shadow-[0_0_30px_#7aaae963]"
    >
      {/* Top Bar */}
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 lg:px-12 py-4 text-slate-100">
        <h1 className="text-2xl font-bold">
          <span className="text-indigo-400 text-3xl">S</span>ahul
        </h1>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex gap-10 bg-[rgba(122,170,233,0.2)] px-10 py-3 rounded-full">
          {links.map((item) => (
         <a href={item.path} className="hover:text-indigo-300 transition">
  {item.name}
</a>

          ))}
        </ul>

        {/* Desktop Socials */}
      <div className=" gap-4 hidden lg:flex">
  {socials.map(({ icon: Icon, path }, i)=> (
    <a
      key={i}
      href={path}
      target="_blank"
      rel="noopener noreferrer"
      className="p-2 border border-slate-300 rounded-full hover:scale-110 transition"
    >
      <Icon size={18} />
    </a>
  ))}
</div>


        {/* Mobile Button */}
        <MenuIcon
          className="lg:hidden cursor-pointer"
          onClick={() => openMenu(menuRef)}
        />
      </div>

      {/* MOBILE MENU */}
      <div
        ref={menuRef}
        className="fixed top-0 right-0 z-50 h-screen w-72 bg-black/90 backdrop-blur-md text-white opacity-0 pointer-events-none lg:hidden px-5 py-4"
      >
        <div className="flex justify-end">
          <XIcon
            size={30}
            className="cursor-pointer"
            onClick={() => closeMenu(menuRef)}
          />
        </div>

        <ul className="flex flex-col gap-6 text-2xl font-bold mt-10">
          {links.map((item) => (
       <a href={item.path} className="hover:text-indigo-300 transition">
  {item.name}
</a>

          ))}
        </ul>

      <div className="flex gap-4 mt-10">
  {socials.map(({ icon: Icon, path }, i) => (
    <a
      key={i}
      href={path}
      target="_blank"
      rel="noopener noreferrer"
      className="p-2 border border-slate-300 rounded-full hover:scale-110 transition"
    >
      <Icon size={18} />
    </a>
  ))}
</div>

      </div>
    </header>
  );
}
