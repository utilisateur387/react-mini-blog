import React, { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = (props) => {
  const [blogs, setBlogs] = useState(null);

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
      { blogs && <BlogList blogs={blogs} title="All blogs" /> }
    </div>
  );
}

export default Home;


// FILTER BLOGS THROUGH AUTHOR
// <BlogList blogs={blogs.filter(blog => blog.author === 'mario')} title={"Mario's blogs"} handleDelete={handleDelete} />
