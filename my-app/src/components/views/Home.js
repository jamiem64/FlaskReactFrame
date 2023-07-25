import React, {Component, useState, useEffect} from 'react';
// import '/App.css';


function Home() {
  const [block, setBlock] = useState(0);

  useEffect(() => { 
    fetch('http://127.0.0.1:5000/test').then(res => res.json()).then(data => {
      setBlock(data.output);
      console.log(data.output);
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>WIP of a toolset to help Chemistry and Chemical Engineering students.</p>
      </header>
    </div>
  );
}


export default Home;