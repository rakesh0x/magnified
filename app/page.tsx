'use client';

import { SpotlightNewDemo } from "@/components/ui/spotlight";
import { Navbar } from "@/components/ui/navbar";
import { AuroraTextDemo } from "@/components/magicui/aurora";
import { AnimatedGradientTextDemo } from "@/components/magicui/Animatedintro";
import { Poppins } from "next/font/google";
import { Auth } from "@/components/ui/onboarding";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { MarqueeDemo } from "@/components/ui/photos-marquee";
import { Pricing } from "./pricing/pricingpage";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"]
})

export default function Home() {
  const { isSignedIn } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (isSignedIn) {
      router.push('/dashboard');
    }
  }, [isSignedIn, router]);

  return (
    <SpotlightNewDemo>
      {/* Fixed Navbar */}
      <Navbar />

      <div className="pt-[100px]">
        <br/>
        <br/>
      </div>

      {/* Hero Section */}
      <div className="flex flex-col justify-center items-center gap-6 text-center min-h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Animated Intro */}
        <AnimatedGradientTextDemo />

        <AuroraTextDemo />

        {/* Description */} 
        <p  className={`${poppins.className} text-base text-white sm:text-lg font-medium text-gray-700 dark:text-neutral-300 max-w-2xl leading-relaxed tracking-wide`} >
          Upload your selfies and instantly generate{" "}
          <span className="text-black text-white font-semibold">
            AI-powered portraits
          </span>
          ,{" "}
          <span className="text-black text-white font-semibold">
            headshots
          </span>
          , and{" "}
          <span className="text-black text-white font-semibold">
            creative models
          </span>.
        </p>

          <br/>
        <div className="w-full max-w-7xl mx-auto">
          {!isSignedIn && <Auth/>}
        </div> 
        <div className="w-full">
          <MarqueeDemo/>
        </div>

        <div className="w-full">
          <Pricing/>
        </div>

      </div>
    </SpotlightNewDemo>
  );
}
