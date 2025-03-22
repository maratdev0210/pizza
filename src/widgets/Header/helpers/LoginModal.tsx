// opens on user click
import { useEffect, useRef } from "react";
import Phone from "./Phone";
import { X } from "lucide-react";

interface LoginProps {
  showLogin: boolean;
  setShowLogin: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function LoginModal({ showLogin, setShowLogin }: LoginProps) {
  const loginRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (loginRef.current && !loginRef.current.contains(event.target)) {
        setShowLogin(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [loginRef]);

  return (
    <div
      className={`${showLogin ? "fixed inset-0 flex items-center justify-center w-full h-[100vh] bg-black/75 z-10000" : "hidden"}`}
    >
      <div className="relative">
        <div className="absolute hover:scale-115 hover:duration-200  cursor-pointer translate-x-full top-8 -right-3 rounded-full bg-white">
          <span>
            <X className="size-11 p-2" />
          </span>
        </div>
        <div
          ref={loginRef}
          className="w-105 h-auto px-4 py-6 rounded-3xl bg-white"
        >
          <p className="text-center text-2xl text-black font-semibold">
            Вход на сайт
          </p>
          <p className="text-center mt-2 text-gray-500">
            Подарим подарок на день рождения, сохраним адрес доставки и
            расскажем об акциях
          </p>
          <Phone />
          <div className="mt-6">
            <p className="text-center mx-auto text-xs w-9/10 text-gray-400">
              Продолжая, вы соглашаетесь{" "}
              <span className="text-orange-500">
                со сбором и обработкой персональных данных и пользовательским
                соглашением
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
