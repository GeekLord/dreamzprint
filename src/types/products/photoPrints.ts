import type { Product } from '../productTypes';

export const photoBookProducts: Product[] = [
  {
    title: "Premium Photo Print",
    category: "Photo Print",
    description: "High-quality photo prints on premium paper",
    price: "$39.99",
    image: "https://images.unsplash.com/photo-1473091534298-04dcbce3278c?auto=format&fit=crop&q=80",
    overlayPosition: {
      top: "5%",
      left: "5%",
      width: "90%"
    }
  },
  {
    title: "Standard Photo Print",
    category: "Photo Print",
    description: "Beautiful photo prints on standard paper",
    price: "$29.99",
    image: "https://images.unsplash.com/photo-1473091534298-04dcbce3278c?auto=format&fit=crop&q=80",
    overlayPosition: {
      top: "5%",
      left: "5%",
      width: "90%"
    }
  }
];

export { photoBookProducts as photoPrintProducts };