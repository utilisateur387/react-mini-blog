import React, { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = (props) => {
  const [blogs, setBlogs] = useState(null);

  const handleDelete = (id) => {
    setBlogs((prev) => prev.filter(blog => blog.id !== id));
  };

  useEffect(() => {
    fetch('http://localhost:8000/blogs')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setBlogs(data);
      })
  }, []);

  return (
    <div className="home">
      <BlogList blogs={blogs} title="All blogs" handleDelete={handleDelete} />
    </div>
  );
}

export default Home;


// FILTER BLOGS THROUGH AUTHOR
// <BlogList blogs={blogs.filter(blog => blog.author === 'mario')} title={"Mario's blogs"} handleDelete={handleDelete} />
