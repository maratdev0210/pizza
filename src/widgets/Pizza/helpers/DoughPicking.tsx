// pick the type of pizza's dough
// either thin or traditional one

import { useState, useEffect } from "react";

interface IDoughPicking {
  doughType: string;
  setDoughType: React.Dispatch<React.SetStateAction<string>>;
}

const DOUGH_TYPE: string[] = ["Традиционное", "Тонкое"];

const TypeChangeAnimations: string[] = [
  "",
  "animate-type-change-tradThin",
  "animate-type-change-thinTrad",
];

function chooseAnimation(doughType: string, previousType: string): number {
  if (doughType == "Тонкое" && previousType == "Традиционное") {
    return 1;
  }
  if (doughType == "Традиционное" && previousType == "Тонкое") {
    return 2;
  }
  return 0; // do not show any animation, because the user clicked on the same size again
}

export default function DoughPicking({
  doughType,
  setDoughType,
}: IDoughPicking) {
  const [previousType, setPreviousType] = useState("Традиционное"); // dough type that is set by default for all pizzas
  const [animation, setAnimation] = useState(0);

  useEffect(() => {
    setAnimation(chooseAnimation(doughType, previousType));
  }, [doughType]);

  const handleTypePicking = (pickedType: string) => {
    setPreviousType(doughType);
    setDoughType(pickedType);
  };

  return (
    <div className="rounded-full p-0.5 bg-gray-100 h-9 relaitve flex overflow-hidden mb-8 top-1">
      <div className="relative">
        <div
          className={`${TypeChangeAnimations[animation]} custom-radio w-42 translate-x-0 left-1`}
        ></div>
      </div>

      {DOUGH_TYPE.map((type) => {
        return (
          <>
            <input
              className="absolute hidden"
              type="radio"
              name={type}
              value={type}
            />
            <label
              className="block text-center relaive cursor-pointer rounded-full text-xs z-100 radio-style"
              onClick={() => handleTypePicking(type)}
              htmlFor={type}
            >
              {type}
            </label>
          </>
        );
      })}
    </div>
  );
}
