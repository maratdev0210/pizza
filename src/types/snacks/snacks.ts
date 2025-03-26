interface Snacks {
  name: string;
  src: string;
  ingridients: string;
  isNew: boolean; // if the product has been recently added
  isOutOfStock: boolean; // if the product has been bought
}

export const SNACKS: Snacks[] = [
  {
    name: "Додстер Чилл Грилл",
    src: "https://media.dodostatic.net/image/r:584x584/019591cc0d0971eaa6f4f81bde8983fb.avif",
    ingridients:
      "Горячая закуска с цыпленком и соусом гриль с луком, маринованными огурчиками и моцареллой в тонкой пшеничной лепешке",
    isNew: false,
    isOutOfStock: false,
  },
  {
    name: "Баварский ланчбокс",
    src: "https://media.dodostatic.net/image/r:584x584/019591d977df7320b5d39f77965f05d8.avif",
    ingridients:
      "Горячий сытный обед из баварских колбасок, картофеля из печи и горчичного соуса",
    isNew: true,
    isOutOfStock: false,
  },
  {
    name: "Креветки",
    src: "https://media.dodostatic.net/image/r:584x584/019591d490e5798e9fdc18664fb241d3.avif",
    ingridients: "Цельные креветки в хрустящей панировке",
    isNew: true,
    isOutOfStock: false,
  },
  {
    name: "Омлет с томатами в пите",
    src: "https://media.dodostatic.net/image/r:584x584/019591e66cd170aa879b79ff85110cf9.avif",
    ingridients:
      "Легкий и питательный завтрак: омлет из печи с томатами и моцареллой в пшеничной пите. Удобно брать с собой",
    isNew: false,
    isOutOfStock: true,
  },
  {
    name: "Омлет с ветчиной и грибами в пите  ",
    src: "https://media.dodostatic.net/image/r:584x584/019591e2f3f17510a16d5817e2b6a395.avif",
    ingridients:
      "Горячий сытный омлет с поджаристой корочкой, ветчина, шампиньоны и моцарелла в пшеничной пите. Удобно взять с собой",
    isNew: false,
    isOutOfStock: false,
  },
  {
    name: "Омлет с беконом в пите",
    src: "https://media.dodostatic.net/image/r:584x584/019591dd8833797e9a3aa1177d7e90ee.avif",
    ingridients:
      "Горячий сытный омлет с поджаристой корочкой, бекон, моцарелла и томаты в пшеничной пите. Удобно взять с собой",
    isNew: false,
    isOutOfStock: false,
  },
  {
    name: "Омлет с пепперони в пите",
    src: "https://media.dodostatic.net/image/r:584x584/019591e4a74b78b2a3fa3ac08c86e9fd.avif",
    ingridients:
      "Для тех, кто не пропускает завтраки — омлет с поджаристой корочкой, пикантная пепперони, томаты и моцарелла в пшеничной пите. Удобно взять с собой ",
    isNew: false,
    isOutOfStock: false,
  },
  {
    name: "Омлет сырный в пите",
    src: "https://media.dodostatic.net/image/r:584x584/019591e783ae7565839c0f49857593de.avif",
    ingridients:
      "Вариант завтрака в пшеничной пите с омлетом с поджаристой корочкой, моцареллой, кубиками брынзы, сырами чеддер и пармезан. Удобно взять с собой",
    isNew: false,
    isOutOfStock: false,
  },
  {
    name: "Омлет с томатами",
    src: "https://media.dodostatic.net/image/r:584x584/019591e680717843a548961fb996e2c5.avif",
    ingridients:
      "Легкий и питательный завтрак: омлет из печи с томатами и моцареллой",
    isNew: false,
    isOutOfStock: true,
  },
  {
    name: "Омлет с ветчиной и грибами",
    src: "https://media.dodostatic.net/image/r:584x584/0194b1f77c5670dca7df6e7b702d8db8.avif",
    ingridients:
      "Горячий сытный омлет с поджаристой корочкой, ветчина, шампиньоны и моцарелла",
    isNew: true,
    isOutOfStock: true,
  },
  {
    name: "Омлет с беконом",
    src: "https://media.dodostatic.net/image/r:584x584/0194b1f61faf77b2875b30ac59824405.avif",
    ingridients:
      "Классическое сочетание горячего омлета с поджаристой корочкой и бекона с добавлением моцареллы и томатов на завтрак",
    isNew: true,
    isOutOfStock: false,
  },
  {
    name: "Паста с креветками",
    src: "https://media.dodostatic.net/image/r:584x584/0194d50285347992955d7c7f3b9a0621.avif",
    ingridients:
      "Паста из печи с креветками, томатами, моцареллой, соусом альфредо и чесноком",
    isNew: false,
    isOutOfStock: false,
  },
  {
    name: "Паста Карбонара",
    src: "https://media.dodostatic.net/image/r:584x584/11ee797018746ef899d162d16fa99625.avif",
    ingridients:
      "Паста из печи с беконом, сырами чеддер и пармезан, томатами, моцареллой, фирменным соусом альфредо и чесноком",
    isNew: false,
    isOutOfStock: false,
  },
  {
    name: "Паста Песто",
    src: "https://media.dodostatic.net/image/r:584x584/11ee797019062658a437457f8e1d5887.avif",
    ingridients:
      "Паста из печи с соусом песто, цыпленком, томатами, моцареллой и фирменным томатным соусом",
    isNew: true,
    isOutOfStock: true,
  },
  {
    name: "Додстер с ветчиной",
    src: "https://media.dodostatic.net/image/r:584x584/11ee7970259d888e98b6407ee6b994d9.avif",
    ingridients:
      "Горячий завтрак с ветчиной, томатами, моцареллой, соусом ранч в тонкой пшеничной лепешке",
    isNew: false,
    isOutOfStock: false,
  },
  {
    name: "Додстер",
    src: "https://media.dodostatic.net/image/r:584x584/11ee796f96d11392a2f6dd73599921b9.avif",
    ingridients:
      "Легендарная горячая закуска с цыпленком, томатами, моцареллой, соусом ранч в тонкой пшеничной лепешке",
    isNew: false,
    isOutOfStock: false,
  },
  {
    name: "Салат Гавайский",
    src: "https://media.dodostatic.net/image/r:584x584/019591eddf3f799f8b8b269021bd5682.avif",
    ingridients:
      "Цыпленок, свежие листья салата айсберг, томаты черри, ананасы, сладкий перец и соус сладкий чили",
    isNew: true,
    isOutOfStock: false,
  },
  {
    name: "Салат Цезарь",
    src: "https://media.dodostatic.net/image/r:584x584/11ef8d3bc9e84fb7b5cfb7f47c6fb334.avif",
    ingridients:
      "Цыпленок, свежие листья салата айсберг, томаты черри, сыры чеддер и пармезан, соус цезарь, пшеничные гренки, итальянские травы",
    isNew: true,
    isOutOfStock: true,
  },
];
