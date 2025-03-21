// Shows the company logo, and the city to which the user set his delivery

import DodoLogo from "../../assets/DodoLogo";
import Star from "../../assets/Star";
import DodoCoins from "../../assets/DodoCoins";
import DeliveryInfo from "./helpers/DeliveryInfo";
import LoginModal from "./helpers/LoginModal";
import { useState } from "react";
import { useEffect } from "react";

interface City {
  city: string;
}

export default function PizzeriaInfo({ city }: City) {
  const [isCoinsHovered, setIsCoinsHovered] = useState(false); // change the dodocoin color to orange when hovered
  const [dodocoinFill, setDodoCoinFill] = useState("#fff");
  const [showDeliveryInfo, setShowDeliveryInfo] = useState(false);
  const [showLogin, setShowLogin] = useState(false); // show the login modal

  useEffect(() => {
    setDodoCoinFill(isCoinsHovered ? "#ff6900" : "#000");
  }, [isCoinsHovered]);

  return (
    <div className="dodo-padding-left w-full h-20 mt-4">
      <div className="flex justify-between">
        <div className="flex gap-8">
          <div>
            <DodoLogo />
            <div className="px-12">
              <span className="text-sm block text-black font-semibold">
                Сеть №1 в России
              </span>
              <span className="text-sm block text-orange-500 font-semibold relative bottom-1">
                по количеству пиццерий
              </span>
            </div>
          </div>
          <div>
            <div className="flex gap-4">
              <span className="text-xl text-black font-semibold">
                Доставка пиццы
              </span>
              <span className="text-xl text-orange-500 font-semibold">
                {city}
              </span>
            </div>
            <div
              onMouseLeave={() => setShowDeliveryInfo(false)}
              onMouseEnter={() => setShowDeliveryInfo(true)}
              className="flex relative gap-2 items-center"
            >
              <span className="text-black">35 мин</span>
              <span className="w-1 h-1 bg-black rounded-xl block"></span>
              <span className="text-black">4.81</span>
              <span className="relative right-2 bottom-0.5">
                <Star size="16" />
              </span>
              <DeliveryInfo show={showDeliveryInfo} />
            </div>
          </div>
        </div>
        <div className="flex items-center gap-6 ">
          <div
            onMouseLeave={() => setIsCoinsHovered(false)}
            onMouseEnter={() => setIsCoinsHovered(true)}
            className="flex justify-center flex-col items-center hover:*:text-orange-500 cursor-pointer"
          >
            <div
              className={`${isCoinsHovered ? "-translate-y-1 duration-200 ease-in-out" : "duration-200"}`}
            >
              <DodoCoins fill={dodocoinFill} />
            </div>

            <span className="text-black font-semibold relative bottom-1">
              Додокоины
            </span>
          </div>
          <div>
            <button
              onClick={() => setShowLogin(true)}
              className="bg-gray-200 relative bottom-2 text-black  px-3.5 py-1 rounded-2xl"
            >
              Войти
            </button>
            <LoginModal showLogin={showLogin} setShowLogin={setShowLogin} />
          </div>
        </div>
      </div>
    </div>
  );
}
