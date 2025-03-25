// radio buttons section with 3 different pizza sizes
// 25 | 30 | 35 centimeters

import React, { useState, useEffect } from "react";

interface IPizzaSize {
  size: string;
}

interface ISizeProps {
  size: string;
  setSize: React.Dispatch<React.SetStateAction<string>>;
}

const PizzaSizes: IPizzaSize[] = [
  {
    size: "25 см",
  },
  {
    size: "30 см",
  },
  {
    size: "35 см",
  },
];

const SizeChangeAnimations: string[] = [
  "",
  "animate-size-change-smallMedium",
  "animate-size-change-mediumLarge",
  "animate-size-change-largeMedium",
  "animate-size-change-mediumSmall",
  "animate-size-change-smallLarge",
  "animate-size-change-largeSmall",
];

// choose the animation based on what size has been chosen
function chooseAnimation(size: string, previousSize: string): number {
  if (size == "30 см" && previousSize == "25 см") {
    return 1;
  }
  if (size == "35 см" && previousSize == "30 см") {
    return 2;
  }
  if (size == "30 см" && previousSize == "35 см") {
    return 3;
  }
  if (size == "25 см" && previousSize == "30 см") {
    return 4;
  }
  if (size == "35 см" && previousSize == "25 см") {
    return 5;
  }
  if (size == "25 см" && previousSize == "35 см") {
    return 6;
  }
  return 0; // do not show any animation, because the user clicked on the same size again
}

export default function SizePicking({ size, setSize }: ISizeProps) {
  //const [size, setSize] = useState("25 см"); // default value
  const [previousSize, setPreviousSize] = useState("25 см"); // previous size helps with choosing the right animations
  const [animation, setAnimation] = useState(0);

  useEffect(() => {
    setAnimation(chooseAnimation(size, previousSize));
  }, [size]);

  const handleSizePicking = (pickedSize: string) => {
    setPreviousSize(size);
    setSize(pickedSize);
  };

  return (
    <div className="rounded-full p-0.5 bg-gray-100 h-9 relaitve flex overflow-hidden mb-2 top-4">
      <div className="relative">
        <div
          className={`${SizeChangeAnimations[animation]} custom-radio w-28 translate-x-0 left-1`}
        ></div>
      </div>

      {PizzaSizes.map((size) => {
        return (
          <>
            <input
              className="absolute hidden"
              type="radio"
              name={size.size}
              value={size.size}
            />
            <label
              className="block text-center relaive cursor-pointer rounded-full text-xs z-100 radio-style"
              onClick={() => handleSizePicking(size.size)}
              htmlFor={size.size}
            >
              {size.size}
            </label>
          </>
        );
      })}
    </div>
  );
}
