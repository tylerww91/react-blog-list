import BlogCard from '../BlogCard/BlogCard';
import { useBlogs } from '../../hooks/useBlogs.js';

export default function Main() {
  const blogs = useBlogs();
  return (
    <main>
      {blogs.map((blog) => (
        <BlogCard key={blog.id} {...blog} />
      ))}
    </main>
  );
}
