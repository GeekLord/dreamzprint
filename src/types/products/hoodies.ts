import type { Product } from '../productTypes';

export const hoodieProducts: Product[] = [
  {
    title: "Premium Zip Hoodie",
    category: "Hoodies",
    description: "Warm and stylish zip-up hoodie",
    price: "$49.99",
    image: "/lovable-uploads/1d23c48c-2fb5-4df1-a1d4-aabf1a5b5e9e.png",
    colors: ["#FFFFFF", "#A8D8E6", "#FFB6C1", "#FFF4BD"],
    colorImages: {
      "#FFFFFF": "/lovable-uploads/1d23c48c-2fb5-4df1-a1d4-aabf1a5b5e9e.png",
      "#A8D8E6": "/lovable-uploads/9e2a03a8-dd28-4168-b022-4aee9cc7ee2b.png",
      "#FFB6C1": "/lovable-uploads/35bc51df-aa49-4421-b993-443c87a34898.png",
      "#FFF4BD": "/lovable-uploads/6197d84b-79b8-4c2d-b2e6-224c217af8f4.png"
    },
    overlayPosition: {
      top: "32%",
      left: "35%",
      width: "30%"
    }
  },
  {
    title: "Pullover Hoodie",
    category: "Hoodies",
    description: "Classic pullover design with kangaroo pocket",
    price: "$44.99",
    image: "/lovable-uploads/4a8eba42-e623-4f30-9f7a-36dd22a9cf0e.png", // White default
    colors: ["#FFFFFF", "#A8D8E6", "#FFB6C1", "#FFF4BD", "#E6E6FA"], // White, Light blue, pink, yellow, lavender
    colorImages: {
      "#FFFFFF": "/lovable-uploads/4a8eba42-e623-4f30-9f7a-36dd22a9cf0e.png", // White
      "#A8D8E6": "/lovable-uploads/9ff18ac5-1bf8-4baa-8cd2-e7240434bf05.png", // Light blue
      "#FFB6C1": "/lovable-uploads/472ddce6-2108-47ce-ade5-602e5916e069.png", // Pink
      "#FFF4BD": "/lovable-uploads/58317098-8526-4af7-a58e-d308fe7a342f.png", // Yellow
      "#E6E6FA": "/lovable-uploads/42ca2059-40a2-4240-9c4b-e4649564c7e8.png"  // Lavender
    },
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