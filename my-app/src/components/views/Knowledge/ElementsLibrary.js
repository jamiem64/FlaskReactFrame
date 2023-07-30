import React, {Component, useState, useEffect} from 'react';
import '@coreui/coreui/dist/css/coreui.min.css'
import '../../../App.css';
import { BrowserRouter, Route, Link } from "react-router-dom";

// import StoicEqnsExplainedText from '../../../content/knowledge/StoicEqnsExplainedText';
// import StoicEqnsExplainedText from '../../../content/knowledge/StoicEqnsExplainedText';
import ElementsData from '../../../content/knowledge/ElementsData';

function ElementsLibrary() {
	const [jsonData, setJsonData] = useState([]);
  const [dataLoaded, setDataLoaded] = useState(false);
	// const paragraphArray = [];
	// const paragraphs = text.split('\n\n');

	useEffect(() => {
		// setJsonData(ElementsData)
    if (dataLoaded === false) {
      ElementsData.forEach((element) => {
        jsonData.push(element);
      });
      setDataLoaded(true);
    }
        console.log('Elements Data' + ElementsData)
        console.log('json Data' + jsonData)
	}, []);

	// ElementsData.forEach((element) => {
	// 	jsonData.push(element);
	// });

  return (
    <div className='PageContentParent'>
      <div className='PageContentChild'>
        <div className='HomePageSectionHeader'>Elements Library:</div>
            <div>{jsonData.map(jsonRecord => 
                <div className='ElementLibraryCell'>
                    <div className='ElementLibraryHeader'>{jsonRecord.symbol}, {jsonRecord.name}</div>
                    <div className='KnowledgeTextPara'>{jsonRecord.summary}</div>
                    <div className='KnowledgeTextPara'><b>Appearance:</b> {jsonRecord.appearance}</div>
                    <div className='KnowledgeTextPara'><b>Atomic Mass:</b> {jsonRecord.atomic_mass}</div>
                    <div className='KnowledgeTextPara'><b>Density:</b> {jsonRecord.density} g/L</div>
                    
                    <div style={{'text-align':'center', 'padding-top': '1rem'}}>
                      <img src={jsonRecord.image.url} alt={jsonRecord.symbol} style={{'display':'inline-block', 'width':'50%'}} />
                    </div>
                    <div style={{'text-align':'center', 'padding-top': '1rem'}}>
                      <Link className='KnowledgeTextPara' to={jsonRecord.source}>{jsonRecord.source}</Link>

                    </div>
                    <div className='ElementLibraryDivider'></div>

                </div>
            )}</div>
      </div>
    </div>
  );
}

export default ElementsLibrary;