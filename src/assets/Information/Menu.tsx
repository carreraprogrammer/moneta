interface Product {
  name: string;
  productInfo: string;
  price: number;
  image: string;
}

interface SubCategory {
  name: string;
  products: Product[];
}

export interface Category {
  subCategories: SubCategory[];
}

export type MenuTypo = Partial<{
  Bebidas: Category;
  Acompañamientos: Category;
  Desayunos: Category;
  Sánduches: Category;
}>;


const menu:MenuTypo = {
  Bebidas: {
    subCategories: [
      {
        name: 'Tintos',
        products: [
          { name: 'Tinto', productInfo: 'Café colado por goteo', price: 3500, image: '' },
          { name: 'Campesino', productInfo: 'Tinto con jarabe de panela y especias', price: 5000, image: '' },
          { name: 'Verraquillo', productInfo: 'Tinto campesino con licor', price: 8500, image: '' }
        ]
      },
      {
        name: 'Espressos',
        products: [
          { name: 'Espresso', productInfo: 'Café con sabor y textura concentrados', price: 4500, image: '' },
          { name: 'Americano', productInfo: 'Espresso doble con agua', price: 4500, image: '' },
          { name: 'Macchiato', productInfo: 'Espresso con una mancha de leche texturizada', price: 5000, image: '' }
        ]
      },
      {
        name: 'Espresso',
        products: [
          { name: 'Con Panna', productInfo: 'Espresso con crema chantilly', price: 7000, image: '' },
          { name: 'Romano', productInfo: 'Espresso con Limon', price: 5000, image: '' }
        ]
      },
      {
        name: 'Adicionales',
        products: [
          { name: 'Crema chantilly', productInfo: '', price: 3000, image: '' },
          { name: 'Sirope', productInfo: 'Vainilla, caramelo, campesino', price: 2500, image: '' },
          { name: 'Licor', productInfo: '', price: 6000, image: '' }
        ]
      },
      {
        name: 'Otros cafés',
        products: [
          { name: 'Cold Brew', productInfo: 'Café extraido en frío con hielos', price: 6000, image: '' },
          { name: 'Fredo Moneta', productInfo: 'Espresso doble con zumo de naranja, sirope de frutos rojos y hielo', price: 9000, image: '' },
          { name: 'Freddo Moneta Envenenado', productInfo: 'Freddo Moneta con licor', price: 14000, image: '' },
          { name: 'Afogatto', productInfo: 'Espresso con helado de vainilla', price: 8500, image: '' },
          { name: 'Irlandés', productInfo: 'Tinto con whisky, azúcar morena y crema de leche', price: 12000, image: '' },
          { name: 'Granizado', productInfo: 'Espresso doble con cristales de hielo, caramelo y leche', price: 8500, image: '' },
          { name: 'Crema de café y cacao', productInfo: 'Bebida cremosa con licor artesanal servida con hielos', price: 10000, image: '' }
        ]
      },
      {
        name: 'Lácteos',
        products: [
          { name: 'Cappuccino', productInfo: 'Espresso sencillo con leche vaporizada pequeño', price: 5500, image: '' },
          { name: 'Capuccino doble', productInfo: 'Espresso doble con leche vaporizada grande', price: 6500, image: '' },
          { name: 'Flat White', productInfo: 'Espresso doble con leche vaporizada pequeño', price: 6000, image: '' },
          { name: 'Vienés', productInfo: 'Espresso sencillo con leche vaporizada y crema chantilly', price: 8000, image: '' },
          { name: 'Mocaccino', productInfo: 'Espresso sencillo, chocolate y leche vaporizada', price: 7000, image: '' },
          { name: 'Latte', productInfo: 'Espresso sencillo con leche vaporizada grande', price: 5800, image: '' },
          { name: 'Latte Chai', productInfo: 'Espresso sencillo con leche vaporizada, jarabe de panela y especias', price: 7000, image: '' },
          { name: 'Latte Frio', productInfo: 'Espresso doble con leche texturizada y hielo', price: 7000, image: '' }
        ]
      },
      {
        name: 'Otras bebidas',
        products: [
          { name: 'Jugo Natural en agua', productInfo: '', price: 5000, image: '' },
          { name: 'Jugo Natural en leche', productInfo: '', price: 6000, image: '' },
          { name: 'Limonada Natural', productInfo: '', price: 4000, image: '' },
          { name: 'Vaso de leche', productInfo: '', price: 3500, image: '' },
          { name: 'Soda Italiana', productInfo: 'Bebida gaseosa preparada con frutas y jarabes naturalez', price: 7000, image: '' },
          { name: 'Soda Italiana envenenada', productInfo: 'Soda Italiana con licor', price: 13000, image: '' },
          { name: 'Malteada', productInfo: 'Café, chocolate o frutos rojos', price: 10500, image: '' },
          { name: 'Agua de Panela', productInfo: 'Con jarabe de panela y especias (fría o caliente)', price: 3500, image: '' },
          { name: 'Chocolate', productInfo: '', price: 6000, image: '' },
          { name: 'Té Matcha', productInfo: '', price: 7000, image: '' },
          { name: 'Aromática de hierbas y especias', productInfo: '', price: 3500, image: '' },
          { name: 'Aromática de frutas deshidratadas', productInfo: '', price: 4500, image: '' },
          { name: 'Infusión de hoja de coca', productInfo: '', price: 4500, image: '' },
          { name: 'Hervido de frutas', productInfo: 'Frutos rojos, lulo con uchuva, maracuyá', price: 11000, image: '' },
          { name: 'Canelazo moneta', productInfo: '', price: 9500, image: '' },
          { name: 'Cerveza artesanal', productInfo: '', price: 11000, image: '' }
        ]
      }
    ]
  },
  Acompañamientos: {
    subCategories: [
      {
        name: 'Hojaldre',
        products: [
          { name: 'Pastel de pollo', productInfo: '', price: 4000, image: '' },
          { name: 'Dedo de queso', productInfo: '', price: 4000, image: '' },
          { name: 'Rollito de canela, frutos rojos o chocolate', productInfo: '', price: 4000, image: '' },
          { name: 'Cruffin', productInfo: '', price: 4000, image: '' },
          { name: 'Cruffin', productInfo: 'Queso con albahca, Vainilla con chocolate', price: 4000, image: '' }
        ]
      },
      {
        name: 'Pastelería',
        products: [
          { name: 'Porcion de torta', productInfo: '', price: 6000, image: '' },
          { name: 'Torta sin gluten', productInfo: '', price: 6500, image: '' },
          { name: 'Porcion de galletas', productInfo: '', price: 4800, image: '' }
        ]
      },
      {
        name: 'Tradicionales',
        products: [
          { name: 'Brocheta', productInfo: 'Pan de quinoa, pepino encurtido, tomates secos y salsa de ajo', price: 11000, image: '' },
          { name: 'Quimbolate', productInfo: '', price: 3500, image: '' },
          { name: 'Envuelto de choclo', productInfo: '', price: 2500, image: '' },
          { name: 'Envuelto de choclo', productInfo: '', price: 3500, image: '' }
        ]
      }
    ]
  },
  Desayunos: {
    subCategories: [
      {
        name: 'Desayunos',
        products: [
          { name: 'Porcion de frutas', productInfo: '', price: 3500, image: '' },
          { name: 'Tradicional', productInfo: 'Porción de fruta, huevos revueltos o fritos, pan y bebida', price: 11000, image: '' },
          { name: 'Especial', productInfo: 'Porción de fruta, fritat u omelette, pan y bebida', price: 15000, image: '' }
        ]
      }
    ]
  },

  Sánduches: {
    subCategories: [
      {
        name: 'Sánduches',
        products: [
          { name: 'Pollo ahumado', productInfo: 'en pan de maíz morado', price: 13000, image: '' },
          { name: 'Tocineta ahumada', productInfo: 'en pan de quinoa', price: 13000, image: '' }
        ]
      }
    ]
  }
};

export default menu;