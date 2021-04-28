import React, { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = (props) => {
  const [blogs, setBlogs] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      fetch('http://localhost:8000/blogs')
      .then(response => response.json())
      .then(data => {
        setIsLoading(false);
        setBlogs(data);
      })
    }, 400)
  }, []);

  return (
    <div className="home">
      { isLoading && <div>Loading...</div> }
      { blogs && <BlogList blogs={blogs} title="All blogs" /> }
    </div>
  );
}

export default Home;

// npx json-server --watch data/db.json --port 8000
