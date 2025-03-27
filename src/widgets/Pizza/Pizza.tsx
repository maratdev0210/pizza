// Section of a website with pizza buying options

import PizzaCard from "./helpers/PizzaCard";
import { PIZZAS } from "../../types/pizzas/pizzas";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import ProductCard from "../../features/Product/ProductCard";

export default function Pizza() {
  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  // change the color of the header links
  useEffect(() => {
    if (inView) {
      document.querySelector(".pizzaScroll")?.classList.replace("off", "on");
    } else {
      document.querySelector(".pizzaScroll")?.classList.replace("on", "off");
    }
  }, [inView]);

  return (
    <div id="pizza" ref={ref} className="dodo-padding-left mt-40">
      <h2 className="text-black font-bold text-4xl">Пиццы</h2>
      <div className="grid grid-cols-4 mt-8">
        {PIZZAS.map((pizza, index) => {
          return (
            <ProductCard
              type="pizza"
              key={index}
              name={pizza.name}
              image={pizza.src}
              ingridients={pizza.ingridients[0]}
            />
          );
        })}
      </div>
    </div>
  );
}
