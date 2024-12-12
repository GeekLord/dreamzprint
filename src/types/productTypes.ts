export interface Product {
  id: string; // Added to match database schema
  title: string;
  category: string;
  description: string;
  price: number;
  image: string;
  colors?: string[];
  overlayPosition?: {
    top: string;
    left: string;
    width: string;
  };
}