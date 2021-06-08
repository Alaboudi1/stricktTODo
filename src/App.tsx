import React, { useState } from 'react';
import './App.css';

function App() {
  const [title, setTite]= useState(0)
  let click = () => {
    setTite(Math.random())
    console.log("from app")
  }
  return (
    <div className="App">
     <button id="button" onClick={()=>click()}> Clickme</button>
     {title}
    </div>
  );
}

export default App;
