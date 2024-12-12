import type { Product } from '../productTypes';

export const phoneCaseProducts: Product[] = [
  {
    title: "iPhone Case",
    category: "Phone Cases",
    description: "Durable protection with style",
    price: "$19.99",
    image: "/lovable-uploads/2ecb0533-68aa-49ea-be4c-90ab318cc2fa.png",
    colors: ["#000000", "#FFFFFF", "#FF69B4", "#4169E1", "#32CD32"],
    overlayPosition: {
      top: "15%",
      left: "10%",
      width: "80%"
    }
  },
  {
    title: "Samsung Case",
    category: "Phone Cases",
    description: "Slim fit with maximum protection",
    price: "$19.99",
    image: "/lovable-uploads/2ecb0533-68aa-49ea-be4c-90ab318cc2fa.png",
    colors: ["#000000", "#FFFFFF", "#FFD700", "#FF4500", "#4682B4"],
    overlayPosition: {
      top: "15%",
      left: "10%",
      width: "80%"
    }
  }
];