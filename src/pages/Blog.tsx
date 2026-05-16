import React from 'react';
import { BookOpen, Calendar, Clock } from 'lucide-react';

// This is a placeholder for your future blog posts.
// You can easily add more objects to this array as you write new blogs.
const BLOG_POSTS = [
  {
    id: 1,
    title: 'The Art of Clean Code in React',
    excerpt: 'Exploring best practices, component composition, and state management techniques to keep your React codebase maintainable and scalable over time.',
    date: 'Oct 24, 2026',
    readTime: '5 min read',
  },
  {
    id: 2,
    title: 'Understanding TypeScript Generics',
    excerpt: 'A deep dive into how generics work in TypeScript, providing flexibility and type safety to your functions, classes, and interfaces.',
    date: 'Oct 15, 2026',
    readTime: '8 min read',
  },
  {
    id: 3,
    title: 'My Journey into Full-Stack Development',
    excerpt: 'Sharing my personal experiences, the challenges I faced, and the resources that helped me transition from frontend to full-stack engineering.',
    date: 'Sep 28, 2026',
    readTime: '6 min read',
  }
];

const Blog: React.FC = () => {
  return (
    <div className="page-transition">
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
        <BookOpen size={32} color="var(--text-color)" />
        <h1 style={{ margin: 0 }}>My Blog</h1>
      </div>
      <p style={{ marginBottom: '2.5rem', fontSize: '1.125rem' }}>
        Thoughts, tutorials, and insights about software engineering, design, and continuous learning.
      </p>

      <div className="blog-list">
        {BLOG_POSTS.map(post => (
          <article key={post.id} className="card blog-card">
            <div className="blog-meta" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                <Calendar size={14} /> {post.date}
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                <Clock size={14} /> {post.readTime}
              </span>
            </div>
            <h2 className="blog-title" style={{ marginTop: '0', fontSize: '1.5rem' }}>
              {post.title}
            </h2>
            <p style={{ margin: 0 }}>{post.excerpt}</p>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Blog;
