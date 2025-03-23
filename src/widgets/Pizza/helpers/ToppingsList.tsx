import { TOPPINGS } from "../../../types/toppings/toppings";
import ToppingProduct from "./ToppingProduct";

export default function ToppingsList() {
  return (
    <div className="px-4">
      <p className="font-semibold text-black text-lg mt-2 mb-2">
        Добавить по вкусу
      </p>
      <div className="flex w-100 gap-2 flex-wrap">
        {TOPPINGS.map((topping, index) => {
          return (
            <ToppingProduct
              key={index}
              name={topping.name}
              image={topping.image}
              price={topping.price}
            />
          );
        })}
      </div>
    </div>
  );
}
