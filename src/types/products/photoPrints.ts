import type { Product } from '../productTypes';

export const photoBookProducts: Product[] = [
  {
    title: "Premium Photo Print",
    category: "Photo Print",
    description: "High-quality photo prints on premium paper",
    price: "$39.99",
    image: "/lovable-uploads/b1fdd896-4ef6-4d6a-81b4-771cf2c1307f.png",
    overlayPosition: {
      top: "5%",
      left: "5%",
      width: "90%"
    }
  },
  {
    title: "Standard Photo Print",
    category: "Photo Print",
    description: "Beautiful photo prints on standard paper",
    price: "$29.99",
    image: "/lovable-uploads/b1fdd896-4ef6-4d6a-81b4-771cf2c1307f.png",
    overlayPosition: {
      top: "5%",
      left: "5%",
      width: "90%"
    }
  }
];

export { photoBookProducts as photoPrintProducts };