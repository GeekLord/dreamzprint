import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { BlogCard } from "@/components/blog/BlogCard";
import { sampleBlogPosts } from "@/types/blog";

const Blog = () => {
  console.log("Total blog posts:", sampleBlogPosts.length);
  
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="container mx-auto px-4 py-24">
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold">Our Blog</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Stay updated with the latest trends in custom printing, design tips, and industry insights.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sampleBlogPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;