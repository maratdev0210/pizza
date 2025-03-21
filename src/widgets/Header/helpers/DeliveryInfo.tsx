// shows the delivery info popup
import Star from "../../../assets/Star";

interface Show {
  show: boolean; // show the popup on hover
}

export default function DeliveryInfo({ show }: Show) {
  const stars: number[] = [1, 2, 3, 4];

  return (
    <div
      className={`${!show ? "hidden" : "absolute w-120 top-10 -right-10 z-100 px-4 py-2 rounded-xl bg-gray-900"}`}
    >
      <div className="border-b-12 border-r-12 border-r-transparent border-l-transparent border-t-transparent border-b-gray-900 border-t-12 border-l-12  w-6 mx-auto relative bottom-8"></div>
      <p className="font-semibold text-white text-lg">
        Время и стоимость доставки могут меняться
      </p>
      <p className="text-gray-400 font-semibold mt-1">
        В зависимости от нагрузки на пиццерию
      </p>
      <div className="mt-8 flex justify-between">
        <div>
          <span className="block text-white text-3xl">35 минут</span>
          <span className="block text-white ">Среднее время доставки</span>
          <span className="text-gray-400  block">
            Если не успеем за 60 минут,
            <span className="block">
              пришлем промокод на
              <span className="block">бесплатную пиццу</span>
            </span>
          </span>
        </div>
        <div>
          <div className="flex  items-center gap-1">
            <span className="text-3xl text-yellow-400">4.81</span>
            <div className="flex">
              {stars.map((star) => {
                return (
                  <span className="block mr-0.5">
                    <Star size="24" />
                  </span>
                );
              })}
            </div>
          </div>
          <div>
            <span className="text-white font-semibold block">18577 оценок</span>
            <span className="text-gray-400 block">
              Оценить заказ можно
              <span className="text-gray-400 block">
                в мобильном приложении
              </span>
            </span>
          </div>
        </div>
      </div>
      <p className="text-gray-400 mt-4">
        Данные за последние 7 дней в вашем городе
      </p>
    </div>
  );
}
