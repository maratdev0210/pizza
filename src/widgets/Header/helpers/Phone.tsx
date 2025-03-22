// Phone number input
import { useState, useRef, useEffect } from "react";
import Inputmask from "inputmask";

export default function Phone() {
  const phone = useRef(null);

  useEffect(() => {
    if (phone.current) {
      const phoneMask = new Inputmask("+7 999 999-99-99");
      phoneMask.mask(phone.current);
    }
  }, []);

  return (
    <>
      <form className="mt-4">
        <label className="flex flex-col text-sm text-gray-400">
          Номер телефона
          <input
            type="tel"
            className="w-full placeholder-text-gray-300 text-xl text-black px-4 font-bold border-2 py-1.5 mt-2 border-gray-300 rounded-xl focus:border-3 focus:outline-none focus:border-orange-500"
            ref={phone}
            placeholder="+7 999 999-99-99"
          />
        </label>
        <input
          type="submit"
          className="cursor-pointer hover:bg-orange-600/80 hover:transition hover:duration-300 rounded-4xl w-full mt-4 text-lg bg-orange-500 text-center text-white py-3"
          value="Выслать код"
        />
      </form>
    </>
  );
}
