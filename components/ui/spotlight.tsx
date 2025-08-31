"use client";
import React from "react";
import { Spotlight } from "@/components/ui/spotlight-new";

export function SpotlightNewDemo() {
  return (
    <div className="h-screen w-full flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight />
      <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
        <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          Turn Your Photos into <br/> Stunning AI Models
        </h1>
        <p className="mt-4 text-lg font-normal text-neutral-300 max-w-lg text-center mx-auto leading-relaxed">
          Upload your selfies and instantly generate AI-powered portraits, headshots, and creative models.
        </p>
      </div>
    </div>
  );
}
