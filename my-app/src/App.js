import React from 'react';
import './App.css';
import Navbar from './components/views/Navbar';
import { BrowserRouter as Router, Routes, Route }
    from 'react-router-dom';

import Home from './components/views/Home';
import Template from './components/views/Template';

import Elements from './components/views/Elements';
import StoicSolver from './components/views/StoicSolver';
// import PeriodicTable from './components/views/Tools/PeriodicTable'

import StoichiometricEquationsExplained from './components/views/Knowledge/StoichiometricEquationsExplained';

 
function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route path='/Template' element={<Template />} />

                <Route path='/Tools/Elements' element={<Elements />} />
                <Route path='/Tools/StoicSolver' element={<StoicSolver />} />
                {/* <Route path='/Tools/PeriodicTable' element={<PeriodicTable />} /> */}

                <Route path='/Knowledge/StoichiometricEquationsExplained' element={<StoichiometricEquationsExplained />} />
            </Routes>
        </Router>
    );
}
 
export default App;