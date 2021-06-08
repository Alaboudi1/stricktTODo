import React, { useState } from 'react';

function App2() {
  const [title, setTite]= useState(0)
  let click2 = () => {
     setTite(Math.random())
     console.log("from app2")
     if(false){
      console.log("from app3")

    }

  }
  let click3 = () => {
    setTite(Math.random())
    console.log("from app2")

 }
  return (
    <div className="App">
      <br/>      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
     <button id="button2" onClick={()=>click2()}> Clickme</button>
     <button id="button3" onClick={()=>click2()}> Clickme</button>
     {title}
    </div>
  );
}

export default App2;
