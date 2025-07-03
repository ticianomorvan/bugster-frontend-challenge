import { cn } from "@/lib/utils";
import building1 from "@/public/building-1.jpg"
import building2 from "@/public/building-2.jpg"
import building3 from "@/public/building-3.jpg"

const MAX_DEPTH_LEVEL = 1;

// We add a 0.25s delay for each picture.
// Each deeper level adds 1s to the delay.
const calculateAnimationDelay = (index: number, level: number) => {
  if (level === MAX_DEPTH_LEVEL) {
    return index > 0 ? index * 0.25 : index;
  };

  return index * 0.25 + MAX_DEPTH_LEVEL;
}

interface PictureGridProps {
  level?: number
}

export default function PictureGrid({ level = MAX_DEPTH_LEVEL }: PictureGridProps) {
  let pictureSources = [
    building1,
    building2,
    building3,
  ]

  if (level !== MAX_DEPTH_LEVEL) {
    // Move first element to the end
    const first = pictureSources.shift()

    if (first) {
      pictureSources.push(first)
    }
  }

  const pictureTags = [
    <img
      alt="building-1"
      src={pictureSources[0].src}
      style={{ animationDelay: `${calculateAnimationDelay(0, level)}s` }}
      className={cn("w-full h-full object-cover object-[65%] scale-105", level === MAX_DEPTH_LEVEL ? "animate-fade-in" : "animate-translucent-fade-in")}
    />,
    <img
      alt="building-2"
      src={pictureSources[1].src}
      style={{ animationDelay: `${calculateAnimationDelay(1, level)}s` }}
      className={cn("w-full h-full object-cover object-[0_15%] scale-150 transform translate-x-8", level === MAX_DEPTH_LEVEL ? "animate-fade-in" : "animate-translucent-fade-in")}
    />,
    <img
      alt="building-3"
      src={pictureSources[2].src}
      style={{ animationDelay: `${calculateAnimationDelay(2, level)}s` }}
      className={cn("w-full h-full object-cover scale-115", level === MAX_DEPTH_LEVEL ? "animate-fade-in" : "animate-translucent-fade-in")}
    />
  ]
  
  return (
    <div className="max-w-[43.25rem] max-h-[48rem] w-full h-full flex gap-4">
      <div className="max-w-[18em] w-full h-full flex flex-col gap-4">
        <div className="h-2/3 w-full">
          {level !== 0 && <PictureGrid level={level - 1} />}
        </div>
        <div className="h-11/12 w-full overflow-hidden">
          {pictureTags[2]}
        </div>
      </div>

      <div className="max-w-[24.1875em] w-full h-full flex flex-col gap-4">
        <div className="h-2/3 w-full overflow-hidden">
          {pictureTags[0]}
        </div>
        <div className="h-1/3 w-full overflow-hidden">
          {pictureTags[1]}
        </div>
      </div>
    </div>
  )
}