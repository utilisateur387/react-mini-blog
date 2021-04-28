import React, { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = (props) => {
  const [blogs, setBlogs] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

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
      { isLoading && <div>Loading...</div> }
      { blogs && <BlogList blogs={blogs} title="All blogs" /> }
    </div>
  );
}

export default Home;

// npx json-server --watch data/db.json --port 8000
