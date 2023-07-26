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
    <div>
      {/* <header className="App-header"> */}
        <div>
          <div className="parent">
          { block.map((item) => {
            return <div className='ElemTile'>
              <p>{item.symbol}, {item.name}</p>
              <p>{item.number}</p>
              <p>RAM: {item.ram}</p>
            </div>
          }) }
        </div>
        </div>
      
      {/* </header> */}
    </div>
  );
  
  
}


export default Next;