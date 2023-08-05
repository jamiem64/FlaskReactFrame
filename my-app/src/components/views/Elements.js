import React, {Component, useState, useEffect} from 'react';
// import './App.css';


function Next() {
  const [block, setBlock] = useState([]);
  const [loading, setLoading] = useState(true);

  const data = {
    13: [5, 13, 31, 49, 81, 113],
    14: [6, 14, 32, 50, 82, 114],
    15: [7, 15, 33, 51, 83, 115],
    16: [8, 16, 34, 52, 84, 116],
    17: [9, 17, 35, 53, 85, 117],
    1: [1, 3, 11, 19, 37, 55, 87],
    2: [4,12 ,20 ,38 ,56 ,88],
    18: [2 ,10 ,18 ,36 ,54 ,86 ,118]
};

useEffect(() => { 
    fetch('http://127.0.0.1:5000/PeriodicElemsDict').then(res => res.json()).then(data => {
      setBlock(data.output);
      console.log(data.output);
      setLoading(false);
    });
}, []);

if (loading) {
    return <div>Loading...</div>;
}

const rows = [];
for (let i =1; i <=7; i++) {
    const cells = [];
    for (let j =1; j <=18; j++) {
        // const value = block.find((item) => data[j].includes(item.number));
        const value = data[j]?.[i-1];
        const elem = block.find(item => {return item.number === value})
        console.log(elem)
        if (elem) {
            cells.push(<td key={j}>
              <div className='ElemTile'>
                <p>{elem.symbol}, {elem.name}</p>
                <p>{elem.number}</p>
                <p>RAM: {elem.ram}</p>
              </div>
            </td>);
        } else {
            cells.push(<td key={j}>
              <div className='ElemTile'>
                <p>Blank</p>
                <p>Blank</p>
                <p>RAM: Blank</p>
              </div>
            </td>);
        }
    }
    rows.push(<tr key={i}>{cells}</tr>);
}
return (
    <table>
        <tbody>
            {rows}
        </tbody>
    </table>
);
}

export default Next;
