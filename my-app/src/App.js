import React, {Component, useState, useEffect} from 'react';
import './App.css';


function App() {
  const [block, setBlock] = useState(0);

  useEffect(() => { 
    fetch('http://127.0.0.1:5000/test').then(res => res.json()).then(data => {
      setBlock(data.text);
      console.log(data.text);
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>Text: {block}</p>
      </header>
    </div>
  );
}


export default App;