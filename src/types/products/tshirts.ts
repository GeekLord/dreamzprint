import type { Product } from '../productTypes';

export const tshirtProducts: Product[] = [
  {
    title: "Classic Cotton T-Shirt",
    category: "T-Shirts",
    description: "100% cotton, comfortable fit",
    price: "$24.99",
    image: "/lovable-uploads/00974465-20cb-4a67-9828-5d2b0e7c5b9e.png", // White t-shirt
    colors: ["#FFFFFF", "#000000", "#8E9196", "#FDE1D3", "#D6BCFA"],
    colorImages: {
      "#FFFFFF": "/lovable-uploads/00974465-20cb-4a67-9828-5d2b0e7c5b9e.png",
      "#000000": "/lovable-uploads/36efaf01-399b-41ea-8e5b-e31527704971.png",
      "#8E9196": "/lovable-uploads/7c8ef813-3332-45d1-a2b9-89721e9deb2a.png",
      "#FDE1D3": "/lovable-uploads/4f105905-963e-42e9-8931-98762b8cd63b.png",
      "#D6BCFA": "/lovable-uploads/a5fa21ac-517f-41da-87b2-0a5229a52ee4.png"
    },
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
    image: "/lovable-uploads/c7c9c89b-fd2a-475e-8278-eb62b0625ab8.png", // White t-shirt
    colors: ["#FFFFFF", "#000000", "#87CEEB", "#98FB98", "#FFB6C1"],
    colorImages: {
      "#FFFFFF": "/lovable-uploads/c7c9c89b-fd2a-475e-8278-eb62b0625ab8.png",
      "#000000": "/lovable-uploads/fef3a567-1af1-4874-9634-f68a20c2537e.png",
      "#87CEEB": "/lovable-uploads/0cb33359-4516-4dce-9e6e-18c533bd2381.png",
      "#98FB98": "/lovable-uploads/ae3d4f03-6cfe-4d70-a0fb-e6a20c085b3d.png",
      "#FFB6C1": "/lovable-uploads/e33555ff-6a80-4c88-bc5e-a8a7f979cc42.png"
    },
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