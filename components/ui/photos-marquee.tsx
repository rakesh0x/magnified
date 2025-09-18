import { cn } from "@/lib/utils";
import { Marquee } from "../ui/marquee";
import Image from "next/image"

const photos = [
  {
    img: "/first.jpg",
  },
  {
    img: "/second.jpg",
  },
  {
    img: "/third.jpg",
  },
  {
    img: "/fourth.jpg",
  },
  {
    img: "/fifth.jpg",
  },
  {
    img: "/sixth.jpg",
  },
  {
    img: "/seventh.jpg"
  },
  {
    img: "/eigtt.jpg"
  },
  {
    img: "/nine.jpg"
  },
  {
    img: "/ten.jpg"
  },
];

const firstRow = photos.slice(0, photos.length);

const ReviewCard = ({
  img,
}: {    
  img: string;
}) => {
  return (
    <figure
      className={cn(
        "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="w-full h-full object-cover rounded-xl" alt="" src={img} />
        
      </div>
      
    </figure>
  );
};

export function MarqueeDemo() {
  return (
    <div className="relative flex flex-col items-center justify-center overflow-hidden max-w-7xl mx-auto">
      <div className="relative">
        <Marquee pauseOnHover className="[--duration:20s]">
          {firstRow.map((review) => (
            <ReviewCard key={review.img} {...review} />
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
      </div>
    </div>
  );
}
