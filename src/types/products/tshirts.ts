import type { Product } from '../productTypes';

export const tshirtProducts: Product[] = [
  {
    title: "Classic Cotton T-Shirt",
    category: "T-Shirts",
    description: "100% cotton, comfortable fit",
    price: "$24.99",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80",
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
    image: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&q=80",
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
    image: "https://images.unsplash.com/photo-1562157873-818bc0726f68?auto=format&fit=crop&q=80",
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
    image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&q=80",
    colors: ["#FFFFFF", "#000000", "#9b87f5", "#FEC6A1"],
    overlayPosition: {
      top: "23%",
      left: "28%",
      width: "44%"
    }
  }
];