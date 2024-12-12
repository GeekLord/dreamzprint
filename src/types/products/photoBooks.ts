import type { Product } from '../productTypes';

export const photoBookProducts: Product[] = [
  {
    title: "Hardcover Photo Book",
    category: "Photo Books",
    description: "Premium quality photo album",
    price: "$39.99",
    image: "https://images.unsplash.com/photo-1589998059171-988d887df646?auto=format&fit=crop&q=80",
    overlayPosition: {
      top: "5%",
      left: "5%",
      width: "90%"
    }
  },
  {
    title: "Softcover Photo Book",
    category: "Photo Books",
    description: "Flexible and lightweight photo book",
    price: "$29.99",
    image: "https://images.unsplash.com/photo-1589998059171-988d887df646?auto=format&fit=crop&q=80",
    overlayPosition: {
      top: "5%",
      left: "5%",
      width: "90%"
    }
  }
];