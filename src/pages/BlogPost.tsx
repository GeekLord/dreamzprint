import { useParams } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { sampleBlogPosts } from "@/types/blog";

const BlogPost = () => {
  const { id } = useParams();
  const post = sampleBlogPosts.find((p) => p.id === id);

  if (!post) {
    return (
      <div className="min-h-screen">
        <Navigation />
        <main className="container mx-auto px-4 py-24">
          <div className="text-center">
            <h1 className="text-2xl font-bold">Blog post not found</h1>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="container mx-auto px-4 py-24">
        <article className="max-w-3xl mx-auto space-y-8">
          <div className="space-y-4">
            <div className="aspect-video relative overflow-hidden rounded-lg">
              <img
                src={post.imageUrl}
                alt={post.title}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">{post.category}</span>
              <span className="text-sm text-muted-foreground">
                {new Date(post.date).toLocaleDateString()}
              </span>
            </div>
            <h1 className="text-4xl font-bold">{post.title}</h1>
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium">By {post.author}</span>
            </div>
          </div>
          <div className="prose dark:prose-invert max-w-none">
            <p>{post.content}</p>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPost;