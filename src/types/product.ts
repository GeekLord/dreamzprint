export interface Product {
  title: string;
  category: string;
  description: string;
  price: string;
  image: string;
  overlayPosition: {
    top: string;
    left: string;
    width: string;
  };
}

export interface ProductCategory {
  category: string;
  items: Product[];
}

export const products: ProductCategory[] = [
  {
    category: "T-Shirts",
    items: [
      {
        title: "Classic Cotton T-Shirt",
        description: "100% cotton, comfortable fit",
        price: "$24.99",
        image: "/placeholder.svg",
        overlayPosition: {
          top: "20%",
          left: "25%",
          width: "50%"
        }
      },
      // ... Add more t-shirt products here
    ]
  },
  // ... Add more categories here
];