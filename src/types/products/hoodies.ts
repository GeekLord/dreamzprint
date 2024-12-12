import type { Product } from '../productTypes';

export const hoodieProducts: Product[] = [
  {
    title: "Premium Zip Hoodie",
    category: "Hoodies",
    description: "Warm and stylish zip-up hoodie",
    price: "$49.99",
    image: "https://images.unsplash.com/photo-1578587018452-892bacefd3f2?auto=format&fit=crop&q=80",
    colors: ["#403E43", "#8B5CF6", "#D946EF", "#0EA5E9"],
    overlayPosition: {
      top: "30%",
      left: "35%",
      width: "30%"
    }
  },
  {
    title: "Pullover Hoodie",
    category: "Hoodies",
    description: "Classic pullover design with kangaroo pocket",
    price: "$44.99",
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&q=80",
    colors: ["#1A1F2C", "#7E69AB", "#6E59A5", "#D6BCFA"],
    overlayPosition: {
      top: "25%",
      left: "32%",
      width: "36%"
    }
  },
  {
    title: "Tech Fleece Hoodie",
    category: "Hoodies",
    description: "Lightweight technical fleece for everyday comfort",
    price: "$54.99",
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&q=80",
    colors: ["#403E43", "#0EA5E9", "#8B5CF6", "#F97316"],
    overlayPosition: {
      top: "28%",
      left: "30%",
      width: "40%"
    }
  },
  {
    title: "Oversized Comfort Hoodie",
    category: "Hoodies",
    description: "Relaxed fit with premium comfort",
    price: "$59.99",
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&q=80",
    colors: ["#FEF7CD", "#E5DEFF", "#FFDEE2", "#D3E4FD"],
    overlayPosition: {
      top: "26%",
      left: "33%",
      width: "34%"
    }
  }
];