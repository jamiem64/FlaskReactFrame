import React from 'react';
import './App.css';
import Navbar from './components/views/Navbar';
import { BrowserRouter as Router, Routes, Route }
    from 'react-router-dom';

import Home from './components/views/Home';
import Elements from './components/views/Elements';
import MassBalanceSolver from './components/views/MassBalanceSolver';

 
function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route path='/Elements' element={<Elements />} />
                <Route path='/MassBalanceSolver' element={<MassBalanceSolver />} />
            </Routes>
        </Router>
    );
}
 
export default App;