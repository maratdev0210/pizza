// Section of a website with pizza buying options

import PizzaCard from "./helpers/PizzaCard";
import { PIZZAS } from "../../types/pizzas/pizzas";

export default function Pizza() {
  return (
    <div className="dodo-padding-left mt-40">
      <h2 className="text-black font-bold text-4xl">Пиццы</h2>
      <div className="flex w-full justify-center gap-8  flex-wrap mt-8">
        {PIZZAS.map((pizza, index) => {
          return (
            <PizzaCard
              key={index}
              name={pizza.name}
              image={pizza.src}
              ingridients={pizza.ingridients}
            />
          );
        })}
      </div>
    </div>
  );
}
