import Navbar from './Navbar';
import Home from './Home';

function App() {

  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home name="Yoshi" age="4" />
      </div>
    </div>
  );
}

export default App;
