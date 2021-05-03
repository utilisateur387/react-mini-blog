import { useState, useEffect } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch(url) // FETCH DATA FROM FAKE JSON API
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
  }, [url]);
  return { data, isLoading, error }
}

export default useFetch;
