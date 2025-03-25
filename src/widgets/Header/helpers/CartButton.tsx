import CartPopup from "./CartPopup";
import { useState } from "react";
import { useAppSelector } from "../../../state/hooks";
import { selectedOrder } from "../../../state/slices/orderSlice";
import CartArrow from "../../../assets/CartArrow";

interface ICartAction {
  isCartHovered: boolean;
  orderSize: number;
}

function CartAction({ isCartHovered, orderSize }: ICartAction) {
  return (
    <>
      <span className="border-l-1 border-white/75 text-lg inline-block ml-2 px-2">
        {isCartHovered ? <CartArrow /> : orderSize}
      </span>
    </>
  );
}

export default function CartButton() {
  const [showCart, setShowCart] = useState(false);
  const order = useAppSelector(selectedOrder);
  const [isCartHovered, setIsCartHovered] = useState(false);

  return (
    <>
      <button
        onMouseEnter={() => setIsCartHovered(true)}
        onMouseLeave={() => setIsCartHovered(false)}
        onClick={() => setShowCart(true)}
        className={`${
          order.length - 1 > 0
            ? "w-40 relative bg-orange-500 text-white tracking-wide py-2 rounded-3xl cursor-pointer hover:transition hover:duration-1000 hover:bg-orange-700/75"
            : "w-25 relative bg-orange-500 text-white tracking-wide py-2 rounded-3xl cursor-pointer hover:transition hover:duration-1000 hover:bg-orange-700/75"
        }`}
      >
        Корзина
        {order.length - 1 > 0 && (
          <CartAction
            isCartHovered={isCartHovered}
            orderSize={order.length - 1}
          />
        )}
      </button>
      <CartPopup showCart={showCart} setShowCart={setShowCart} />
    </>
  );
}
