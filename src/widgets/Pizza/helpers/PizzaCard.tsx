import { useState } from "react";
import PizzaModal from "./PizzaModal";

interface IPizzaCard {
  name: string;
  image: string;
  ingridients: string[];
}

export default function PizzaCard({ name, image, ingridients }: IPizzaCard) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div
        onClick={() => setShowModal(true)}
        className="w-72 h-auto flex flex-col justify-between mt-12 cursor-pointer"
      >
        <div>
          <div className="flex justify-center">
            <img
              src={image}
              className="size-60  scale-105 block hover:transition hover:duration-300 hover:ease-in-out hover:translate-y-1"
              alt={name}
            />
          </div>
          <div>
            <p className="text-black text-xl font-semibold">{name}</p>
          </div>
          <div className="mt-2">
            <span className="text-gray-400 text-sm">{ingridients}</span>
          </div>
        </div>
        <div className="pt-8">
          <div className="flex justify-between items-center">
            <span className="font-semibold">от 519 ₽</span>
            <button className="text-orange-500 cursor-pointer font-semibold bg-orange-200/25 hover:transition hover:duration-200 hover:bg-orange-200/50 px-2 py-2 rounded-4xl w-28">
              Выбрать
            </button>
          </div>
        </div>
      </div>

      <PizzaModal
        name={name}
        image={image}
        ingridients={ingridients}
        showModal={showModal}
        setShowModal={setShowModal}
      />
    </>
  );
}
