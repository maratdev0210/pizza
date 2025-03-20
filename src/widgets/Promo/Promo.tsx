// [Работа в ДоДо, О нас, Контакты, Корпоративные заказы]
import { PROMOS } from "../../types/widgets/promo/promo";

export default function Promo() {
  return (
    <div className="border-b-1  border-gray-100 py-4 w-full dodo-padding-left">
      <nav>
        <ul className="flex gap-4">
          <li className="flex items-center">
            <span className="rounded-full animate-live-pulse bg-red-500 size-2.5"></span>
          </li>
          {PROMOS.map((promo) => {
            return (
              <li className="text-black text-sm font-semibold leading-5 dodo-hover">
                {promo}
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
