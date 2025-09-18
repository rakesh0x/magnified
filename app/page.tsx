import { SpotlightNewDemo } from "@/components/ui/spotlight";
import { Navbar } from "@/components/ui/navbar";
import { AuroraTextDemo } from "@/components/magicui/aurora";
import { InputDemo } from "@/components/ui/waitlist";
import { AnimatedGradientTextDemo } from "@/components/magicui/Animatedintro";
import { Poppins } from "next/font/google";
import { Auth } from "@/components/ui/onboarding";
import { SignedOut } from '@clerk/nextjs';

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ["400", "700"]
})

export default function Home() {
  return (
    <SpotlightNewDemo>
      {/* Fixed Navbar */}
      <Navbar />

      {/* Hero Section */}
      <div className="flex flex-col justify-center items-center h-screen w-full gap-6 px-4 sm:px-6 lg:px-8 text-center">
        {/* Animated Intro */}
        <AnimatedGradientTextDemo />

        {/* Aurora Subheading */}
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
        <div>
          <SignedOut>
            <Auth/>
          </SignedOut>
        </div>      
      </div>
    </SpotlightNewDemo>
  );
}
