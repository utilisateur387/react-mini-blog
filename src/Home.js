import React, { useState } from 'react';
import BlogList from './BlogList';

const Home = (props) => {
  const [blogs, setBlogs] = useState([
    { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
    { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
    { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
  ]);

  const handleDelete = (id) => {
    setBlogs((prev) => prev.filter(blog => blog.id !== id));
  };

  return (
    <div className="home">
      <BlogList blogs={blogs} title="All blogs" handleDelete={handleDelete} />
      <BlogList blogs={blogs.filter(blog => blog.author === 'mario')} title="Marios's blogs" handleDelete={handleDelete} />
    </div>
  );
}

export default Home;
