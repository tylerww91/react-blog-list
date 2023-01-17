import './Main.css';
import BlogCard from '../BlogCard/BlogCard';
import { useBlogs } from '../../hooks/useBlogs.js';

export default function Main() {
  const blogs = useBlogs();
  console.log('blogs', blogs);
  return (
    <main>
      {blogs.map((blog) => (
        <BlogCard key={blog.id} {...blog} />
      ))}
    </main>
  );
}
