// Shows the little popup listing the additional products the user may want to buy
// [Другие товары | Новинки | Завтрак | Хиты | На компанию | Любят дети]

import { useState } from "react";
import { otherProducts } from "../../../types/widgets/header/otherProducts";
import { ChevronDown } from "lucide-react";

function Popup() {
  return (
    <div className="absolute  w-48 bg-white shadow-lg rounded-lg border z-50">
      <ul className="flex flex-col">
        {otherProducts.map((product) => {
          return Object.entries(product).map((product) => {
            return <li className={`${product[1]}`}>{product[0]}</li>;
          });
        })}
      </ul>
    </div>
  );
}

export default function OtherProducts() {
  const [showPopup, setShowPopup] = useState(false);
  return (
    <div className="relative overflow-visible">
      <li
        onMouseLeave={() => setShowPopup(true)}
        onMouseEnter={() => setShowPopup(true)}
        className={`text-black 2xl:hidden font-semibold text-sm dodo-hover rounded-2xl bg-gray-200 w-18 px-3 py-1 relative bottom-1 hover:bg-gray-100`}
      >
        Ещё
        <span
          className={`${showPopup ? "dodo-hover" : ""} absolute right-2  text-gray-500 2xl:hidden`}
        >
          <ChevronDown size={22} />
        </span>
      </li>
      {showPopup && <Popup />}
    </div>
  );
}
