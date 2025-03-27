// shows the product cart on the page: Pizza, Snacks, and others..

import { useState } from "react";
import { useAppDispatch } from "../../state/hooks";
import { setOrder } from "../../state/slices/orderSlice";
import NewItem from "../../assets/NewItem";

interface IProductCard {
  type: string; // | Snacks | Drink, etc.
  name: string;
  image: string;
  ingridients: string;
  isNew: boolean;
  isOutOfStock: boolean;
}

export default function ProductCard({
  type,
  name,
  image,
  ingridients,
  isNew,
  isOutOfStock,
}: IProductCard) {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useAppDispatch();

  const addToCart = () => {
    dispatch(
      setOrder({
        type: type,
        data: {
          image: image,
          name: name,
          quantity: 1,
          weight: "290",
        },
      })
    );
  };

  return (
    <>
      <div
        onClick={() => setShowModal(true)}
        className="w-72 h-auto flex flex-col justify-between mt-12 cursor-pointer"
      >
        <div>
          <div className="flex justify-center relative">
            <img
              src={image}
              className="size-60 scale-105 block hover:transition hover:duration-300 hover:ease-in-out hover:translate-y-1"
              alt={name}
            />
            {isNew && <NewItem />}
          </div>
          <div>
            <p className="text-black text-xl font-semibold">{name}</p>
          </div>
          <div>
            <div className="mt-2">
              <span className="text-gray-400 text-sm">{ingridients}</span>
            </div>
          </div>
        </div>
        <div className="pt-8">
          <div className="flex justify-between items-center">
            <span className="font-semibold">от 219 ₽</span>
            <button
              onClick={() => addToCart()}
              className="text-orange-500 cursor-pointer font-semibold bg-orange-200/25 hover:transition hover:duration-200 hover:bg-orange-200/50 px-2 py-2 rounded-4xl w-28"
            >
              В корзину
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
