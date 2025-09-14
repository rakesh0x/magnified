import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Geist } from "next/font/google";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ShineBorder } from "@/components/magicui/shine-border";
import { Check } from "lucide-react";
import { RainbowButtonDemo } from "./rainbow-button-buy";

const geistSans = Geist({
  subsets: ['latin']
})

export function ShineBorderDemo({ order }: { order: number }) {
  const borderWidth = 1 + order;
  const duration = 10 - order; 
  const shineColor = [
    ["#A07CFE", "#FE8FB5", "#FFBE7B"],
    ["#00C6FF", "#0072FF", "#001CFF"],
    ["#FFBE7B", "#FE8FB5", "#A07CFE"],
    ["#24C6DC", "#514A9D", "#24C6DC"],
  ][order - 1];

  return (
    <Card className={`relative max-w-[400px] w-full gap-8 bg-[#0a0a0a] text-white transition-all duration-300 rounded-lg border border-gray-700 h-full`}>
      {(order === 2) && (
        <div className="absolute top-0 right-0 -mt-2 -mr-2 bg-purple-600 text-white text-xs font-bold px-2 py-1 rounded-full rotate-12 z-10">Popular</div>
      )}
      {(order === 2 || order === 4) && (
        <ShineBorder borderWidth={borderWidth} duration={duration} shineColor={shineColor} />
      )}
      <CardHeader className="px-6 py-8">
        <CardTitle className="text-2xl font-bold mb-2">{["Starter Plan", "Creator Plan", "Intermediate Plan", "Enterprise Plan"][order - 1]}</CardTitle>
        <CardDescription className={`${geistSans.className} text-gray-200 text-sm mb-4`}>
           { order === 1 && (
               "Get handy with Magnified seamless services in Building AI models"
           )}
           { order === 2 && (
               "Freelancers, Video editor often refers to this plan in their services mostly"
           )}
           { order === 3 && (
               "Designed to serve professional Media artist and other media production enterprises "
           )}
           { order === 4 && (
               "Advanced features and dedicated support for large organizations."
           )}
        </CardDescription>
      </CardHeader>
      <div className="relative p-6 pt-0">
        {(order === 1 || order === 2) && <div className="flex items-baseline mb-4">
          <span className="text-4xl font-extrabold">${""}{order === 1 ? "9.00" : "49.00"}</span>
          <span className="text-gray-500 text-base">/monthly</span>
        </div>}
        {order === 3 && <div className="flex items-baseline mb-4">
          <span className="text-4xl font-extrabold">$149.00</span>
          <span className="text-gray-500 text-base">/monthly</span>
        </div>}
        {order === 4 && <div className="flex items-baseline mb-4">
          <span className="text-4xl font-extrabold">$249.00</span>
          <span className="text-gray-500 text-base">/monthly</span>
        </div>}
        <CardFooter className="p-0 mb-6">
          {order === 4 ? (
            <RainbowButtonDemo className="w-full bg-gray-700 hover:bg-gray-600">Contact Sales</RainbowButtonDemo>
          ) : order === 3 ? (
            <RainbowButtonDemo className="w-full bg-gray-700 hover:bg-gray-600">Book Demo</RainbowButtonDemo>
          ) : order === 2 ? (
            <RainbowButtonDemo className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">Get Started</RainbowButtonDemo>
          ) : (
            <RainbowButtonDemo className="w-full bg-gray-800 hover:bg-gray-700 border border-gray-700">Get Started</RainbowButtonDemo>
          )}
        </CardFooter>
        <CardContent className="p-0">
            { order === 1 && (
             <div className="text-left">
               <p className="text-lg font-semibold mb-2">Plan Limits</p>
               <ul className="space-y-2 text-gray-400 text-sm">
                 <li className="flex items-center gap-2"><Check size={18} className="text-purple-400" />Can get upto 3 Images</li>
               </ul>
               <p className="text-lg font-semibold mb-2 mt-4">Features</p>
               <ul className="space-y-2 text-gray-400 text-sm">
                 <li className="flex items-center gap-2"><Check size={18} className="text-purple-400" />Cheapest among the all</li>
                 <li className="flex items-center gap-2"><Check size={18} className="text-purple-400" />Easy to get Handy expereince</li>
                 <li className="flex items-center gap-2"><Check size={18} className="text-purple-400" />Download Images</li>
               </ul>
             </div>
           )}
           { order === 2 && (
             <div className="text-left">
               <p className="text-lg font-semibold mb-2">Plan Limits</p>
               <ul className="space-y-2 text-gray-400 text-sm">
                 <li className="flex items-center gap-2"><Check size={18} className="text-purple-400" />Can get upto 17 Images</li>
                 <li className="flex items-center gap-2"><Check size={18} className="text-purple-400" />360 video minutes per year</li>
               </ul>
               <p className="text-lg font-semibold mb-2 mt-4">Everything In Starter Plus...</p>
               <ul className="space-y-2 text-gray-400 text-sm">
                 <li className="flex items-center gap-2"><Check size={18} className="text-purple-400" />Selected industry avatars</li>
                 <li className="flex items-center gap-2"><Check size={18} className="text-purple-400" />5 personal avatars</li>
                 <li className="flex items-center gap-2"><Check size={18} className="text-purple-400" />Premium voices</li>
                 <li className="flex items-center gap-2"><Check size={18} className="text-purple-400" />Custom fonts</li>
                 <li className="flex items-center gap-2"><Check size={18} className="text-purple-400" />Branded share page</li>
                 <li className="flex items-center gap-2"><Check size={18} className="text-purple-400" />Synthesia API</li>
               </ul>
             </div>
           )}
           { order === 3 && (
             <div className="text-left">
               <p className="text-lg font-semibold mb-2">Plan Limits</p>
               <ul className="space-y-2 text-gray-400 text-sm">
                 <li className="flex items-center gap-2"><Check size={18} className="text-purple-400" />Custom no. of editors and guests</li>
                 <li className="flex items-center gap-2"><Check size={18} className="text-purple-400" />Unlimited video minutes</li>
               </ul>
               <p className="text-lg font-semibold mb-2 mt-4">Everything In Creator Plus...</p>
               <ul className="space-y-2 text-gray-400 text-sm">
                 <li className="flex items-center gap-2"><Check size={18} className="text-purple-400" />All industry avatars</li>
                 <li className="flex items-center gap-2"><Check size={18} className="text-purple-400" />Unlimited personal avatars</li>
                 <li className="flex items-center gap-2"><Check size={18} className="text-purple-400" />Branded AI avatars (paid add-on)</li>
                 <li className="flex items-center gap-2"><Check size={18} className="text-purple-400" />Voice cloning</li>
                 <li className="flex items-center gap-2"><Check size={18} className="text-purple-400" />Shared workspace</li>
                 <li className="flex items-center gap-2"><Check size={18} className="text-purple-400" />SAML/SSO</li>
               </ul>
             </div>
           )}
           { order === 4 && (
             <div className="text-left">
               <p className="text-lg font-semibold mb-2">Plan Limits (Enterprise)</p>
               <ul className="space-y-2 text-gray-400 text-sm">
                 <li className="flex items-center gap-2"><Check size={18} className="text-purple-400" />Unlimited editors and guests</li>
                 <li className="flex items-center gap-2"><Check size={18} className="text-purple-400" />Unlimited video minutes</li>
                 <li className="flex items-center gap-2"><Check size={18} className="text-purple-400" />Dedicated support team</li>
               </ul>
               <p className="text-lg font-semibold mb-2 mt-4">Features (Enterprise)</p>
               <ul className="space-y-2 text-gray-400 text-sm">
                 <li className="flex items-center gap-2"><Check size={18} className="text-purple-400" />Custom integrations</li>
                 <li className="flex items-center gap-2"><Check size={18} className="text-purple-400" />On-premise deployment</li>
                 <li className="flex items-center gap-2"><Check size={18} className="text-purple-400" />Advanced security features</li>
                 <li className="flex items-center gap-2"><Check size={18} className="text-purple-400" />Custom branding options</li>
               </ul>
             </div>
           )}
        </CardContent>
       </div>
      </Card>
  );
}
