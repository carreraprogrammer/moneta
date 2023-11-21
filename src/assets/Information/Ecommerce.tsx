// Importaciones de la carpeta ecommerce-featured
import featuredCafe1 from '../Images/ecomerce-featured/cafe1.png'
import featuredCafe2 from '../Images/ecomerce-featured/cafe2.png'
import featuredCafe3 from '../Images/ecomerce-featured/cafe3.png'
import featuredChemex from '../Images/ecomerce-featured/chemex.png';
import featuredPrensa from '../Images/ecomerce-featured/prensa.png';
import featuredSifon from '../Images/ecomerce-featured/sifon.png';
import featuredMolino from '../Images/ecomerce-featured/molino.png';
import featuredVandola from '../Images/ecomerce-featured/vandola.png';
import featuredMoca from '../Images/ecomerce-featured/moca.png';

// Importaciones de la carpeta ecommerce
import gridCafe1 from '../Images/ecommerce/cafe1.webp'
import gridCafe2 from '../Images/ecommerce/cafe2.webp'
import gridCafe3 from '../Images/ecommerce/cafe3.webp'
import gridChemex from '../Images/ecommerce/chemex.webp';
import gridPrensa from '../Images/ecommerce/prensa.webp';
import gridSifon from '../Images/ecommerce/sifon.webp';
import gridMolino from '../Images/ecommerce/molino.webp';
import gridVandola from '../Images/ecommerce/vandola.webp';
import gridMoca from '../Images/ecommerce/moca.webp';

// Importaciones de la carpeta ecommerce-featured-mobile
import mobileFeaturedCafe1 from '../Images/ecommerce-featured-mobile/cafe1.webp'
import mobileFeaturedCafe2 from '../Images/ecommerce-featured-mobile/cafe2.webp'
import mobileFeaturedCafe3 from '../Images/ecommerce-featured-mobile/cafe3.webp'
import mobileFeaturedChemex from '../Images/ecommerce-featured-mobile/chemex.webp';
import mobileFeaturedPrensa from '../Images/ecommerce-featured-mobile/prensa.webp';
import mobileFeaturedSifon from '../Images/ecommerce-featured-mobile/sifon.webp';
import mobileFeaturedMolino from '../Images/ecommerce-featured-mobile/molino.webp';
import mobileFeaturedVandola from '../Images/ecommerce-featured-mobile/vandola.webp';
import mobileFeaturedMoca from '../Images/ecommerce-featured-mobile/moca.webp';

// Importaciones de la carpeta ecommerce-mobile
import mobileGridCafe1 from '../Images/ecommerce-mobile/cafe1 .webp'
import mobileGridCafe2 from '../Images/ecommerce-mobile/cafe2.webp'
import mobileGridCafe3 from '../Images/ecommerce-mobile/cafe3.webp'
import mobileGridChemex from '../Images/ecommerce-mobile/chemex.webp';
import mobileGridPrensa from '../Images/ecommerce-mobile/prensa.webp';
import mobileGridSifon from '../Images/ecommerce-mobile/sifon.webp';
import mobileGridMolino from '../Images/ecommerce-mobile/molino.webp';
import mobileGridVandola from '../Images/ecommerce-mobile/vandola.webp';
import mobileGridMoca from '../Images/ecommerce-mobile/moca.webp';

export interface Product {
  nombre: string;
  categoria: string;
  precio: number;
  descuento: boolean;
  porcentajeDescuento: number;
  destacado: boolean;
  descripcion: string;
  imagenMovil: string;
  imagenPc: string;
  imagenDestacadaMovil: string;
  imagenDestacadaPc: string;
}

