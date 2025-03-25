import { products, productsLinks } from "../../types/widgets/header/header";
import logo from "../../../public/logo.svg";
import OtherProducts from "./helpers/OtherProducts";
import PizzeriaInfo from "./PizzeriaInfo";
import { useState } from "react";
import { useAppSelector } from "../../state/hooks";
import { selectedCity } from "../../state/slices/citiesSlice";
import CartButton from "./helpers/CartButton";

export default function Header() {
  const [sticky, setSticky] = useState(false);
  const city = useAppSelector(selectedCity);

  window.addEventListener("scroll", () => {
    setSticky(window.scrollY >= 100);
  });

  return (
    <>
      <PizzeriaInfo city={city} />
      <div
        className={`${sticky ? "fixed -top-5 z-10 bg-white/75 shadow-xl" : ""} dodo-padding-left w-full`}
      >
        <div className={`mt-4 flex items-center justify-between`}>
          <nav
            className={`flex w-full  h-15 backdrop-blur-xl items-center overflow-auto md:overflow-hidden`}
          >
            <img
              src={logo}
              className={`${sticky ? "animate-logo-appear opacity-100" : "animate-logo-disappear"} relative size-9`}
            />
            <ul
              className={`${sticky ? "ease-in-out translate translate-x-5" : "translate -translate-x-8"} overflow-visible duration-500 flex gap-5`}
            >
              {products.map((product) => {
                return Object.entries(product).map((product, index) => {
                  return (
                    <li
                      className={`${product[1]} text-black font-semibold text-sm dodo-hover`}
                    >
                      <a href={productsLinks[index]}>{product[0]}</a>
                    </li>
                  );
                });
              })}
              <OtherProducts />
            </ul>
          </nav>
          <CartButton />
        </div>
      </div>
    </>
  );
}
