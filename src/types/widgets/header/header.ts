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
    Напитки: "inline-block drinkScroll off",
    Десерты: "inline-block dessertScroll off",
    Соусы: "inline-block sauceScroll off",
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
  "#drinks",
  "#desserts",
  "#sauces",
  "#pizza",
  "#pizza",
  "#pizza",
];
