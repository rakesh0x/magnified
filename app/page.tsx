import Image from "next/image";
import { SpotlightNewDemo } from "@/components/ui/spotlight";
import { Navbar } from "@/components/ui/navbar";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <SpotlightNewDemo/>
    </div>
  );
}
