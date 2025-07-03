import { Popover, PopoverContent, PopoverPortal, PopoverTrigger } from "@radix-ui/react-popover";
import SearchIcon from "../icons/search-icon";

interface PropertySearchProps {
  label: string;
}

export default function PropertySearch({ label }: PropertySearchProps) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <button>
          {label}
        </button>
      </PopoverTrigger>

      <PopoverPortal>
        <PopoverContent className="w-[47.625rem] bg-white will-change-[transform,opacity] flex items-center">
          <div>
            <p>Location</p>
            <p>Long Beach, California</p>
          </div>

          <div>
            <p>Property Type</p>
            <p>House & Villa</p>
          </div>

          <div>
            <p>Price</p>
            <p>Advance</p>
          </div>

          <button>
            <SearchIcon />
            Search
          </button>
        </PopoverContent>
      </PopoverPortal>
    </Popover>
  )
}