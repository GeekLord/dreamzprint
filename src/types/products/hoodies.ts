import type { Product } from '../productTypes';

export const hoodieProducts: Product[] = [
  {
    title: "Premium Zip Hoodie",
    category: "Hoodies",
    description: "Warm and stylish zip-up hoodie",
    price: "$49.99",
    image: "/lovable-uploads/9e2a03a8-dd28-4168-b022-4aee9cc7ee2b.png", // Light blue default
    colors: ["#A8D8E6", "#FFB6C1", "#FFF4BD", "#FFFFFF"], // Light blue, pink, yellow, white
    colorImages: {
      "#A8D8E6": "/lovable-uploads/9e2a03a8-dd28-4168-b022-4aee9cc7ee2b.png", // Light blue
      "#FFB6C1": "/lovable-uploads/35bc51df-aa49-4421-b993-443c87a34898.png", // Pink
      "#FFF4BD": "/lovable-uploads/6197d84b-79b8-4c2d-b2e6-224c217af8f4.png", // Yellow
      "#FFFFFF": "/lovable-uploads/1d23c48c-2fb5-4df1-a1d4-aabf1a5b5e9e.png"  // White
    },
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