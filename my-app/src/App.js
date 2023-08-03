import React from 'react';
import './App.css';
import Navbar from './components/views/Navbar';
import { BrowserRouter as Router, Routes, Route }
    from 'react-router-dom';

import Home from './components/views/Home';
import About from './components/views/About';
import Template from './components/views/Template';


import Elements from './components/views/Elements';
import StoicSolver from './components/views/StoicSolver';
// import PeriodicTable from './components/views/Tools/PeriodicTable'

import StoichiometricEquationsExplained from './components/views/Knowledge/StoichiometricEquationsExplained';
import ElementsLibrary from './components/views/Knowledge/ElementsLibrary';
import KnowledgeBank from './components/views/Knowledge/KnowledgeBank';

import StoicBalanceTest from './components/views/Testing/StoicBalanceTest';

 
function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route path='/About' element={<About />} />
                <Route path='/Template' element={<Template />} />

                <Route path='/Tools/Elements' element={<Elements />} />
                <Route path='/Tools/StoicSolver' element={<StoicSolver />} />
                {/* <Route path='/Tools/PeriodicTable' element={<PeriodicTable />} /> */}

                <Route path='/Knowledge/StoichiometricEquationsExplained' element={<StoichiometricEquationsExplained />} />
                <Route path='/Knowledge/ElementsLibrary' element={<ElementsLibrary />} />
                <Route path='/Knowledge/KnowledgeBank' element={<KnowledgeBank />} />

                <Route path='/Tests/StoicBalanceTest' element={<StoicBalanceTest />} />
            </Routes>
        </Router>
    );
}
 
export default App;