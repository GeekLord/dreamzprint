import type { Product } from '../productTypes';

export const toteBagProducts: Product[] = [
  {
    title: "Canvas Tote Bag",
    category: "Tote Bags",
    description: "Eco-friendly shopping companion",
    price: "$16.99",
    image: "https://images.unsplash.com/photo-1597484662317-9bd7bdda2907?auto=format&fit=crop&q=80",
    colors: ["#FFFFFF", "#000000", "#C0C0C0", "#8B4513"],
    overlayPosition: {
      top: "20%",
      left: "20%",
      width: "60%"
    }
  },
  {
    title: "Beach Tote Bag",
    category: "Tote Bags",
    description: "Perfect for summer adventures",
    price: "$19.99",
    image: "https://images.unsplash.com/photo-1597484662317-9bd7bdda2907?auto=format&fit=crop&q=80",
    colors: ["#FFB6C1", "#87CEEB", "#98FB98", "#DDA0DD"],
    overlayPosition: {
      top: "20%",
      left: "20%",
      width: "60%"
    }
  }
];