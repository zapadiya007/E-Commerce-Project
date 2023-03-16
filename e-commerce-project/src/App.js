
import './App.css';
import React, { useState } from 'react';

function App() {

  const [name, setName] = useState("Ashish")

  function updateName() {
    setName("Zapadiya");
  }

  function fname() {
    setName("Ashish")
  }

  return (

    <div className="App">
      <h1>{name}</h1>
      <button onMouseOver={updateName} onMouseOut={fname}>Update Name</button>
    </div>
  );
}

export default App;
