"use client";
import React from "react";
import { Spotlight } from "@/components/ui/spotlight-new";

export function SpotlightNewDemo({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full flex items-center justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight />
      <div className="p-4 relative z-10 w-full">
        {children}
      </div>
    </div>
  );
}