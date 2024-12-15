import type { Product } from '../productTypes';

export const phoneCaseProducts: Product[] = [
  {
    title: "iPhone Case",
    category: "Phone Cases",
    description: "Durable protection with style",
    price: "$19.99",
    image: "/lovable-uploads/9f8f5b8b-5395-46d3-a4ad-d6980d4eb67c.png",
    colors: ["#000000", "#FFFFFF", "#FF69B4", "#4169E1", "#32CD32"],
    overlayPosition: {
      top: "22%",
      left: "15%",
      width: "70%"
    }
  },
  {
    title: "Samsung Case",
    category: "Phone Cases",
    description: "Slim fit with maximum protection",
    price: "$19.99",
    image: "/lovable-uploads/516fade3-9851-4f39-abae-e7b5408baa7c.png",
    colors: ["#000000", "#FFFFFF", "#FFD700", "#FF4500", "#4682B4"],
    overlayPosition: {
      top: "22%",
      left: "15%",
      width: "70%"
    }
  }
];