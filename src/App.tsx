import React from 'react';
import './App.css';

function App() {
  let click = () => console.log("clicked")
  return (
    <div className="App">
     <button onClick={click()}> M/</button>
    </div>
  );
}

export default App;
