import React, {Component, useState, useEffect} from 'react';
import { CCard, CCardBody, CCardTitle, CCardSubtitle, CCardText, CCardLink } from '@coreui/react';
import '@coreui/coreui/dist/css/coreui.min.css'
import '../../App.css';


function Template() {

  return (
    <div className='PageContentParent'>
      <div className='PageContentChild'>
        <div className='HomePageSectionHeader'>Page Template:</div>
        <div>To add a new page:</div>
        <div>1: Add new link to App.js and import component.</div>
        <div>2: Add new link to Navbar.js.</div>
      </div>
    </div>
  );
}

export default Template;