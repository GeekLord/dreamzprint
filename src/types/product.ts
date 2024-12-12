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
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
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
        image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b",
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
        image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
        overlayPosition: {
          top: "20%",
          left: "30%",
          width: "40%"
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
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
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
        image: "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9",
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
        image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952",
        overlayPosition: {
          top: "28%",
          left: "30%",
          width: "40%"
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
        image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334",
        overlayPosition: {
          top: "25%",
          left: "30%",
          width: "40%"
        }
      },
      {
        title: "Quarter-Zip Pullover",
        category: "Sweatshirts",
        description: "Versatile quarter-zip design",
        price: "$45.99",
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
        overlayPosition: {
          top: "22%",
          left: "28%",
          width: "44%"
        }
      }
    ]
  }
];