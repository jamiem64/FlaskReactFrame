import React, {Component, useState, useEffect} from 'react';
import '@coreui/coreui/dist/css/coreui.min.css'
import '../../../App.css';

import StoicEqnsExplainedText from '../../../content/knowledge/StoicEqnsExplainedText';

function StoichiometricEquationsExplained() {
	const [text, setText] = useState('');
	const paragraphArray = [];
	const paragraphs = text.split('\n\n');

	useEffect(() => {
		setText(StoicEqnsExplainedText)
	}, [text]);

	paragraphs.forEach((paragraph) => {
		paragraphArray.push(paragraph);
	});

  return (
    <div className='PageContentParent'>
      <div className='PageContentChild'>
        <div className='HomePageSectionHeader'>Stoichiometric Equations:</div>
					<div>{paragraphArray.map(para => <div className='KnowledgeTextPara'>{para}</div>)}</div>
		<div className='PageContentEnd'></div>
	  </div>
    </div>
  );
}

export default StoichiometricEquationsExplained;