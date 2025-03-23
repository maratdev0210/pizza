// Display more information about the pizza
interface IPizzaModal {
  name: string;
  image: string;
  ingridients: string[];
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

import { useEffect, useState } from "react";
import ToppingsList from "./ToppingsList";
import { X } from "lucide-react";

export default function PizzaModal({
  name,
  image,
  ingridients,
  showModal,
  setShowModal,
}: IPizzaModal) {
  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [showModal]);

  return (
    <>
      {showModal && (
        <div className="fixed inset-0 flex justify-center items-center z-250 bg-black/70">
          <div className="w-2/3 absolute">
            <span className="absolute pl-3 right-0 translate-x-full pt-8 ">
              <X
                onClick={() => setShowModal(false)}
                className="cursor-pointer size-11 p-2 bg-white rounded-full hover:scale-115 hover:transition hover:duration-150 hover:ease-in-out"
              />
            </span>
            <div className="flex justify-center h-[80vh] w-full">
              <div className="flex w-full justify-center items-center rounded-l-2xl rounded-bl-2xl bg-white">
                <img src={image} className="size-60 scale-200" />
              </div>
              <div className="pl-12 pb-2 pr-1 flex flex-col items-center justify-center w-1/2 rounded-r-2xl rounded-br-2xl bg-gray-50">
                <div className="mt-8 py-8 overflow-auto">
                  <p className="px-4 font-semibold text-2xl">{name}</p>
                  <ToppingsList />
                </div>
                <div className="mt-8 pb-12 w-full pr-12">
                  <button className="text-white text-lg rounded-4xl bg-orange-500 w-full py-3 cursor-pointer hover:bg-orange-700/75 hover:transition hover:duration-200">
                    В корзину
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
