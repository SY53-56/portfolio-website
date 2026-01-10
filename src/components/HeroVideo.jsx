import React from "react";
import HeroVideos from "../assets/video/hero-video.mp4";

export default function HeroVideo() {
  return (
    <div className="absolute  ">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full mix-blend-lighten"
      >
        <source src={HeroVideos} type="video/mp4" />
      </video>
    </div>
  );
}
