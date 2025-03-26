// shows non-empty order in the cart
import { X } from "lucide-react";
import { RemoveOne, AddOne } from "../../../assets/Controls";
import { useState, useEffect, useRef } from "react";
import InfoIcon from "../../../assets/InfoIcon";
import DodoCoins from "../../../assets/DodoCoins";

interface IProduct {
  image: string;
  name: string;
  quantity: number;
  dough?: string;
  size?: string;
  weight?: string;
  orderSize: number;
  setOrderSize: React.Dispatch<React.SetStateAction<number>>; // when the product is being removed from the cart order size decreases by one
  ref: React.RefObject<null>;
}

function Product({
  image,
  name,
  quantity,
  dough,
  size,
  weight,
  orderSize,
  setOrderSize,
  ref,
}: IProduct) {
  const [productQuantity, setProductQuantity] = useState(1);
  const [isProductRemoved, setIsProductRemoved] = useState(false);

  useEffect(() => {
    if (isProductRemoved) {
      setOrderSize(orderSize - 1);
    }
  }, [isProductRemoved]);

  return (
    <div
      ref={ref}
      className={`${isProductRemoved ? "animate-product-lift" : ""} bg-white w-full px-4 mb-2 relative cursor-pointer`}
    >
      <span>
        <X
          onClick={() => setIsProductRemoved(true)}
          className="size-5 absolute right-2 top-2"
        />
      </span>
      <div className="flex gap-4 border-solid border-b-1 border-gray-200 py-2">
        <img className="size-18" src={image} alt={name} />
        <div className="w-1/2">
          <p className="text-black font-semibold">{name}</p>
          {dough && (
            <p className="text-gray-400 text-sm">
              {size}
              <span>, </span>
              <span>{dough}</span>
              <span className="pl-2">тесто</span>
            </p>
          )}
        </div>
      </div>
      <div className="py-4 flex justify-between">
        <div>
          <span className="text-black font-semibold">1 718 ₽</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-orange-500 font-semibold hover:transition hover:duration-100 hover:text-orange-700/75 block">
            Изменить
          </span>
          <div className="w-24 h-8 flex bg-gray-200 justify-between rounded-3xl cursor-pointer">
            <button
              onClick={
                () => setProductQuantity(Math.max(1, productQuantity - 1)) // does not allow user to enter the number below 1
              }
              className="flex w-9 items-center justify-center"
            >
              <RemoveOne />
            </button>
            <div className="flex justify-center items-center w-7 text-gray-800 font-semibold">
              {productQuantity}
            </div>
            <button
              onClick={() => setProductQuantity(productQuantity + 1)}
              className="flex w-9 items-center justify-center"
            >
              <AddOne />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function CartOrder({ setIsCartEmpty, order }) {
  const productsRef = useRef(null);
  const [orderSize, setOrderSize] = useState(order.length - 1);
  const [isPromoActive, setIsPromoActive] = useState(false);

  useEffect(() => {
    if (orderSize != order.length - 1) {
      productsRef.current.style.transform = "translateY(-160px)";
      productsRef.current.style.transition = "700ms ease-in-out";
    }
    if (orderSize <= 0) {
      setIsCartEmpty(true);
    }
  }, [orderSize]);

  return (
    <div className=" py-4 bg-gray-100 w-120  h-[100vh] relative">
      <div className="px-4">
        <p className="text-2xl text-black font-semibold">
          {order.length - 1}
          <span className="pl-2">товар на 1 718 ₽</span>
        </p>
      </div>
      <div className="mt-8 overflow-auto h-[50vh]">
        {order.slice(1, order.length).map((product) => {
          return (
            <Product
              {...product.data}
              orderSize={orderSize}
              setOrderSize={setOrderSize}
              ref={productsRef}
            />
          );
        })}
      </div>
      <div className="absolute bottom-0 px-4 w-full">
        <div className="py-2 border-b-1 border-b-gray-300 relative">
          <input
            type="text"
            onFocus={() => setIsPromoActive(true)}
            onBlur={() => setIsPromoActive(false)}
            className="text-black placeholder-gray-300 text-lg font-semibold focus:outline-none"
            placeholder="Промокод"
          />
          {isPromoActive && (
            <span className="text cursor-pointer text-orange-500/90 absolute right-4">
              Применить
            </span>
          )}
        </div>
        <div className="py-2 border-b-1 border-b-gray-300">
          <div className="flex justify-between items-center">
            <div className="flex flex-col gap-1">
              <div>
                <span className="text-sm font-semibold text-black">
                  {order.length - 1}
                </span>
                <span className="ml-1 text-sm font-semibold text-black inline-block">
                  товара
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-black font-semibold">
                  Начислим додокоины
                </span>
                <span className="hover:transition hover:duration-200 hover:scale-125">
                  <InfoIcon />
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-sm font-semibold text-black">1 718 ₽</span>
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-black">+99</span>
                <span className="scale-50">
                  <DodoCoins fill="#000" />
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="py-2 flex justify-between items-center">
          <p className="text font-semibold text-black">Сумма заказа</p>
          <p className="text font-semibold text-black">1 718 ₽</p>
        </div>
        <button className="w-full cursor-pointer rounded-3xl text-white h-12 mb-6 mt-2 bg-orange-500 hover:bg-orange-700/75 hover:transition hover:duration-200">
          К оформлению заказа
        </button>
      </div>
    </div>
  );
}

// TO-DO: Add the state logic for removing products from the cart
