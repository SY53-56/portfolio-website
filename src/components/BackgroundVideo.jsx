import React from "react";
import galaxy from "../assets/video/galaxy.mp4";

export default function BackgroundVideo() {
  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover mix-blend-overlay"
      >
        <source src={galaxy} type="video/mp4" />
      </video>
    </div>
  );
}
