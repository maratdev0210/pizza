// proten, fats, carbs, and other nutrient-related info about the Product

import { PRODUCT_INFO } from "../../types/productInfo/productInfo";
import { useState, useRef, useEffect } from "react";

interface IProductInfo {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function ProductInfo({ showModal, setShowModal }: IProductInfo) {
  const modalRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setShowModal(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [modalRef]);

  return (
    <>
      <div
        ref={modalRef}
        className={`${!showModal ? "hidden" : "transition delay-75 ease-in-out duration-200 absolute z-990 right-0 top-8"}`}
      >
        <div className="w-60 bg-gray-900 px-2 py-2 rounded-lg">
          <p className="text-sm text-gray-500 font-semibold">
            Пищевая ценность на 100 г
          </p>
          <div className="mt-4">
            {PRODUCT_INFO.map((productInfo, index) => {
              return Object.keys(productInfo).map((nutrient, index) => {
                return (
                  <div className="flex justify-between" key={index}>
                    <span className="font-semibold text-sm text-gray-50">
                      {nutrient}
                    </span>
                    <span className="font-semibold text-sm text-gray-50">
                      {productInfo[nutrient]}
                    </span>
                  </div>
                );
              });
            })}
          </div>
          <div className="mt-6">
            <div className="flex justify-between">
              <span className="text-gray-50 font-semibold text-sm">Вес</span>
              <span className="text-gray-50 font-semibold text-sm">640 г</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
