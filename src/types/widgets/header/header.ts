interface Products {
  [product: string]: string;
}

export const products: Products[] = [
  {
    Пиццы: "inline-block pizzaScroll off",
    Комбо: "inline-block",
    Закуски: "inline-block",
    Коктейли: "inline-block",
    Кофе: "inline-block",
    Напитки: "inline-block",
    Десерты: "inline-block",
    Соусы: "inline-block",
    "Другие товары": "inline-block lg:hidden xl:inline-block 2xl:inline-block",
    Новинки: "inline-block lg:hidden xl:inline-block 2xl:inline-block",
    Завтрак: "inline-block lg:hidden xl:inline-block 2xl:inline-block",
    Хиты: "inline-block lg:hidden 2xl:inline-block",
    "На компанию": "inline-block lg:hidden 2xl:inline-block",
    "Любят дети": "inline-block lg:hidden 2xl:inline-block",
  },
];

export const productsLinks: string[] = [
  "#pizza",
  "#pizza",
  "#snacks",
  "#pizza",
  "#pizza",
  "#pizza",
  "#pizza",
  "#pizza",
  "#pizza",
  "#pizza",
  "#pizza",
];
