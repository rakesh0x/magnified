import { RainbowButton } from "@/components/magicui/rainbow-button";
import React from "react";

export function RainbowButtonDemo({ children, className }: { children?: React.ReactNode; className?: string }) {
  return (
    <RainbowButton className={className}>
      {children}
    </RainbowButton>
  );
}
