// opens on user click
import { useEffect, useRef } from "react";
import Phone from "./Phone";

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
      className={`${showLogin ? "fixed inset-0 flex items-center justify-center w-full h-[100vh] bg-black/50 z-10000" : "hidden"}`}
    >
      <div>
        <div
          ref={loginRef}
          className="w-105 h-80 px-4 py-6 rounded-xl bg-white"
        >
          <p className="text-center text-2xl text-black font-semibold">
            Вход на сайт
          </p>
          <p className="text-center mt-2 text-gray-500">
            Подарим подарок на день рождения, сохраним адрес доставки и
            расскажем об акциях
          </p>
          <Phone />
        </div>
      </div>
    </div>
  );
}
