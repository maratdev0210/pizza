interface Pizza {
  name: string;
  src: string;
  ingridients: string[];
}

export const PIZZAS: Pizza[] = [
  {
    name: "Чилл Грилл",
    src: "https://media.dodostatic.net/image/r:584x584/019591c69fac7921a27e4ecd8c99f9df.avif",
    ingridients: [
      "Цыпленок, маринованные огурчики, красный лук, соус гриль, моцарелла, чеснок, фирменный соус альфредо",
    ],
  },
  {
    name: "Баварская",
    src: "https://media.dodostatic.net/image/r:584x584/019591a2e222794a81731c99f3cc34ec.avif",
    ingridients: [
      "Баварские колбаски, маринованные огурчики, красный лук, томаты, горчичный соус, моцарелла, фирменный томатный соус",
    ],
  },
  {
    name: "Мясной микс с говядиной и колбасками",
    src: "https://media.dodostatic.net/image/r:584x584/0194d4f6904975a5a6427e297591980d.avif",
    ingridients: [
      "Пряная говядина, баварские колбаски, пикантная пепперони, бекон, моцарелла и фирменный томатный соус",
    ],
  },
  {
    name: "Бефстроганов",
    src: "https://media.dodostatic.net/image/r:584x584/01953ced168c758399984df8561623a3.avif",
    ingridients: [
      "Пряная говядина, шампиньоны, ароматный грибной соус, маринованные огурчики, моцарелла, красный лук, фирменный соус альфредо",
    ],
  },
  {
    name: "Мясная с аджикой",
    src: "https://media.dodostatic.net/image/r:584x584/0194d4fa65f277598a143a7ba341da53.avif",
    ingridients: [
      "Баварские колбаски, острый соус аджика, острые колбаски чоризо, цыпленок, пикантная пепперони, моцарелла, фирменный томатный соус",
    ],
  },
  {
    name: "Креветки со сладким чили",
    src: "https://media.dodostatic.net/image/r:584x584/0194d4fd39bb7352bfa5de2219e88b9b.avif",
    ingridients: [
      "Креветки, ананасы, соус сладкий чили, сладкий перец, моцарелла, фирменный соус альфредо",
    ],
  },
  {
    name: "Сырная",
    src: "https://media.dodostatic.net/image/r:584x584/11ee7d610d2925109ab2e1c92cc5383c.avif",
    ingridients: ["Моцарелла, сыры чеддер и пармезан, фирменный соус альфредо"],
  },
  {
    name: "Пепперони фреш",
    src: "https://media.dodostatic.net/image/r:584x584/11ee7d612fc7b7fca5be822752bee1e5.avif",
    ingridients: [
      "Пикантная пепперони, увеличенная порция моцареллы, томаты, фирменный томатный соус",
    ],
  },
  {
    name: "Двойной цыпленок",
    src: "https://media.dodostatic.net/image/r:584x584/11ee7d614cbe0530b7234b6d7a6e5f8e.avif",
    ingridients: ["Цыпленок, моцарелла, фирменный соус альфредо"],
  },
  {
    name: "Ветчина и Сыр",
    src: "https://media.dodostatic.net/image/r:584x584/11ee7d60fda22358ac33c6a44eb093a2.avif",
    ingridients: ["Ветчина, моцарелла, фирменный соус альфредо"],
  },
  {
    name: "Ветчина и Грибы",
    src: "https://media.dodostatic.net/image/r:584x584/11ef5b10b39bbbbda9f8c4e4ff1b067c.avif",
    ingridients: [
      "Ветчина, шампиньоны, увеличенная порция моцареллы, фирменный томатный соус",
    ],
  },
  {
    name: "Аррива!",
    src: "https://media.dodostatic.net/image/r:584x584/019591a0591d7642b97bf6ed6da45252.avif",
    ingridients: [
      "Цыпленок, острые колбаски чоризо, соус бургер, сладкий перец, красный лук, томаты, моцарелла, соус ранч, чеснок",
    ],
  },
  {
    name: "Карбонара",
    src: "https://media.dodostatic.net/image/r:584x584/019591b13a1a724b90092c16d9b1c05a.avif",
    ingridients: [
      "Бекон, сыры чеддер и пармезан, моцарелла, томаты, красный лук, чеснок, фирменный соус альфредо, итальянские травы",
    ],
  },
  {
    name: "Бургер-пицца",
    src: "https://media.dodostatic.net/image/r:584x584/11ee7d61698827ee9b8db6d0aec53410.avif",
    ingridients: [
      "Ветчина, маринованные огурчики, томаты, красный лук, чеснок, соус бургер, моцарелла, фирменный томатный соус",
    ],
  },
  {
    name: "Пепперони",
    src: "https://media.dodostatic.net/image/r:584x584/11ee7d610a62d78598406363a9a8ad65.avif",
    ingridients: [
      "Пикантная пепперони, увеличенная порция моцареллы, фирменный томатный соус",
    ],
  },
  {
    name: "Цыпленок барбекю",
    src: "https://media.dodostatic.net/image/r:584x584/11ee7d6110059795842d40396bcf1e73.avif",
    ingridients: [
      "Цыпленок, бекон, соус барбекю, красный лук, моцарелла, фирменный томатный соус",
    ],
  },
  {
    name: "Цыпленок Ранч",
    src: "https://media.dodostatic.net/image/r:584x584/11ef4feddf588b4ea7493ba40fdf934c.avif",
    ingridients: [
      "Цыпленок, ветчина, соус ранч, моцарелла, томаты, чеснок, фирменный соус альфредо",
    ],
  },
  {
    name: "Маргарита",
    src: "https://media.dodostatic.net/image/r:584x584/11ee7d6105ef6690b86fbde6150b5b0c.avif",
    ingridients: [
      "Увеличенная порция моцареллы, томаты, итальянские травы, фирменный томатный соус",
    ],
  },
  {
    name: "Песто",
    src: "https://media.dodostatic.net/image/r:584x584/019589a573477186898528944fd881a2.avif",
    ingridients: [
      "Цыпленок, соус песто, кубики брынзы, томаты, моцарелла, фирменный соус альфредо",
    ],
  },
];

