import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import BackgroundVideo from "./components/BackgroundVideo";
import BlackholeVideo from "./components/Blackhole"
import Header from "./components/Header";

export default function Layout() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#001f7c38]">

      <BackgroundVideo />
 <BlackholeVideo/>
      <Header />

      <div className="">
        <Outlet />
      </div>

      <Footer />
    </div>
  )
}

