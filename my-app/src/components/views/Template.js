import React, {Component, useState, useEffect} from 'react';
import { CCard, CCardBody, CCardTitle, CCardSubtitle, CCardText, CCardLink } from '@coreui/react';
import '@coreui/coreui/dist/css/coreui.min.css'
import '../../App.css';

import TemplatePageText from '../../content/TemplatePageText';


function Template() {

  const [text, setText] = useState('');
	const paragraphArray = [];
	const paragraphs = text.split('\n\n');

	useEffect(() => {
		setText(TemplatePageText)
	}, [text]);

	paragraphs.forEach((paragraph) => {
		paragraphArray.push(paragraph);
	});

  return (
    <div className='PageContentParent'>
      <div className='PageContentChild'>
        <div className='HomePageSectionHeader'>Template:</div>
					<div>{paragraphArray.map(para => <div className='KnowledgeTextPara'>{para}</div>)}</div>
      </div>
    </div>

  // return (
  //   <div className='PageContentParent'>
  //     <div className='PageContentChild'>
  //       <div className='HomePageSectionHeader'>Page Template:</div>
  //       <div>To add a new page:</div>
  //       <div>1: Add new link to App.js and import component.</div>
  //       <div>2: Add new link to Navbar.js.</div>
  //     </div>
  //   </div>
  );
}

export default Template;