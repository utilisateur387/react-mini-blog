import React, { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = (props) => {
  const [blogs, setBlogs] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch('http://localhost:8000/blogs') // FETCH DATA FROM FAKE JSON API
        .then(response => {
          if (!response.ok) { // THROW AN ERROR IF ERROR IS NOT OK
            throw Error('Could not fetch the data for that resource')
          }
          return response.json() // ELSE, RETURN THE RESPONSE
        })
        .then(data => {
          setIsLoading(false); // ISLOADING IS NOW FALSE
          setBlogs(data); // SET BLOGS VARIABLE WITH FETCHED DATA
          setError(null); // THERE IS NO ERROR
        })
        .catch(err => {
          setError(err.message);
          setIsLoading(false);
        })
    }, 400);
  }, []);

  return (
    <div className="home">
      { error && <div>{ error }</div>}
      { isLoading && <div>Loading...</div> }
      { blogs && <BlogList blogs={blogs} title="All blogs" /> }
    </div>
  );
}

export default Home;

// npx json-server --watch data/db.json --port 8000
