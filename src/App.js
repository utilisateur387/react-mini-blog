import './App.css';
import Navbar from './Navbar';

function App() {
  const title = "Welcome to the new blog";
  const likes = 50;
  const mySite = "http://miebi.space";

  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <h1>{title}</h1>
        <p>Liked {likes} times!</p>

        <p>{2 + 3}</p>
        <p>{[1,2,3,4,5].join(" ")}</p>
        <a href={mySite} target="_blank">My portfolio</a>
      </div>
    </div>
  );
}

export default App;
