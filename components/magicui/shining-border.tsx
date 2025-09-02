import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ShineBorder } from "@/components/magicui/shine-border";

export function ShineBorderDemo() {
  return (
    <div className="relative max-w-xl w-full bg-[#18181b]/80 rounded-2xl h-40 border border-[#3a3a3c] shadow-lg p-4">
      <Input
        className="relative z-10 w-full bg-transparent text-white placeholder:text-[#b1b1b1] rounded-2xl px-4 py-6 text-lg border-none focus:outline-none"
        placeholder="Type your prompt with your image, rest we will take care of .."
      />
      <ShineBorder
        shineColor={["#FFFFFF", "#A07CFE", "#FE8FB5", "#FFBE7B"]}
        borderWidth={2}
        className="absolute inset-0 pointer-events-none rounded-2xl"
      />
    </div>
  );
}
