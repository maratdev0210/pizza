interface Sauce {
  name: string;
  src: string;
  ingridients: string;
  isNew: boolean;
  isOutOfStock: boolean;
}

export const SAUCES: Sauce[] = [
  {
    name: "Сырный",
    src: "https://media.dodostatic.net/image/r:584x584/019570d781d178a7936fe433a1c8525b.avif",
    ingridients:
      "Фирменный соус со вкусом расплавленного сыра для бортиков пиццы и горячих закусок, 25 г",
    isNew: false,
    isOutOfStock: false,
  },
  {
    name: "Сладкий чили",
    src: "https://media.dodostatic.net/image/r:584x584/019570d8dd85736585b43b85eba14ce4.avif",
    ingridients:
      "Фирменный соус сладкий чили с легкой пряностью для бортиков пиццы и горячих закусок, 25 г",
    isNew: false,
    isOutOfStock: false,
  },
  {
    name: "Чесночный",
    src: "https://media.dodostatic.net/image/r:584x584/019570d7e9a47173a9064403e4d495ca.avif",
    ingridients:
      "Фирменный соус с чесночным вкусом для бортиков пиццы и горячих закусок, 25 г",
    isNew: false,
    isOutOfStock: false,
  },
  {
    name: "Барбекю",
    src: "https://media.dodostatic.net/image/r:584x584/019570d571e473508bfd8f9362bfa7aa.avif",
    ingridients:
      "Фирменный соус с дымным ароматом для бортиков пиццы и горячих закусок, 25 г ",
    isNew: false,
    isOutOfStock: false,
  },
  {
    name: "Медово-горчичный",
    src: "https://media.dodostatic.net/image/r:584x584/019570d69c8e732cadb57034c2114d58.avif",
    ingridients:
      "Фирменный медово-горчичный соус со жгучей сладостью для бортиков пиццы и горячих закусок, 25 г",
    isNew: false,
    isOutOfStock: false,
  },
  {
    name: "Малиновое варенье",
    src: "https://media.dodostatic.net/image/r:584x584/019570d6388b797ab5cc621b4a5809a5.avif",
    ingridients: "Идеально к сырникам, 25 г",
    isNew: false,
    isOutOfStock: false,
  },
];


