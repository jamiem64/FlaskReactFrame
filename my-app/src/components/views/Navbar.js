
import { BrowserRouter, Route, Link } from "react-router-dom";
import React, {Component, useState, useEffect} from 'react';
import { 
  CNavbar, 
  CForm,
  CFormInput,
  CButton,
  CContainer, 
  CNavbarBrand, 
  CNavbarToggler, 
  CCollapse, 
  CNavbarNav, 
  CNavItem, 
  CNavLink, 
  CDropdown,
  CDropdownToggle,
  CDropdownMenu,
  CDropdownItem,
  CDropdownDivider,
} from '@coreui/react';


function Navbar() {


  const [visible, setVisible] = useState(false)
return (
  <>
    <CNavbar expand="lg" colorScheme="light" className="bg-light">
      <CContainer fluid>
          <CNavbarNav>
              <Link className="Navbar-Button" to="/">Home</Link>
              <Link className="Navbar-Button" to="/About">About</Link>
              <Link className="Navbar-Button" to="/Template">Template</Link>
              <Link className="Navbar-Button" to="/Tests/StoicBalanceTest">StoicBalanceTest</Link>
          </CNavbarNav>
      </CContainer>
    </CNavbar>
  </>
)
  
}


export default Navbar;