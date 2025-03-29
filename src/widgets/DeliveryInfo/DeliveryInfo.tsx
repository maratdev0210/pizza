export default function DeliveryInfo() {
  return (
    <div className="dodo-padding-left mt-30">
      <p className="font-semibold text-black text-4xl">
        Доставка и оплата в Москве
      </p>
      <div className="mt-8 flex justify-between">
        <div>
          <h3 className="text-orange-500  text-lg">
            60 МИНУТ ИЛИ ПИЦЦА БЕСПЛАТНО
          </h3>
          <p className="mt-2 text-black">
            Если не успеем доставить за 60 минут, вы<br></br> получите
            извинительную пиицу. Её можно будет<br></br> добавить в один из
            следующих заказов
          </p>
          <p className="mt-4 text-black">
            Все цены в меню указаны без учета скидок
          </p>
        </div>
        <div>
          <div>
            <p className="text-lg text-orange-500">От 649 ₽</p>
            <p className="text-black mt-2">Минимальная сумма доставки</p>
          </div>
          <div className="mt-4">
            <p className="text-orange text-lg">5000 ₽</p>
            <p className="mt-2 text-black">
              Максимальная сумма при оплате наличными
            </p>
          </div>
          <div>
            <p className="mt-4">
              Изображения продуктов могут отличаться от<br></br> продуктов в
              заказе.
            </p>
          </div>
        </div>
        <div>
          <p className="text-xl text-orange-500">
            ЗОНА ДОСТАВКИ <br></br> ОГРАНИЧЕНА
          </p>
          <div className="overflow-hidden hover:saturate-200 relative">
            <img
              className="size-60 rounded-xl transition duration-2000 ease-in-out mt-2 hover:transition hover:duration-5000 hover:scale-150  hover:-translate-x-12 hover:translate-y-12 "
              src="https://cdn.dodostatic.net/pizza-site/dist/assets/911e3a5bc67fc765b604..jpg"
            />
            <span className="text-black text-xl top-24 font-semibold absolute translate-y-1/2 translate-x-1/2">
              Зона доставки
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
