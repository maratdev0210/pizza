// Display more information about the pizza

import { useEffect, useState } from "react";
import ToppingsList from "./ToppingsList";
import { X } from "lucide-react";
import SizePicking from "./SizePicking";
import DoughPicking from "./DoughPicking";
import { useAppDispatch } from "../../../state/hooks";
import { setOrder } from "../../../state/slices/orderSlice";
import LearnMore from "../../../assets/LearnMore";
import ProductInfo from "../../../features/Product/ProductInfo";

interface IPizzaModal {
  name: string;
  image: string;
  ingridients: string;
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

interface IImageScaleRatio {
  [key: string]: string;
}

const ImageScaleRatio: IImageScaleRatio = {
  "25 см": "scale-150",
  "30 см": "scale-175",
  "35 см": "scale-200",
};

export default function PizzaModal({
  name,
  image,
  ingridients,
  showModal,
  setShowModal,
}: IPizzaModal) {
  const [size, setSize] = useState<string>("25 см"); // pizza size: 25 | 30 | 35
  const [doughType, setDoughType] = useState<string>("Традиционное");
  const [showProductInfo, setShowProductInfo] = useState(false);
  const dispatch = useAppDispatch();

  const addToCart = () => {
    setShowModal(false);
    dispatch(
      setOrder({
        type: "pizza",
        data: {
          image: image,
          name: name,
          quantity: 1,
          dough: doughType,
          size: size,
          weight: "490",
        },
      })
    );
  };

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
                <img
                  src={image}
                  className={`${ImageScaleRatio[size]} transition duration-300 ease-in-out size-60`}
                />
              </div>
              <div className="pl-12 pb-2 pr-1 flex flex-col items-center justify-center w-1/2 rounded-r-2xl rounded-br-2xl bg-gray-50">
                <div className="mt-8 py-8 overflow-auto">
                  <div className="px-4">
                    <div className="flex justify-between relative">
                      <p className="font-semibold text-2xl">{name}</p>
                      <button
                        onClick={() => setShowProductInfo(true)}
                        className="cursor-pointer hover:transition hover:scale-110 hover:duration-200"
                      >
                        <LearnMore />
                      </button>

                      <ProductInfo
                        showModal={showProductInfo}
                        setShowModal={setShowProductInfo}
                      />
                    </div>

                    <span className="text-sm text-gray-400">{size}</span>
                    <span className="text-sm text-gray-400">
                      {", "} {doughType}
                    </span>
                  </div>

                  <div className="px-4 mr-12 mt-6">
                    <SizePicking size={size} setSize={setSize} />
                    <DoughPicking
                      doughType={doughType}
                      setDoughType={setDoughType}
                    />
                  </div>

                  <ToppingsList />
                </div>
                <div className="mt-8 pb-12 w-full pr-12">
                  <button
                    onClick={() => addToCart()}
                    className="text-white text-lg rounded-4xl bg-orange-500 w-full py-3 cursor-pointer hover:bg-orange-700/75 hover:transition hover:duration-200"
                  >
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
