import { products } from "../../types/widgets/header/header";
import logo from "../../../public/logo.svg";
import OtherProducts from "./helpers/OtherProducts";
import PizzeriaInfo from "./PizzeriaInfo";
import CartPopup from "./helpers/CartPopup";
import { useState } from "react";

export default function Header() {
  const [sticky, setSticky] = useState(false);
  const [showCart, setShowCart] = useState(false);

  window.addEventListener("scroll", () => {
    setSticky(window.scrollY >= 100);
  });

  return (
    <>
      <PizzeriaInfo city="Королев" />
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
                return Object.entries(product).map((product) => {
                  return (
                    <li
                      className={`${product[1]} text-black font-semibold text-sm dodo-hover`}
                    >
                      {product[0]}
                    </li>
                  );
                });
              })}
              <OtherProducts />
            </ul>
          </nav>
          <button
            onClick={() => setShowCart(true)}
            className="bg-orange-500 text-white tracking-wide py-2 rounded-3xl w-25 hover:cursor-pointer hover:transition hover:duration-1000 hover:bg-orange-700/75"
          >
            Корзина
          </button>
          <CartPopup showCart={showCart} setShowCart={setShowCart} />
        </div>
      </div>
    </>
  );
}
