import { cn } from "@/lib/utils"

import building1 from "@/public/building-1.jpg"
import building2 from "@/public/building-2.jpg"
import building3 from "@/public/building-3.jpg"

const MAX_DEPTH_LEVEL = 1;

// How much we cut down the delay for each picture.
const DELAY_MULTIPLIER = 0.25;

// How much we add to the delay for each level.
const DELAY_THRESHOLD_IN_SECONDS = 0.75;

interface PictureGridProps {
  level?: number
}

/**
 * This component is used to display the picture grid in the hero section.
 * This is a recursive component, which we hard limit to just two levels of depth.
 * This means, in the heaviest case, we'll have a main layout with 3 pictures,
 * and a nested layout with 3 pictures too, in the place of the first picture.
 */
export default function PictureGrid({ level = MAX_DEPTH_LEVEL }: PictureGridProps) {
  let pictureSources = [
    building1,
    building2,
    building3,
  ]

  // Every level of depth re-arranges the pictures,
  // Sending the first picture to the end of the array.
  if (level !== MAX_DEPTH_LEVEL) {
    // Move first element to the end
    const first = pictureSources.shift()

    if (first) {
      pictureSources.push(first)
    }
  }

  return (
    <div
      className={cn(
        // We decrease the columns' gap as we go deeper.
        "max-w-[43.25rem] max-h-[48rem] w-full h-full flex",
        level === MAX_DEPTH_LEVEL ? "gap-4" : "gap-2"
      )}
    >
      <div
        className={cn(
          "max-w-[18em] w-full h-full flex flex-col",
          level === MAX_DEPTH_LEVEL ? "gap-4" : "gap-2"
        )}
      >
        <div className="h-2/5 w-full">
          {
            // Here is where we show the component's recursivity.
            // Each level decreases the next one's depth limit.
            level !== 0 && <PictureGrid level={level - 1} />
          }
        </div>

        <div className="h-3/5 w-full overflow-hidden">
          <PictureGridElement
            index={2}
            level={level}
            src={pictureSources[2].src}
            className="object-cover scale-115"
          />
        </div>
      </div>

      <div
        className={cn(
          "max-w-[24.1875em] w-full h-full flex flex-col",
          level === MAX_DEPTH_LEVEL ? "gap-4" : "gap-2"
        )}
      >
        <div className="h-2/3 w-full overflow-hidden">
          <PictureGridElement
            index={0}
            level={level}
            src={pictureSources[0].src}
            className="object-[65%] scale-105"
          />
        </div>

        <div className="h-1/3 w-full overflow-hidden">
          <PictureGridElement
            index={1}
            level={level}
            src={pictureSources[1].src}
            className="object-[0_15%] scale-150 transform translate-x-8"
          />
        </div>
      </div>
    </div>
  )
}

// We add a 0.25s delay for each picture.
// Each deeper level adds 1s to the delay.
const calculateAnimationDelay = (index: number, level: number) => {
  if (level === MAX_DEPTH_LEVEL) return index * DELAY_MULTIPLIER;

  return (index * DELAY_MULTIPLIER) + DELAY_THRESHOLD_IN_SECONDS;
}

interface PictureGridElementProps {
  src: string
  index?: number
  level?: number
  className?: string
}

/**
 * This is a component used to display a picture in the picture grid.
 * It allows to pass custom class names,
 * as every picture needs different adjustments.
 * 
 * We use the picture's index as well as the grid's current level to
 * calculate the animation delay and final opacity.
 */
function PictureGridElement({
  src,
  index = 1,
  level = MAX_DEPTH_LEVEL,
  className
}: PictureGridElementProps) {
  const animationDelay = calculateAnimationDelay(index, level)

  return (
    <img
      src={src}
      style={{
        animationDelay: `${animationDelay}s`,
        "--final-opacity": level === MAX_DEPTH_LEVEL ? 1 : 0.4,
      } as React.CSSProperties}
      className={cn(
        "opacity-0 w-full h-full object-cover animate-picture-grid",
        className
      )}
    />
  )
}