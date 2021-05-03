import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = (props) => {
  const { data: blogs, isLoading, error } = useFetch('http://localhost:8000/blogs');

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
// npm install react-router-dom@5
