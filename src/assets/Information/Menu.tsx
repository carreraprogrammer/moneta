export interface MenuItem {
  name: string;
  category: string;
  subCategory: string;
  productInfo: string;
  price: number;
  image: string;
}

const menu: MenuItem[] = [
  {
    name: 'Tinto',
    category: 'Bebidas',
    subCategory: 'Tintos',
    productInfo: 'Café colado por goteo',
    price: 3500,
    image: ''
  },
  {
    name: 'Campesino',
    category: 'Bebidas',
    subCategory: 'Tintos',
    productInfo: 'Tinto con jarabe de panela y especias',
    price: 5000,
    image: ''
  },
  {
    name: 'Verraquillo',
    category: 'Bebidas',
    subCategory: 'Tintos',
    productInfo: 'Tinto campesino con licor',
    price: 8500,
    image: ''
  },
  {
    name: 'Espresso',
    category: 'Bebidas',
    subCategory: 'Espressos',
    productInfo: 'Café con sabor y textura concentrados',
    price: 4500,
    image: ''
  },
  {
    name: 'Americano',
    category: 'Bebidas',
    subCategory: 'Espressos',
    productInfo: 'Espresso doble con agua',
    price: 4500,
    image: ''
  },
  {
    name: 'Macchiato',
    category: 'Bebidas',
    subCategory: 'Espressos',
    productInfo: 'Espresso con una mancha de leche texturizada',
    price: 5000,
    image: ''
  },
  {
    name: 'Con Panna',
    category: 'Bebidas',
    subCategory: 'Espresso',
    productInfo: 'Espresso con crema chantilly',
    price: 7000,
    image: ''
  },
  {
    name: 'Romano',
    category: 'Bebidas',
    subCategory: 'Espresso',
    productInfo: 'Espresso con Limon',
    price: 5000,
    image: ''
  },
  {
    name: 'Crema chantilly',
    category: 'Bebidas',
    subCategory: 'Adicionales',
    productInfo: '',
    price: 3000,
    image: ''
  },
  {
    name: 'Sirope',
    category: 'Bebidas',
    subCategory: 'Adicionales',
    productInfo: 'Vainilla, caramelo, campesino',
    price: 2500,
    image: ''
  },
  {
    name: 'Licor',
    category: 'Bebidas',
    subCategory: 'Adicionales',
    productInfo: '',
    price: 6000,
    image: ''
  },
  {
    name: 'Cold Brew',
    category: 'Bebidas',
    subCategory: 'Otros cafés',
    productInfo: 'Café extraido en frío con hielos',
    price: 6000,
    image: ''
  },
  {
    name: 'Fredo Moneta',
    category: 'Bebidas',
    subCategory: 'Otros cafés',
    productInfo: 'Espresso doble con zumo de naranja, sirope de frutos rojos y hielo',
    price: 9000,
    image: ''
  },
  {
    name: 'Freddo Moneta Envenenado',
    category: 'Bebidas',
    subCategory: 'Otros cafés',
    productInfo: 'Freddo Moneta con licor',
    price: 14000,
    image: ''
  },
  {
    name: 'Afogatto',
    category: 'Bebidas',
    subCategory: 'Otros cafés',
    productInfo: 'Espresso con helado de vainilla',
    price:  8500,
    image: ''
  },
  {
    name: 'Irlandés',
    category: 'Bebidas',
    subCategory: 'Otros cafés',
    productInfo: 'Tinto con whisky, azúcar morena y crema de leche',
    price: 12000,
    image: ''
  },
  {
    name: 'Granizado',
    category: 'Bebidas',
    subCategory: 'Otros cafés',
    productInfo: 'Espresso doble con cristales de hielo, caramelo y leche',
    price: 8500,
    image: ''
  },
  {
    name: 'Crema de café y cacao',
    category: 'Bebidas',
    subCategory: 'Otros cafés',
    productInfo: 'Bebida cremosa con licor artesanal servida con hielos',
    price: 10000,
    image: ''
  },
  {
    name: 'Cappuccino',
    category: 'Bebidas',
    subCategory: 'Lácteos',
    productInfo: 'Espresso sencillo con leche vaporizada pequeño',
    price: 5500,
    image: ''
  },
  {
    name: 'Capuccino doble',
    category: 'Bebidas',
    subCategory: 'Lácteos',
    productInfo: 'Espresso doble con leche vaporizada grande',
    price: 6500,
    image: ''
  },
  {
    name: 'Flat White',
    category: 'Bebidas',
    subCategory: 'Lácteos',
    productInfo: 'Espresso doble con leche vaporizada pequeño',
    price: 6000,
    image: ''
  },
  {
    name: 'Vienés',
    category: 'Bebidas',
    subCategory: 'Lácteos',
    productInfo: 'Espresso sencillo con leche vaporizada y crema chantilly',
    price: 8000,
    image: ''
  },
  {
    name: 'Mocaccino',
    category: 'Bebidas',
    subCategory: 'Lácteos',
    productInfo: 'Espresso sencillo, chocolate y leche vaporizada',
    price: 7000,
    image: ''
  },
  {
    name: 'Latte',
    category: 'Bebidas',
    subCategory: 'Lácteos',
    productInfo: 'Espresso sencillo con leche vaporizada grande',
    price: 5800,
    image: ''
  },
  {
    name: 'Latte Chai',
    category: 'Bebidas',
    subCategory: 'Lácteos',
    productInfo: 'Espresso sencillo con leche vaporizada, jarabe de panela y especias',
    price: 7000,
    image: ''
  },
  {
    name: 'Latte Frio',
    category: 'Bebidas',
    subCategory: 'Lácteos',
    productInfo: 'Espresso doble con leche texturizada y hielo',
    price: 7000,
    image: ''
  },
  {
    name: 'Jugo Natural en agua',
    category: 'Bebidas',
    subCategory: 'Otras bebidas',
    productInfo: '',
    price: 5000,
    image: ''
  },
  {
    name: 'Jugo Natural en leche',
    category: 'Bebidas',
    subCategory: 'Otras bebidas',
    productInfo: '',
    price: 6000,
    image: ''
  },
  {
    name: 'Limonada Natural',
    category: 'Bebidas',
    subCategory: 'Otras bebidas',
    productInfo: '',
    price: 4000,
    image: ''
  },
  {
    name: 'Vaso de leche',
    category: 'Bebidas',
    subCategory: 'Otras bebidas',
    productInfo: '',
    price: 3500,
    image: ''
  },
  {
    name: 'Soda Italiana',
    category: 'Bebidas',
    subCategory: 'Otras bebidas',
    productInfo: 'Bebida gaseosa preparada con frutas y jarabes naturalez',
    price: 7000 ,
    image: '',
  },
  {
    name: 'Soda Italiana envenenada',
    category: 'Bebidas',
    subCategory: 'Otras bebidas',
    productInfo: 'Soda Italiana con licor',
    price: 13000,
    image: '',
  },
  {
    name: 'Malteada',
    category: 'Bebidas',
    subCategory: 'Otras bebidas',
    productInfo: 'Café, chocolate o frutos rojos',
    price: 10500,
    image: '',
  },
  {
    name: 'Agua de Panela',
    category: 'Bebidas',
    subCategory: 'Otras bebidas',
    productInfo: 'Con jarabe de panela y especias (fría o caliente)',
    price: 3500,
    image: '',
  },
  {
    name: 'Chocolate',
    category: 'Bebidas',
    subCategory: 'Otras bebidas',
    productInfo: '',
    price: 6000,
    image: '',
  },
  {
    name: 'Té Matcha',
    category: 'Bebidas',
    subCategory: 'Otras bebidas',
    productInfo: '',
    price: 7000,
    image: '',
  },
  {
    name: 'Aromática de hierbas y especias',
    category: 'Bebidas',
    subCategory: 'Otras bebidas',
    productInfo: '',
    price: 3500,
    image: '',
  },
  {
    name: 'Aromática de frutas deshidratadas',
    category: 'Bebidas',
    subCategory: 'Otras bebidas',
    productInfo: '',
    price: 4500,
    image: '',
  },
  {
    name: 'Infusión de hoja de coca',
    category: 'Bebidas',
    subCategory: 'Otras bebidas',
    productInfo: '',
    price: 4500,
    image: '',
  },
  {
    name: 'Hervido de frutas',
    category: 'Bebidas',
    subCategory: 'Otras bebidas',
    productInfo: 'Frutos rojos, lulo con uchuva, maracuyá',
    price: 11000,
    image: '',
  },
  {
    name: 'Canelazo moneta',
    category: 'Bebidas',
    subCategory: 'Otras bebidas',
    productInfo: '',
    price: 9500,
    image: '',
  },
  {
    name: 'Cerveza artesanal',
    category: 'Bebidas',
    subCategory: 'Otras bebidas',
    productInfo: '',
    price: 11000,
    image: '',
  },
  {
    name: 'Pastel de pollo',
    category: 'Acompañamientos',
    subCategory: 'Hojaldre',
    productInfo: '',
    price: 4000,
    image: '',
  },
  {
    name: 'Dedo de queso',
    category: 'Acompañamientos',
    subCategory: 'Hojaldre',
    productInfo: '',
    price: 4000,
    image: '',
  },
  {
    name: 'Rollito de canela, frutos rojos o chocolate',
    category: 'Acompañamientos',
    subCategory: 'Hojaldre',
    productInfo: '',
    price: 4000,
    image: '',
  },
  {
    name: 'Cruffin',
    category: 'Acompañamientos',
    subCategory: 'Hojaldre',
    productInfo: '',
    price: 4000,
    image: '',
  },
  {
    name: 'Cruffin',
    category: 'Acompañamientos',
    subCategory: 'Hojaldre',
    productInfo: 'Queso con albahca, Vainilla con chocolate',
    price: 4000,
    image: '',
  },
  {
    name: 'Porcion de torta',
    category: 'Acompañamientos',
    subCategory: 'Pastelería',
    productInfo: '',
    price: 6000,
    image: '',
  },
  {
    name: 'Torta sin gluten',
    category: 'Acompañamientos',
    subCategory: 'Pastelería',
    productInfo: '',
    price: 6500,
    image: '',
  },
  {
    name: 'Porcion de galletas',
    category: 'Acompañamientos',
    subCategory: 'Pastelería',
    productInfo: '',
    price: 4800,
    image: '',
  },
  {
    name: 'Brocheta',
    category: 'Acompañamientos',
    subCategory: '',
    productInfo: 'Pan de quinoa, pepino encurtido, tomates secos y salsa de ajo',
    price: 11000,
    image: '',
  },
  {
    name: 'Quimbolate',
    category: 'Acompañamientos',
    subCategory: 'Tradicionales',
    productInfo: '',
    price: 3500,
    image: '',
  },
  {
    name: 'Envuelto de choclo',
    category: 'Acompañamientos',
    subCategory: 'Tradicionales',
    productInfo: '',
    price: 2500,
    image: '',
  },
  {
    name: 'Envuelto de choclo',
    category: 'Acompañamientos',
    subCategory: 'Hojaldre',
    productInfo: '',
    price: 3500,
    image: '',
  },
  {
    name: 'Porcion de frutas',
    category: 'Desayunos',
    subCategory: 'Desayunos',
    productInfo: '',
    price: 3500,
    image: '',
  },
  {
    name: 'Tradicional',
    category: 'Desayunos',
    subCategory: 'Desayunos',
    productInfo: 'Porción de fruta, huevos revueltos o fritos, pan y bebida',
    price: 11000,
    image: '',
  },
  {
    name: 'Especial',
    category: 'Desayunos',
    subCategory: 'Desayunos',
    productInfo: 'Porción de fruta, fritat u omelette, pan y bebida',
    price: 15000,
    image: '',
  },
  {
    name: 'Pollo ahumado',
    category: 'Sánduches',
    subCategory: 'Sandúches',
    productInfo: 'en pan de maíz morado',
    price: 13000,
    image: '',
  },
  {
    name: 'Tocineta ahumada',
    category: 'Sánduches',
    subCategory: 'Sandúches',
    productInfo: 'en pan de quinoa',
    price: 13000,
    image: '',
  },
]

export default menu