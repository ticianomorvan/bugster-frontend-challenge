"use client"

import TypeIt from "typeit"
import { useRef } from "react";

import PlusIcon from "../icons/plus-icon";

export default function AddPropertyButton() {
  const textRef = useRef<HTMLSpanElement>(null);
  const isAnimating = useRef<boolean>(false);
  const typeitInstance = useRef<TypeIt | null>(null);

  const handleMouseEnter = () => {
    if (isAnimating.current) return;

    // We destroy the instance to prevent
    // multiple animations from being triggered.
    if (typeitInstance.current) {
      typeitInstance.current.destroy();
      typeitInstance.current = null;
    }

    // We start the animation, by clearing the text
    // and asynchronously creating a new instance.
    if (textRef.current) {
      isAnimating.current = true;
      textRef.current.textContent = "";

      typeitInstance.current = new TypeIt(textRef.current, {
        speed: 50,
        cursor: false,
        strings: "Add Property",
        waitUntilVisible: false,
        afterComplete: () => {
          isAnimating.current = false;
        },
      }).go();
    }
  };

  const handleMouseLeave = () => {
    // We return early so we don't cut the animation.
    if (isAnimating.current) return;

    // We destroy the instance to prevent
    // multiple animations from being triggered.
    if (typeitInstance.current) {
      typeitInstance.current.destroy();
      typeitInstance.current = null;
    }

    // We reset the text to the original value.
    if (textRef.current) {
      textRef.current.textContent = "Add Property";
    }

    isAnimating.current = false;
  };

  return (
    <button
      className="px-4 py-3 w-42 flex items-center gap-x-1 text-white bg-gradient-primary drop-shadow-[0_4px_10px_rgba(0,0,0,0.2)]"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <PlusIcon />

      <span ref={textRef} className="font-medium">
        Add Property
      </span>
    </button>   
  )
}