export const products: Product[] = [
  {
    nombre: "Prensa Francesa",
    categoria: "Utensilios de Café",
    precio: 25.99,
    descuento: false,
    porcentajeDescuento: 0,
    destacado: false,
    descripcion: "Prensa francesa de acero inoxidable, ideal para una extracción perfecta de café.",
    imagenMovil: mobileGridPrensa,
    imagenPc: gridPrensa,
    imagenDestacadaMovil: mobileFeaturedPrensa,
    imagenDestacadaPc: featuredPrensa
  },
  {
    nombre: "Moca Italiana",
    categoria: "Utensilios de Café",
    precio: 34.99,
    descuento: true,
    porcentajeDescuento: 15,
    destacado: false,
    descripcion: "Auténtica moca italiana para preparar un espresso clásico en casa.",
    imagenMovil: mobileGridMoca,
    imagenPc: gridMoca,
    imagenDestacadaMovil: mobileFeaturedMoca,
    imagenDestacadaPc: featuredMoca
  },
  {
    nombre: "Vandola Artesanal",
    categoria: "Cafeteras",
    precio: 50.00,
    descuento: false,
    porcentajeDescuento: 0,
    destacado: true,
    descripcion: "Vandola artesanal hecha a mano, perfecta para un café de filtro suave.",
    imagenMovil: mobileGridVandola,
    imagenPc: gridVandola,
    imagenDestacadaMovil: mobileFeaturedVandola,
    imagenDestacadaPc: featuredVandola
  },
  {
    nombre: "Café de Especialidad Geisha",
    categoria: "Café",
    precio: 29.99,
    descuento: true,
    porcentajeDescuento: 10,
    destacado: false,
    descripcion: "Café Geisha de alta calidad, con notas florales y un perfil de sabor único.",
    imagenMovil: mobileGridCafe1,
    imagenPc: gridCafe1,
    imagenDestacadaMovil: mobileFeaturedCafe1,
    imagenDestacadaPc: featuredCafe1
  },
  {
    nombre: "Café de Especialidad Árabe",
    categoria: "Café",
    precio: 24.99,
    descuento: false,
    porcentajeDescuento: 0,
    destacado: false,
    descripcion: "Café árabe de especialidad, con un toque exótico y especiado.",
    imagenMovil: mobileGridCafe2,
    imagenPc: gridCafe2,
    imagenDestacadaMovil: mobileFeaturedCafe2,
    imagenDestacadaPc: featuredCafe2
  },
  {
    nombre: "Café de Especialidad Blend",
    categoria: "Café",
    precio: 22.50,
    descuento: true,
    porcentajeDescuento: 20,
    destacado: true,
    descripcion: "Mezcla de cafés de especialidad para un balance perfecto de sabor.",
    imagenMovil: mobileGridCafe3,
    imagenPc: gridCafe3,
    imagenDestacadaMovil: mobileFeaturedCafe3,
    imagenDestacadaPc: featuredCafe3
  },
  {
    nombre: "Sifón Japonés",
    categoria: "Utensilios de Café",
    precio: 80.00,
    descuento: false,
    porcentajeDescuento: 0,
    destacado: false,
    descripcion: "Elegante sifón japonés para una preparación espectacular y deliciosa de café.",
    imagenMovil: mobileGridSifon,
    imagenPc: gridSifon,
    imagenDestacadaMovil: mobileFeaturedSifon,
    imagenDestacadaPc: featuredSifon
  },
  {
    nombre: "Chemex",
    categoria: "Utensilios de Café",
    precio: 45.99,
    descuento: true,
    porcentajeDescuento: 15,
    destacado: true,
    descripcion: "Chemex clásico para una extracción limpia y pura del café.",
    imagenMovil: mobileGridChemex,
    imagenPc: gridChemex,
    imagenDestacadaMovil: mobileFeaturedChemex,
    imagenDestacadaPc: featuredChemex
  },
  {
    nombre: "Molino de Café Manual",
    categoria: "Accesorios de Café",
    precio: 19.99,
    descuento: false,
    porcentajeDescuento: 0,
    destacado: false,
    descripcion: "Molino manual para café, perfecto para obtener una molienda fresca y a tu gusto.",
    imagenMovil: mobileGridMolino,
    imagenPc: gridMolino,
    imagenDestacadaMovil: mobileFeaturedMolino,
    imagenDestacadaPc: featuredMolino
  }
];

