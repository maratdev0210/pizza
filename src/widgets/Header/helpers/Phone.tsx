// Phone number input
import { useState, useRef, useEffect } from "react";

export default function Phone() {
  const [phone, setPhone] = useState("+ 7");
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <form className="mt-4">
      <label className="flex flex-col text-sm text-gray-400">
        Номер телефона
        <input
          type="tel"
          ref={inputRef}
          className="w-full text-2xl text-black px-4 font-bold border-2 py-1.5 mt-2 border-gray-300 rounded-xl focus:border-3 focus:outline-none focus:border-orange-500"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </label>
    </form>
  );
}
