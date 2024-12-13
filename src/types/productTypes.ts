export interface Product {
  title: string;
  category: string;
  description: string;
  price: string;
  image: string;
  colors?: string[];
  colorImages?: {
    [key: string]: string;
  };
  overlayPosition: {
    top: string;
    left: string;
    width: string;
  };
}