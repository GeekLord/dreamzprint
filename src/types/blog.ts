export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  imageUrl: string;
  category: string;
}

export const sampleBlogPosts: BlogPost[] = [
  {
    id: "1",
    title: "The Art of Custom T-Shirt Design",
    excerpt: "Discover the essential principles of creating eye-catching custom t-shirt designs that stand out.",
    content: "Creating the perfect custom t-shirt design requires a delicate balance of creativity, technical knowledge, and understanding of current trends. In this guide, we'll explore the fundamental principles that make a t-shirt design truly stand out...",
    author: "Sarah Johnson",
    date: "2024-03-15",
    imageUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    category: "Design Tips"
  },
  {
    id: "2",
    title: "Sustainable Printing: The Future of Custom Apparel",
    excerpt: "Learn about eco-friendly printing techniques and sustainable materials in custom apparel production.",
    content: "As environmental consciousness grows, the custom printing industry is evolving to embrace sustainable practices. From water-based inks to organic materials, discover how modern printing techniques are becoming more environmentally friendly...",
    author: "Michael Chen",
    date: "2024-03-10",
    imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    category: "Sustainability"
  },
  {
    id: "3",
    title: "AI in Custom Design: A Game Changer",
    excerpt: "Explore how artificial intelligence is revolutionizing the custom design industry.",
    content: "Artificial intelligence is transforming the way we approach custom design. From automated design suggestions to personalized recommendations, AI is making it easier than ever to create unique and personalized products...",
    author: "Emily Rodriguez",
    date: "2024-03-05",
    imageUrl: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    category: "Technology"
  }
];