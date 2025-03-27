interface Coffee {
  name: string;
  src: string;
  ingridients: string;
  isNew: boolean;
  isOutOfStock: boolean;
}

export const COFFEE: Coffee[] = [
  {
    name: "Капучино Яблочный пирог",
    src: "https://media.dodostatic.net/image/r:584x584/0195a3dd5c3173e2a83bba8bee8be7e8.avif",
    ingridients:
      "Классический капучино с молочной пенкой и ярким сиропом — напоминает по вкусу домашнюю шарлотку",
    isNew: false,
    isOutOfStock: false,
  },
  {
    name: "Кофе Карамельный капучино",
    src: "https://media.dodostatic.net/image/r:584x584/11ee7d61aed6b6d4bfdad4e58d76cf56.avif",
    ingridients:
      "Классический капучино с молочной пенкой и карамельным сиропом ",
    isNew: false,
    isOutOfStock: false,
  },
  {
    name: "Кофе Кокосовый латте",
    src: "https://media.dodostatic.net/image/r:584x584/11ee7d61b19fa07090ee88b0ed347f42.avif",
    ingridients: "Горячий латте с кокосовым сиропом",
    isNew: true,
    isOutOfStock: true,
  },
  {
    name: "Кофе Ореховый латте",
    src: "https://media.dodostatic.net/image/r:584x584/11ee7d61b12220ab911ff4fa42ef585d.avif",
    ingridients: "Горячий латте с сиропом со вкусом фундука",
    isNew: false,
    isOutOfStock: true,
  },
  {
    name: "Айс капучино",
    src: "https://media.dodostatic.net/image/r:584x584/11eee208920f55a4aa17c03664220226.avif",
    ingridients: "Освежающий холодный кофе с порцией эспрессо и пломбиром",
    isNew: true,
    isOutOfStock: false,
  },
  {
    name: "Кофе Капучино",
    src: "https://media.dodostatic.net/image/r:584x584/11ee7d61ae1813b4ab42d8927d061035.avif",
    ingridients:
      "Легендарный рецепт кофе: эспрессо, горячее молоко и плотная молочная пенка ",
    isNew: true,
    isOutOfStock: false,
  },
  {
    name: "Кофе Латте",
    src: "https://media.dodostatic.net/image/r:584x584/11ee7d61b0c26a3f85d97a78feee00ad.avif",
    ingridients:
      "Идеально сбалансированное сочетание кофе, увеличенной порции молока и нежнейшей пенки ",
    isNew: false,
    isOutOfStock: false,
  },
  {
    name: "Кофе Американо",
    src: "https://media.dodostatic.net/image/r:584x584/11ee7d61b02b810b8767d5ff70d15897.avif",
    ingridients: "Горячий кофе для ценителей чистого вкуса",
    isNew: false,
    isOutOfStock: true,
  },
];
