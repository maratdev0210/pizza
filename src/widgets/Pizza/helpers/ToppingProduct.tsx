interface IToppingProduct {
  name: string;
  image: string;
  price: number;
}

import SelectedTopping from "../../../assets/SelectedTopping";
import { useState } from "react";

export default function ToppingProduct({
  name,
  image,
  price,
}: IToppingProduct) {
  const [isSelectedTopping, setIsSelectedTopping] = useState(false);
  return (
    <div
      onClick={() => setIsSelectedTopping(!isSelectedTopping)}
      className={`${isSelectedTopping ? "border-1 border-orange-500 " : ""} flex flex-col justify-between cursor-pointer relative topping-shadow rounded-xl w-28 px-1 py-2`}
    >
      {isSelectedTopping && <SelectedTopping />}
      <div>
        <img src={image} />
      </div>
      <p className="text-sm text-black">{name}</p>
      <p className="text-black font-semibold mt-2 text-center">
        {price}
        <span>₽</span>
      </p>
    </div>
  );
}
