import { SpotlightNewDemo } from "@/components/ui/spotlight";
import { Navbar } from "@/components/ui/navbar";
import { AuroraTextDemo } from "@/components/magicui/aurora";
import { InputDemo } from "@/components/ui/waitlist";
import { AnimatedGradientTextDemo } from "@/components/magicui/Animatedintro";

export default function Home() {
  return (
    <SpotlightNewDemo>
      {/* Fixed Navbar */}
      <Navbar />

      {/* Hero Section */}
      <div className="flex flex-col justify-center min-h-screen w-full gap-6 px-4 sm:px-6 lg:px-8 pt-28 sm:pt-32">
        {/* Animated Intro */}
        <AnimatedGradientTextDemo />

        {/* Aurora Subheading */}
        <AuroraTextDemo />

        {/* Description */}
        <p className="text-base sm:text-lg font-medium text-neutral-300 max-w-2xl mx-auto text-center leading-relaxed tracking-wide">
          Upload your selfies and instantly generate{" "}
          <span className="text-white font-semibold">AI-powered portraits</span>,{" "}
          <span className="text-white font-semibold">headshots</span>, and{" "}
          <span className="text-white font-semibold">creative models</span>.
        </p>

        {/* Waitlist / Input */}
        <div className="mx-auto w-full max-w-md ml-20">
          <InputDemo />
        </div>
      </div>
    </SpotlightNewDemo>
  );
}
