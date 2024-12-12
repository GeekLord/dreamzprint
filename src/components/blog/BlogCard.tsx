import { BlogPost } from "@/types/blog";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Link } from "react-router-dom";

interface BlogCardProps {
  post: BlogPost;
}

export const BlogCard = ({ post }: BlogCardProps) => {
  return (
    <Link to={`/blog/${post.id}`}>
      <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow">
        <div className="aspect-video relative overflow-hidden">
          <img
            src={post.imageUrl}
            alt={post.title}
            className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
          />
        </div>
        <CardHeader className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">{post.category}</span>
            <span className="text-sm text-muted-foreground">{new Date(post.date).toLocaleDateString()}</span>
          </div>
          <h3 className="text-xl font-semibold leading-tight hover:text-primary transition-colors">
            {post.title}
          </h3>
          <p className="text-sm text-muted-foreground">{post.excerpt}</p>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium">By {post.author}</span>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};