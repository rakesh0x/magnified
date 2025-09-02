import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ShineBorder } from "@/components/magicui/shine-border";

export function ShineBorderDemo() {
  return (
    <Card className="relative overflow-hidden max-w-[350px] w-full bg-white">
      <ShineBorder
        shineColor={["#FFFFFF", "#A07CFE", "#FE8FB5", "#FFBE7B"]}
        borderWidth={4}
      />
      <CardContent>

      </CardContent>
    </Card>
  );
}
