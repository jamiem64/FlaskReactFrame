
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

// function Navbar() {
//   return (
//     <nav>
//       <div className="Navbar-Container">
//         <Link className="Navbar-Button-Left" to="/">Home</Link>
//         <Link className="Navbar-Button-Center" to="/Elements">Elements</Link>
//         <Link className="Navbar-Button-Right" to="/WIP">WIP</Link>
//       </div>
        
      
//     </nav>
//   );
// }

// export default Navbar;

function Navbar() {


  const [visible, setVisible] = useState(false)
return (
  <>
    <CNavbar expand="lg" colorScheme="light" className="bg-light">
      <CContainer fluid>
          <CNavbarNav>
              <Link className="Navbar-Button" to="/">Home</Link>
              <Link className="Navbar-Button" to="/Elements">Elements</Link>
              <Link className="Navbar-Button" to="/MassBalanceSolver">Mass Balances</Link>
          </CNavbarNav>
      </CContainer>
    </CNavbar>
  </>
)
  
}


export default Navbar;