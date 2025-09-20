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
import { CardSpotlight } from "@/components/ui/card-spotlight";
import { AnimatedNumberBasic } from "@/components/magicui/animated-numbers";
import { Testimonials } from "@/components/ui/testinomials";
import { FlickeringGridDemo } from "@/components/ui/flickering-grid-layout";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Home() {
  const { isSignedIn } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (isSignedIn) {
      router.push("/dashboard");
    }
  }, [isSignedIn, router]);

  return (
    <>
      <SpotlightNewDemo>
        {/* Fixed Navbar */}
        <Navbar />

        <div className="pt-[100px]">
          <br />
          <br />
        </div>

        {/* Hero Section */}
        <div className="flex flex-col justify-center items-center gap-6 text-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Animated Intro */}
          <AnimatedGradientTextDemo />
          <AuroraTextDemo />

          {/* Description */}
          <p
            className={`${poppins.className} text-base text-white sm:text-lg font-medium text-gray-700 dark:text-neutral-300 max-w-2xl leading-relaxed tracking-wide`}
          >
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

          <br />
          <div className="w-full max-w-7xl mx-auto">
            {!isSignedIn && <Auth />}
          </div>
          <div className="w-full">
            <MarqueeDemo />
          </div>

          {/* How it works section */}
          <section className="py-20 w-full">
            <h2 className="text-center text-4xl font-bold text-white mb-4">
              How It <span className="text-purple-500">Works</span>
            </h2>
            <p className="text-center text-lg text-gray-400 mb-12">
              Transform your photos into stunning AI-powered portraits in three
              simple steps
            </p>
            <div className="flex flex-col md:flex-row justify-center items-center gap-8">
              <CardSpotlight className="h-96 w-80 flex flex-col items-center justify-center p-6 text-center">
                <UploadIcon />
                <p className="text-xl font-bold relative z-20 mt-4 text-white">
                  Upload Your Photo
                </p>
                <p className="text-neutral-300 mt-2 relative z-20 text-sm">
                  Start by uploading any portrait photo you'd like to enhance
                </p>
              </CardSpotlight>

              <CardSpotlight className="h-96 w-80 flex flex-col items-center justify-center p-6 text-center">
                <MagicIcon />
                <p className="text-xl font-bold relative z-20 mt-4 text-white">
                  AI Magic
                </p>
                <p className="text-neutral-300 mt-2 relative z-20 text-sm">
                  Our advanced AI transforms your photo into stunning portraits
                </p>
              </CardSpotlight>

              <CardSpotlight className="h-96 w-80 flex flex-col items-center justify-center p-6 text-center">
                <DownloadIcon />
                <p className="text-xl font-bold relative z-20 mt-4 text-white">
                  Download & Share
                </p>
                <p className="text-neutral-300 mt-2 relative z-20 text-sm">
                  Get your enhanced portraits in multiple styles instantly
                </p>
              </CardSpotlight>
            </div>
          </section>

          {/* Animated Numbers */}
          <AnimatedNumberBasic />
        </div>
      </SpotlightNewDemo>

      {/* FULL WIDTH Flickering Grid Section */}
      <section className="relative w-full min-h-screen">
        {/* Fullscreen background */}
        <FlickeringGridDemo className="absolute inset-0 w-full h-full" />
        <div className="relative z-10 w-full px-6 py-20 flex flex-col items-center gap-16">
          <Testimonials />
          <Pricing />
        </div>
      </section>
    </>
  );
}

const UploadIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="48"
    height="48"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#a855f7"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-upload"
  >
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="17 8 12 3 7 8" />
    <line x1="12" x2="12" y1="3" y2="15" />
  </svg>
);

const MagicIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="48"
    height="48"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#a855f7"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-sparkles"
  >
    <path d="M9.9 10.9L12 2l2.1 8.9" />
    <path d="M2 12h20" />
    <path d="M20.2 20.2 22 12l-1.8-8.2" />
    <path d="M9.9 13.1 12 22l2.1-8.9" />
  </svg>
);

const DownloadIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="48"
    height="48"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#a855f7"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-download"
  >
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" x2="12" y1="15" y2="3" />
  </svg>
);
