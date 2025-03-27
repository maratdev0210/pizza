import { useEffect } from "react";
import { X } from "lucide-react";
import { useAppDispatch } from "../../../state/hooks";
import { setOrder } from "../../../state/slices/orderSlice";
import { setIsOrdered } from "../../../state/slices/isOrderedSlice";

interface ISnackModal {
  name: string;
  image: string;
  ingridients: string;
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function SnackModal({
  name,
  image,
  ingridients,
  showModal,
  setShowModal,
}: ISnackModal) {
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [showModal]);

  const addToCart = () => {
    setShowModal(false);
    dispatch(setIsOrdered(true));
    dispatch(
      setOrder({
        type: "snacks",
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
      {showModal && (
        <div className="fixed h-[100vh] flex justify-center items-center w-full bg-black/75 z-1000 inset-0 cursor-pointer">
          <div className="w-3/4 h-[80vh] bg-white rounded-3xl flex relative">
            <div className="flex justify-center items-center w-3/5 bg-white rounded-3xl rounded-r-none">
              <img src={image} className="size-60 scale-125" />
            </div>
            <div className="p-6 rounded-3xl bg-gray-100 w-2/5 rounded-l-none flex flex-col justify-between">
              <div>
                <p className="text-2xl font-semibold text-black">{name}</p>
                <p className="text-gray-400 text mt-1">1 шт, 110г</p>
                <p className="text-sm mt-2">{ingridients}</p>
                <button className="rounded-3xl bg-gray-200 w-full text-sm py-1 mt-4 cursor-pointer">
                  1 шт
                </button>
              </div>
              <button
                onClick={() => addToCart()}
                className="w-full bg-orange-500 text-white py-3 mb-4 cursor-pointer hover:bg-orange-700/75 hover:duration-200 hover:transition rounded-3xl"
              >
                В корзину за 219 ₽
              </button>
            </div>
            <span className="absolute right-0 pl-4 translate-x-full top-6">
              <X
                onClick={() => setShowModal(false)}
                className="size-12 bg-white rounded-full p-2 hover:scale-110 hover:transition hover:duration-300"
              />
            </span>
          </div>
        </div>
      )}
    </>
  );
}
