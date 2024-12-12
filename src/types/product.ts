export interface Product {
  title: string;
  category: string;
  description: string;
  price: string;
  image: string;
  colors?: string[];
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
        image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b",
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
        image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
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
        image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990",
        colors: ["#FFFFFF", "#000000", "#9b87f5", "#FEC6A1"],
        overlayPosition: {
          top: "23%",
          left: "28%",
          width: "44%"
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
        image: "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9",
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
        image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952",
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
        image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7",
        colors: ["#FEF7CD", "#E5DEFF", "#FFDEE2", "#D3E4FD"],
        overlayPosition: {
          top: "26%",
          left: "33%",
          width: "34%"
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
        colors: ["#F2FCE2", "#FEF7CD", "#FEC6A1", "#E5DEFF", "#FFDEE2"],
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
        colors: ["#403E43", "#8B5CF6", "#F97316", "#0EA5E9"],
        overlayPosition: {
          top: "22%",
          left: "28%",
          width: "44%"
        }
      },
      {
        title: "Premium Sweatshirt",
        category: "Sweatshirts",
        description: "Luxurious comfort with modern style",
        price: "$49.99",
        image: "https://images.unsplash.com/photo-1578587018452-892bacefd3f2",
        colors: ["#9b87f5", "#7E69AB", "#6E59A5", "#1A1F2C"],
        overlayPosition: {
          top: "24%",
          left: "29%",
          width: "42%"
        }
      }
    ]
  }
];