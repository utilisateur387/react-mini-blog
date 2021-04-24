import Navbar from './Navbar';
import Home from './Home';
import React, { useState } from 'react';

function App() {

  const [color, setColor] = useState();
  const divStyle = { backgroundColor: color || 'pink' };
  const colors = ['aquamarine', 'blue', 'pink', 'orange'];

  const handleOnClick = (e, arg1) => {
    console.log(e);
    console.log(arg1);
  };

  return (
    <div className="App" style={divStyle}>
      <Navbar />
      <div className="content">

        {colors.map((color) => <button onClick={() => setColor(color)}>{color}</button> )}
        <br />
        <button onClick={(e) => handleOnClick(e, "I'm an argument!")}>Log event and arguments</button>
        <Home name="Yoshi" age="4" />
      </div>
    </div>
  );
}

export default App;
