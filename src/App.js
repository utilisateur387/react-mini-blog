import Navbar from './Navbar';
import Home from './Home';

function App() {
  const title = "Welcome to the new blog";
  const likes = 50;
  const mySite = "http://miebi.space";

  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
      </div>
    </div>
  );
}

export default App;
