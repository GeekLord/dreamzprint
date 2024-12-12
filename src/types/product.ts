// First, let's split this large file into smaller ones for better maintainability
import { type Product } from './productTypes';
import { tshirtProducts } from './products/tshirts';
import { hoodieProducts } from './products/hoodies';
import { sweatshirtProducts } from './products/sweatshirts';
import { phoneCaseProducts } from './products/phoneCases';
import { wallArtProducts } from './products/wallArt';
import { photoPrintProducts } from './products/photoPrints';
import { canvasPrintProducts } from './products/canvasPrints';
import { toteBagProducts } from './products/toteBags';

export type { Product };
export type ProductCategory = {
  category: string;
  items: Product[];
};

export const products: ProductCategory[] = [
  {
    category: "T-Shirts",
    items: tshirtProducts
  },
  {
    category: "Hoodies",
    items: hoodieProducts
  },
  {
    category: "Sweatshirts",
    items: sweatshirtProducts
  },
  {
    category: "Phone Cases",
    items: phoneCaseProducts
  },
  {
    category: "Wall Art",
    items: wallArtProducts
  },
  {
    category: "Photo Print",
    items: photoPrintProducts
  },
  {
    category: "Canvas Prints",
    items: canvasPrintProducts
  },
  {
    category: "Tote Bags",
    items: toteBagProducts
  }
];