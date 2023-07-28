import React, {Component, useState, useEffect} from 'react';
import '@coreui/coreui/dist/css/coreui.min.css'
import '../../../App.css';

// import StoicEqnsExplainedText from '../../../content/knowledge/StoicEqnsExplainedText';
// import StoicEqnsExplainedText from '../../../content/knowledge/StoicEqnsExplainedText';
import ElementsData from '../../../content/knowledge/ElementsData';

function ElementsLibrary() {
	const [jsonData, setJsonData] = useState([]);
	// const paragraphArray = [];
	// const paragraphs = text.split('\n\n');

	useEffect(() => {
		// setJsonData(ElementsData)
        console.log(ElementsData)
	}, []);

	ElementsData.forEach((element) => {
		jsonData.push(element);
	});

  return (
    <div className='PageContentParent'>
      <div className='PageContentChild'>
        <div className='HomePageSectionHeader'>Elements Library:</div>
            <div>{jsonData.map(jsonRecord => 
                <div className='ElementLibraryCell'>
                    <div className='KnowledgeTextPara'>{jsonRecord.name}</div>
                </div>
            )}</div>
      </div>
    </div>
  );
}

export default ElementsLibrary;