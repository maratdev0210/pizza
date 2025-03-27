interface Products {
  [product: string]: string;
}

export const products: Products[] = [
  {
    Пиццы: "inline-block pizzaScroll scroll off",
    Комбо: "inline-block",
    Закуски: "inline-block snackScroll scroll off",
    Коктейли: "inline-block cocktailScroll off",
    Кофе: "inline-block coffeeScroll off",
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
  "#cocktails",
  "#coffee",
  "#pizza",
  "#pizza",
  "#pizza",
  "#pizza",
  "#pizza",
  "#pizza",
];
