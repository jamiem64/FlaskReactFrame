import React, {Component, useState, useEffect} from 'react';
import { CCard, CCardBody, CCardTitle, CCardSubtitle, CCardText, CCardLink } from '@coreui/react';
import '@coreui/coreui/dist/css/coreui.min.css'
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
        <div>
        <CCard style={{ width: '18rem' }}>
          <CCardBody>
            <CCardTitle style={{ color: 'black' }}>Card title</CCardTitle>
            <CCardSubtitle className="mb-2 text-medium-emphasis">Card subtitle</CCardSubtitle>
            <CCardText style={{ color: 'black' }}>
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </CCardText>
            <CCardLink href="#">Card link</CCardLink>
            <CCardLink href="#">Another link</CCardLink>
          </CCardBody>
        </CCard>
        </div>
        <div>
        <CCard style={{ width: '18rem' }}>
          <CCardBody>
            <CCardTitle style={{ color: 'black' }}>Card title</CCardTitle>
            <CCardSubtitle className="mb-2 text-medium-emphasis">Card subtitle</CCardSubtitle>
            <CCardText style={{ color: 'black' }}>
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </CCardText>
            <CCardLink href="#">Card link</CCardLink>
            <CCardLink href="#">Another link</CCardLink>
          </CCardBody>
        </CCard>
        </div>
      
        <p>WIP of a toolset to help Chemistry and Chemical Engineering students.</p>
      </header>
    </div>
  );
}


export default Home;