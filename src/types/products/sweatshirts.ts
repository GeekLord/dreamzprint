import type { Product } from '../productTypes';

export const sweatshirtProducts: Product[] = [
  {
    title: "Classic Crew Neck",
    category: "Sweatshirts",
    description: "Traditional crew neck sweatshirt",
    price: "$39.99",
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&q=80",
    colors: ["#F2FCE2", "#FEF7CD", "#FEC6A1", "#E5DEFF", "#FFDEE2"],
    overlayPosition: {
      top: "25%",
      left: "30%",
      width: "40%"
    }
  },
  {
    title: "Quarter-Zip Pullover",
    category: "Sweatshirts",
    description: "Versatile quarter-zip design",
    price: "$45.99",
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&q=80",
    colors: ["#403E43", "#8B5CF6", "#F97316", "#0EA5E9"],
    overlayPosition: {
      top: "22%",
      left: "28%",
      width: "44%"
    }
  },
  {
    title: "Premium Sweatshirt",
    category: "Sweatshirts",
    description: "Luxurious comfort with modern style",
    price: "$49.99",
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&q=80",
    colors: ["#9b87f5", "#7E69AB", "#6E59A5", "#1A1F2C"],
    overlayPosition: {
      top: "24%",
      left: "29%",
      width: "42%"
    }
  }
];