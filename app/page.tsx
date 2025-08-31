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
        <p className="text-lg font-sans-serif text-neutral-300 max-w-lg text-center text-white leading-relaxed ml-90">
          Upload your selfies and instantly generate AI-powered portraits,
          headshots, and creative models.
        </p>
        <InputDemo />
      </div>
    </SpotlightNewDemo>
  );
}
