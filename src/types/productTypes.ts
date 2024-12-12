export interface Product {
  title: string;
  category: string;
  description: string;
  price: string;
  image: string;
  colors?: string[];
  overlayPosition: {
    top: string;
    left: string;
    width: string;
  };
}