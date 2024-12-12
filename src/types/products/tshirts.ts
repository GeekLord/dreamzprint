import type { Product } from '../productTypes';

export const tshirtProducts: Product[] = [
  {
    title: "Classic Cotton T-Shirt",
    category: "T-Shirts",
    description: "100% cotton, comfortable fit",
    price: "$24.99",
    image: "/lovable-uploads/556d287d-9c39-40b9-93dd-bd74c6af757b.png",
    colors: ["#FFFFFF", "#000000", "#8E9196", "#D6BCFA", "#FDE1D3"],
    overlayPosition: {
      top: "25%",
      left: "25%",
      width: "50%"
    }
  },
  {
    title: "Premium V-Neck T-Shirt",
    category: "T-Shirts",
    description: "Soft blend fabric with modern cut",
    price: "$29.99",
    image: "/lovable-uploads/2ecb0533-68aa-49ea-be4c-90ab318cc2fa.png",
    colors: ["#FFFFFF", "#000000", "#F2FCE2", "#FFDEE2", "#D3E4FD"],
    overlayPosition: {
      top: "22%",
      left: "28%",
      width: "44%"
    }
  },
  {
    title: "Athletic Performance Tee",
    category: "T-Shirts",
    description: "Moisture-wicking fabric for active lifestyle",
    price: "$34.99",
    image: "/lovable-uploads/c5678c08-dbf5-4839-9ef5-e93b7419d162.png",
    colors: ["#0EA5E9", "#8B5CF6", "#F97316", "#403E43", "#FFFFFF"],
    overlayPosition: {
      top: "20%",
      left: "30%",
      width: "40%"
    }
  },
  {
    title: "Long Sleeve T-Shirt",
    category: "T-Shirts",
    description: "Perfect for layering or cooler days",
    price: "$32.99",
    image: "/lovable-uploads/aa2fcc27-196a-4ef7-91f9-01332cbb6a9e.png",
    colors: ["#FFFFFF", "#000000", "#9b87f5", "#FEC6A1"],
    overlayPosition: {
      top: "23%",
      left: "28%",
      width: "44%"
    }
  }
];