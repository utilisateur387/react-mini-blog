import { useState, useEffect } from 'react';

const useFetch = () => {
  const [data, setData] = useState(null);
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
          setData(data); // SET BLOGS VARIABLE WITH FETCHED DATA
          setError(null); // THERE IS NO ERROR
        })
        .catch(err => {
          setError(err.message);
          setIsLoading(false);
        })
    }, 400);
  }, []);
}

export default useFetch;
