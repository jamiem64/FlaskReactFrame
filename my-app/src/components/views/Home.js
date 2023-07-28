import React, {Component, useState, useEffect} from 'react';
import { CCard, CCardBody, CCardTitle, CCardSubtitle, CCardText, CCardLink } from '@coreui/react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import '@coreui/coreui/dist/css/coreui.min.css'
import '../../App.css';


function Home() {

  return (
    <div className='PageContentParent'>
      <div className='PageContentChild'>
        <div className='HomePageSectionHeader'>Tools:</div>
        <div>
          <Link className="LinkButton" to="/Tools/Elements">Elements</Link>
        </div>
        <div>
          <Link className="LinkButton" to="/Tools/StoicSolver">Stoichiometry Equation Balancer</Link>
        </div>

        <div className='HomePageSectionHeader'>Knowledge:</div>
        <div>
          <Link className="LinkButton" to="/Knowledge/StoichiometricEquationsExplained">Stoichiometric Equations Explained</Link>
        </div>
        {/* <div>
          <Link className="LinkButton" to="/Tools/StoicSolver">Stoichiometry Equation Balancer</Link>
        </div> */}


      </div>
    </div>
  );
}

export default Home;