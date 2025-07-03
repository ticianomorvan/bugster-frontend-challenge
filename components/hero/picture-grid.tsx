import Image from "next/image"

import building1 from "@/public/building-1.jpg"
import building2 from "@/public/building-2.jpg"
import building3 from "@/public/building-3.jpg"

const pictureSources = [
  building1,
  building2,
  building3,
]

interface PictureGridProps {
  level?: number
}

export default function PictureGrid({ level = 1 }: PictureGridProps) {
  return (
    <>
      <div className="w-[18em] h-[720px] grid grid-cols-1 grid-rows-2">
        <div className="h-full w-full">
          {level === 1 && <PictureGrid level={0} />}
        </div>

        <div className="h-[27.125em] overflow-hidden">
          <Image src={pictureSources[2]} alt="lower-left-picture" className="relative w-full h-full object-cover scale-115" />
        </div>
      </div>

      <div className="max-w-[24.1875em] h-full flex flex-col gap-y-4">
        <div className="w-full h-[31.4375em] overflow-hidden">
          <Image src={pictureSources[0]} alt="upper-right-picture" className="relative w-full h-full object-cover object-[65%] scale-105" />
        </div>

        <div className="overflow-hidden">
          <Image src={pictureSources[1]} alt="upper-right-picture" className="relative h-full object-cover transform translate-x-8 scale-150" />
        </div>
      </div>
    </>
  )
}