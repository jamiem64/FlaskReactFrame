import React, {Component, useState, useEffect} from 'react';
import { CCard, CCardBody, CCardTitle, CCardSubtitle, CCardText, CCardLink } from '@coreui/react';
import '@coreui/coreui/dist/css/coreui.min.css'
import '../../../App.css';

// import TemplatePageText from '../../content/TemplatePageText';
import KnowledgeBankData from '../../../content/knowledge/KnowledgeBankData';


function KnowledgeBank() {

	const [jsonData, setJsonData] = useState([]);
	const [dataLoaded, setDataLoaded] = useState(false);

		useEffect(() => {
		if (dataLoaded === false) {
			KnowledgeBankData.forEach((element) => {
				jsonData.push(element);
			});
			setDataLoaded(true);
		}
		}, []);
  
  return (
    <div className='PageContentParent'>
      <div className='PageContentChild'>
        <div className='HomePageSectionHeader'>Knowledge Bank:</div>
					{/* <div>{paragraphArray.map(para => <div className='KnowledgeTextPara'>{para}</div>)}</div> */}
					<div>{jsonData.map(jsonRecord =><div>
						<div className='ElementLibraryHeader'>{jsonRecord.term}:</div>
						<div className='KnowledgeTextPara'>{jsonRecord.def}</div>
						<div className='ElementLibraryDivider'></div>
					</div>)}</div>
				<div className='PageContentEnd'></div>
					
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

export default KnowledgeBank;