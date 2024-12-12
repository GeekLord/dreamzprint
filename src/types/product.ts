export interface Product {
  id: string;
  title: string;
  category: string;
  description: string;
  price: number; // Changed from string to number to match database
  image: string;
  created_at?: string;
  colors?: string[]; // Added for UI components
  overlayPosition?: {
    top: string;
    left: string;
    width: string;
  };
}

// Create a separate type for the product catalog display
export interface ProductCatalog {
  category: string;
  items: Product[];
}

// Import all product data
import { tshirtProducts } from './products/tshirts';
import { hoodieProducts } from './products/hoodies';
import { sweatshirtProducts } from './products/sweatshirts';
import { phoneCaseProducts } from './products/phoneCases';
import { wallArtProducts } from './products/wallArt';
import { photoBookProducts } from './products/photoBooks';
import { canvasPrintProducts } from './products/canvasPrints';
import { toteBagProducts } from './products/toteBags';

// Export the product catalog
export const products: ProductCatalog[] = [
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
    category: "Photo Books",
    items: photoBookProducts
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