interface Cocktail {
  name: string;
  src: string;
  ingridients: string;
  isNew: boolean;
  isOutOfStock: boolean;
}

export const COCKTAILS: Cocktail[] = [
  {
    name: "Молочный коктейль Ежевика-малина",
    src: "https://media.dodostatic.net/image/r:584x584/019592009bff70d9bceb2c394cebc35e.avif",
    ingridients:
      "Сливочная прохлада классического молочного коктейля с добавлением лесных ягод",
    isNew: false,
    isOutOfStock: false,
  },
  {
    name: "Молочный коктейль Пина Колада",
    src: "https://media.dodostatic.net/image/r:584x584/01959203504b7048a2ff87f07a03ef4c.avif",
    ingridients: "Тропическое сочетание кокоса и ананаса в нежном милкшейке",
    isNew: true,
    isOutOfStock: false,
  },
  {
    name: "Молочный коктейль с печеньем Орео",
    src: "https://media.dodostatic.net/image/r:584x584/11ef5bc277ea85e3b32249054a868818.avif",
    ingridients:
      "То самое печенье «Орео» в удобном формате ледяного милкшейка ",
    isNew: false,
    isOutOfStock: false,
  },
  {
    name: "Классический молочный коктейль",
    src: "https://media.dodostatic.net/image/r:584x584/11ef5bc160e54ee79c297e3d0a5e179e.avif",
    ingridients: "Это классика: молоко, мороженое и ничего лишнего ",
    isNew: true,
    isOutOfStock: true,
  },
  {
    name: "Клубничный молочный коктейль",
    src: "https://media.dodostatic.net/image/r:584x584/11ef5bc1f9bdcece91f3c8411fd932a4.avif",
    ingridients:
      "Лето всегда рядом: сироп из спелой клубники, молоко и мороженое ",
    isNew: true,
    isOutOfStock: false,
  },
  {
    name: "Шоколадный молочный коктейль",
    src: "https://media.dodostatic.net/image/r:584x584/11ef5bbd5b6fcf0dae38822628a8ca06.avif",
    ingridients: "Шоколадный милкшейк со сливочным мороженым и фирменным какао",
    isNew: false,
    isOutOfStock: true,
  },
];
