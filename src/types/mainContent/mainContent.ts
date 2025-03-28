import { SNACKS } from "../snacks/snacks";
import { COCKTAILS } from "../cocktails/cocktails";
import { COFFEE } from "../coffee/coffee";
import { DRINKS } from "../drinks/drinks";
import { DESSERTS } from "../desserts/desserts";
import { SAUCES } from "../sauces/sauces";

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
  {
    products: DRINKS,
    data: {
      classLink: ".drinkScroll",
      productName: "Напитки",
      productId: "drinks",
    },
  },
  {
    products: DESSERTS,
    data: {
      classLink: ".dessertScroll",
      productName: "Десерты",
      productId: "desserts",
    },
  },
  {
    products: SAUCES,
    data: {
      classLink: ".sauceScroll",
      productName: "Соусы",
      productId: "sauces",
    },
  },
];
