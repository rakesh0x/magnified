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

      {/* Hero section (true center + avoids overlap) */}
      <div className="flex mb-30 flex-col justify-center h-screen w-full gap-6 px-4 pt-24">
        <AnimatedGradientTextDemo />

        <AuroraTextDemo />
        <p className="text-base md:text-lg font-medium text-neutral-300 max-w-2xl ml-70 text-center leading-relaxed tracking-wide">
          Upload your selfies and instantly generate
          <span className="text-white font-semibold"> AI-powered portraits</span>,{" "}
          <span className="text-white font-semibold">headshots</span>, and{" "}
          <span className="text-white font-semibold">creative models</span>.
        </p>

        <InputDemo />
      </div>
    </SpotlightNewDemo>
  );
}
