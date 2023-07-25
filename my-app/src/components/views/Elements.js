import React, {Component, useState, useEffect} from 'react';
// import './App.css';


function Next() {
  const [block, setBlock] = useState([]);

  useEffect(() => { 
    fetch('http://127.0.0.1:5000/PeriodicElemsDict').then(res => res.json()).then(data => {
      setBlock(data.output);
      console.log(data.output);
    });
  }, []);

  // var renderedOutput = block.map(item => <div> {item.name} </div>)


  return (
    <div className="App">
      <header className="App-header">
      <div>
        { block.map((item) => {
          return <div>
            <p>{item.symbol}, {item.name}</p>
            <p>{item.number}</p>
            <p>RAM: {item.ram}</p>
          </div>;
        }) }
      </div>
      </header>
    </div>
  );
}


export default Next;