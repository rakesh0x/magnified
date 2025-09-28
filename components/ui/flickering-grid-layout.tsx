import { FlickeringGrid } from "../ui/flickering-grid";
import { ReactNode } from "react";

export function FlickeringGridDemo({ children, className }: { children?: ReactNode; className?: string }) {
  return (
    <div className={`relative w-full min-h-full bg-background bg-black `}>
      <FlickeringGrid
        className="absolute inset-0 z-0 size-full"
        squareSize={4}
        gridGap={6}
        color="#6B7280"
        maxOpacity={0.5}
        flickerChance={0.1}
        height={800}
        width={1839}
      />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
