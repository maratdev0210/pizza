interface Desserts {
  name: string;
  src: string;
  ingridients: string;
  isNew: boolean;
  isOutOfStock: boolean;
}

export const DESSERTS: Desserts[] = [
  {
    name: "Тирамису",
    src: "https://media.dodostatic.net/image/r:584x584/0195920f126b72208ce364b4c459364f.avif",
    ingridients:
      "Многослойный десерт в лучших итальянских традициях: легкий аромат какао, пропитанная кофе бисквитная прослойка и нежный крем",
    isNew: true,
    isOutOfStock: false,
  },
  {
    name: "Додобоны",
    src: "https://media.dodostatic.net/image/r:584x584/0194d50911687930bd2950d169464c7f.avif",
    ingridients:
      "Когда сливочное встречается с пряным, получаются горячие булочки с корицей в фирменном пломбирном соусе",
    isNew: false,
    isOutOfStock: false,
  },
  {
    name: "Бруслетики",
    src: "https://media.dodostatic.net/image/r:584x584/0194d50aa35674f2b55fe90c424a9e71.avif",
    ingridients:
      "Это задорные сладкие рулетики, в которых закрутился микс из натуральной брусники и фирменного пломбирного соуса",
    isNew: false,
    isOutOfStock: false,
  },
  {
    name: "Чизкейк Нью-Йорк",
    src: "https://media.dodostatic.net/image/r:584x584/11eee20b6b6ec471ab74ab8f8885775b.avif",
    ingridients:
      "Нежнейшая сырная основа, тонкий корж песочного теста и никаких добавок. Классика в мире десертов",
    isNew: false,
    isOutOfStock: false,
  },
  {
    name: "Макарон манго-маракуйя",
    src: "https://media.dodostatic.net/image/r:584x584/11ef8c97600099aabe2eab81a37c62d1.avif",
    ingridients:
      "Знаменитый французский десерт со вкусом тропических фруктов. Bon appétit! ",
    isNew: false,
    isOutOfStock: false,
  },
  {
    name: "Чизкейк Банановый с шоколадным печеньем",
    src: "https://media.dodostatic.net/image/r:584x584/019512d89ab67365a76a19cf045163aa.avif",
    ingridients:
      "Солнечная версия классического рецепта: нежный чизкейк с бананом и шоколадным печеньем",
    isNew: false,
    isOutOfStock: true,
  },
  {
    name: "Эклеры-мини с заварным кремом",
    src: "https://media.dodostatic.net/image/r:584x584/11ef8c972951d9a193b3f3901197b8da.avif",
    ingridients:
      "Три маленьких, но таких милых эклерчика с заварным кремом. Можно поделиться с друзьями ",
    isNew: false,
    isOutOfStock: false,
  },
  {
    name: "Шоколадный кукис",
    src: "https://media.dodostatic.net/image/r:584x584/11ee7970210a7a54aff74b239ea3d66f.avif",
    ingridients:
      "Мягкое печенье с кусочками темного шоколада. Идеально сочетается с чаем, кофе или какао",
    isNew: false,
    isOutOfStock: false,
  },
  {
    name: "Фондан",
    src: "https://media.dodostatic.net/image/r:584x584/11ee7d61b85adb349aad5044ec2803ae.avif",
    ingridients:
      "Французский шоколадный десерт с хрустящей корочкой и жидкой начинкой ",
    isNew: false,
    isOutOfStock: false,
  },
  {
    name: "Маффин Соленая карамель",
    src: "https://media.dodostatic.net/image/r:584x584/11ee79700c2ea0539d556ccf3da1feb7.avif",
    ingridients:
      "Кекс, раскрывающий необычное сочетание соленого арахиса и сладкой карамели",
    isNew: false,
    isOutOfStock: true,
  },
  {
    name: "Маффин Три шоколада",
    src: "https://media.dodostatic.net/image/r:584x584/11ee796fb18afbbebf188c25ebd2e581.avif",
    ingridients:
      "Кекс из натурального какао с начинкой из кубиков белого и молочного шоколада ",
    isNew: false,
    isOutOfStock: false,
  },
  {
    name: "Сорбет Лимонный фреш",
    src: "https://media.dodostatic.net/image/r:584x584/11ef8c97b28e7d1388dc897e0198b75d.avif",
    ingridients: "Цитрусовая свежесть и сладкий вкус с приятной кислинкой",
    isNew: true,
    isOutOfStock: false,
  },
  {
    name: "Сырники с малиновым вареньем",
    src: "https://media.dodostatic.net/image/r:584x584/11ef9060f46ea0ac8164697d83b4d4ef.avif",
    ingridients:
      "Любимый десерт многих гостей — румяные сырники из печи с малиновым вареньем. Нежные, в меру сладкие и напоминающие детство",
    isNew: false,
    isOutOfStock: false,
  },
  {
    name: "Сырники со сгущенным молоком",
    src: "https://media.dodostatic.net/image/r:584x584/11ef90613aebd0eda912c1e7bf4b6987.avif",
    ingridients:
      "Нежные сырники, приготовленные в печи, с порционным сгущенным молоком",
    isNew: false,
    isOutOfStock: false,
  },
];
