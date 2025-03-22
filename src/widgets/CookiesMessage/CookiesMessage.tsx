// notify the user about using the cookies

import { X } from "lucide-react";
import { useState } from "react";

export default function CookiesMessage() {
  const [showMessage, setShowMessage] = useState(true);
  return (
    <>
      {showMessage && (
        <div className="flex justify-center ">
          <div className="fixed bottom-4 w-225 z-10000000">
            <div className="rounded-md bg-white/90 p-2 cookies-message">
              <span className="text-xs">
                Мы используем cookies для быстрой и удобной работы сайта.
                Продолжая пользоваться сайтом, вы принимаете
                <span className="text-orange-500 ml-1">
                  условия обработки персональных данных
                </span>
                <span className="ml-4 cursor-pointer">
                  <X
                    onClick={() => setShowMessage(false)}
                    className="inline size-4 text-gray-400"
                  />
                </span>
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
