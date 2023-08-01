import React, {Component, useState, useEffect} from 'react';
import { CCard, CCardBody, CCardTitle, CCardSubtitle, CCardText, CCardLink } from '@coreui/react';
import '@coreui/coreui/dist/css/coreui.min.css'
import '../../App.css';

import AboutPageText from '../../content/AboutPageText';

function About() {
    const [text, setText] = useState('');
	const paragraphArray = [];
	const paragraphs = text.split('\n\n');

	useEffect(() => {
		setText(AboutPageText)
	}, [text]);

	paragraphs.forEach((paragraph) => {
		paragraphArray.push(paragraph);
	});

  return (
    <div className='PageContentParent'>
      <div className='PageContentChild'>
        <div className='HomePageSectionHeader'>About:</div>
					<div>{paragraphArray.map(para => <div className='KnowledgeTextPara'>{para}</div>)}</div>
      </div>
    </div>
  );
}

export default About;