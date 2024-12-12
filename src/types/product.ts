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
        category: "T-Shirts",
        description: "100% cotton, comfortable fit",
        price: "$24.99",
        image: "/placeholder.svg",
        overlayPosition: {
          top: "20%",
          left: "25%",
          width: "50%"
        }
      },
      {
        title: "Premium V-Neck T-Shirt",
        category: "T-Shirts",
        description: "Soft blend fabric with modern cut",
        price: "$29.99",
        image: "/placeholder.svg",
        overlayPosition: {
          top: "20%",
          left: "25%",
          width: "50%"
        }
      },
      {
        title: "Athletic Performance Tee",
        category: "T-Shirts",
        description: "Moisture-wicking fabric for active lifestyle",
        price: "$34.99",
        image: "/placeholder.svg",
        overlayPosition: {
          top: "20%",
          left: "25%",
          width: "50%"
        }
      }
    ]
  },
  {
    category: "Hoodies",
    items: [
      {
        title: "Premium Zip Hoodie",
        category: "Hoodies",
        description: "Warm and stylish zip-up hoodie",
        price: "$49.99",
        image: "/placeholder.svg",
        overlayPosition: {
          top: "20%",
          left: "25%",
          width: "50%"
        }
      },
      {
        title: "Pullover Hoodie",
        category: "Hoodies",
        description: "Classic pullover design with kangaroo pocket",
        price: "$44.99",
        image: "/placeholder.svg",
        overlayPosition: {
          top: "20%",
          left: "25%",
          width: "50%"
        }
      },
      {
        title: "Tech Fleece Hoodie",
        category: "Hoodies",
        description: "Lightweight technical fleece for everyday comfort",
        price: "$54.99",
        image: "/placeholder.svg",
        overlayPosition: {
          top: "20%",
          left: "25%",
          width: "50%"
        }
      }
    ]
  },
  {
    category: "Sweatshirts",
    items: [
      {
        title: "Classic Crew Neck",
        category: "Sweatshirts",
        description: "Traditional crew neck sweatshirt",
        price: "$39.99",
        image: "/placeholder.svg",
        overlayPosition: {
          top: "20%",
          left: "25%",
          width: "50%"
        }
      },
      {
        title: "Quarter-Zip Pullover",
        category: "Sweatshirts",
        description: "Versatile quarter-zip design",
        price: "$45.99",
        image: "/placeholder.svg",
        overlayPosition: {
          top: "20%",
          left: "25%",
          width: "50%"
        }
      }
    ]
  }
];