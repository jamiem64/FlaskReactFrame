import React from 'react';
import './App.css';
import Navbar from './components/views/Navbar';
import { BrowserRouter as Router, Routes, Route }
    from 'react-router-dom';
import Home from './components/views/Home';
import Next from './components/views/Next';

 
function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route path='/Next' element={<Next />} />
            </Routes>
        </Router>
    );
}
 
export default App;