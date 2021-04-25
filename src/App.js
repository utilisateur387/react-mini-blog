import Navbar from './Navbar';
import Home from './Home';
import React, { useState } from 'react';

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
