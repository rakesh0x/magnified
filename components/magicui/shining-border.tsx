import { Input } from "@/components/ui/input";
import { ShineBorder } from "@/components/magicui/shine-border";

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
    <div className="relative max-w-xl w-full bg-[#18181b]/80 rounded-2xl h-40 border border-[#3a3a3c] shadow-lg p-4">
      <Input
        className="relative z-10 w-full bg-transparent text-white placeholder:text-[#b1b1b1] rounded-2xl px-4 py-6 text-lg border-none focus:outline-none focus:ring-0"
        placeholder="Type your prompt with your image, rest we will take care of .."
      />
      <ShineBorder
        shineColor={shineColor}
        borderWidth={borderWidth}
        duration={duration}
        className="absolute inset-0 pointer-events-none rounded-2xl"
      />
    </div>
  );
}
