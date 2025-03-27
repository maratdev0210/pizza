import { SNACKS } from "../snacks/snacks";
import { COCKTAILS } from "../cocktails/cocktails";
import { COFFEE } from "../coffee/coffee";

export const PRODUCTS = [
  {
    products: SNACKS,
    data: {
      classLink: ".snackScroll",
      productName: "Закуски",
      productId: "snacks",
    },
  },
  {
    products: COCKTAILS,
    data: {
      classLink: ".cocktailScroll",
      productName: "Коктейли",
      productId: "cocktails",
    },
  },
  {
    products: COFFEE,
    data: {
      classLink: ".coffeeScroll",
      productName: "Кофе",
      productId: "coffee",
    },
  },
];
