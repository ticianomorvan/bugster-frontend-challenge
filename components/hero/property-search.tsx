"use client";

import { useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverPortal,
  PopoverTrigger,
} from "@radix-ui/react-popover";

import { cn } from "@/lib/utils";

import CaretIcon from "../icons/caret-icon";
import SearchIcon from "../icons/search-icon";

type PropertySearchLabel = "Buy" | "Rent";

const POPOVER_ALIGN_OFFSET: Record<PropertySearchLabel, number> = {
  Buy: 0,
  Rent: -95,
}

interface PropertySearchProps {
  label: PropertySearchLabel;
}

/**
 * This component is used to display the property search
 * options in the hero section. It will display a popover
 * when the user hovers over the button.
 * 
 * We're currently showing the same popover for each option
 * as we don't have more context on the options.
 */
export default function PropertySearch({ label }: PropertySearchProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const alignOffset = POPOVER_ALIGN_OFFSET[label];

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <button
          className={cn(
            "py-3 px-8 relative z-10 font-semibold text-spacial-grey bg-soft-grey transition duration-150",
            isOpen && "bg-white"
          )}
        >
          {label}

          <div
            className={cn(
              "absolute w-[75px] h-0.5 transform scale-0 -translate-x-[20px] translate-y-2 bg-gradient-primary transition duration-150",
              isOpen && "scale-100"
            )}
          />
        </button>
      </PopoverTrigger>

      <PopoverPortal>
        <PopoverContent
          align="start"
          alignOffset={alignOffset}
          className="w-[47.625rem] pl-8 pr-3 py-4 flex items-center justify-between bg-white drop-shadow-[10px_0px_40px_rgba(0,0,0,0.15)] data-[state=open]:animate-in data-[state=open]:fade-in data-[state=closed]:animate-out data-[state=closed]:fade-out"
        >
          <PropertySearchOption label="Location" value="Long Beach, California" />

          <PropertySearchOptionSeparator />

          <PropertySearchOption label="Property Type" value="House & Villa" withSelect />

          <PropertySearchOptionSeparator />

          <PropertySearchOption label="Price" value="Advance" withSelect />

          <button className="p-[28px] flex flex-col gap-y-4 items-center bg-gradient-primary cursor-pointer">
            <SearchIcon />
            <p className="text-white opacity-80">Search</p>
          </button>
        </PopoverContent>
      </PopoverPortal>
    </Popover>
  )
}

interface PropertySearchOptionProps {
  label: string;
  value: string;
  withSelect?: boolean
}

function PropertySearchOption({ label, value, withSelect = false }: PropertySearchOptionProps) {
  return (
    <div className="flex flex-col gap-y-7">
      <span className="flex items-center gap-x-2.5">
        <p className="text-base font-semibold text-dark-grey leading-[14px] tracking-[0.3px]">{label}</p>
        {withSelect && <CaretIcon />}
      </span>

      <p className="text-[15px] font-normal text-spacial-grey leading-[14px] tracking-[0.3px]">{value}</p>
    </div>
  )
}

function PropertySearchOptionSeparator() {
  return <div className="w-[1px] h-[100px] bg-light-grey" />;
}