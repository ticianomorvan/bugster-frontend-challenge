import Image from "next/image"

import building1 from "@/public/building-1.jpg"
import building2 from "@/public/building-2.jpg"
import building3 from "@/public/building-3.jpg"

interface PictureGridProps {
  level?: number
}

export default function PictureGrid({ level = 1 }: PictureGridProps) {
  let pictureSources = [
    building1,
    building2,
    building3,
  ]

  if (level !== 1) {
    // Move first element to the end
    const first = pictureSources.shift()

    if (first) {
      pictureSources.push(first)
    }
  }

  const pictureTags = [
    <img src={pictureSources[0].src} alt="building-1" className="w-full h-full object-cover object-[65%] scale-105" />,
    <img src={pictureSources[1].src} alt="building-2" className="w-full h-full object-cover object-[0_15%] scale-150 transform translate-x-8" />,
    <img src={pictureSources[2].src} alt="building-3" className="w-full h-full object-cover scale-115" />
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