"use client";

import { useState } from "react";
import { Popover, PopoverContent, PopoverPortal, PopoverTrigger } from "@radix-ui/react-popover";

import SearchIcon from "../icons/search-icon";
import { cn } from "@/lib/utils";

type PropertySearchLabel = "Buy" | "Rent";

interface PropertySearchProps {
  label: PropertySearchLabel;
}

const propertySearchOptions = [
  {
    label: "Location",
    value: "Long Beach, California"
  },
  {
    label: "Property Type",
    value: "House & Villa"
  },
  {
    label: "Price",
    value: "Advance"
  }
]

export default function PropertySearch({ label }: PropertySearchProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <button className={
          cn("py-3 px-8 font-semibold text-typography-secondary bg-action-background", isOpen && "bg-white border-gradient-primary")
        }>

          {label}
        </button>
      </PopoverTrigger>

      <PopoverPortal>
        <PopoverContent
          align="start"
          alignOffset={label === "Rent" ? -95 : 0 }
          className="pl-8 pr-3 py-4 w-[47.625rem] flex items-center justify-between bg-white drop-shadow-[10px_0px_40px_rgba(0,0,0,0.15)]"
        >
          {propertySearchOptions.map((option) => (
            <div className="flex items-center gap-x-9">
              <div key={option.label} className="flex flex-col gap-y-7">
                <p className="text-base font-semibold text-typography-primary leading-[14px] tracking-[0.3px]">{option.label}</p>
                <p className="text-[15px] font-normal text-typography-secondary leading-[14px] tracking-[0.3px]">{option.value}</p>
              </div>

              <div className="w-[1px] h-[100px] bg-typography-tertiary" />
            </div>
          ))}

          <button className="p-7 flex flex-col gap-y-3 items-center bg-gradient-primary">
            <SearchIcon />
            <span className="text-white opacity-80">Search</span>
          </button>
        </PopoverContent>
      </PopoverPortal>
    </Popover>
  )
}