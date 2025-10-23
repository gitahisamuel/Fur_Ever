import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Header from './components/Header';  
import Footer from './components/Footer';
import Home from './pages/Home';
import Animals from './pages/Animals';  // ← IMPORT ANIMALS

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Header />  
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/animals" element={<Animals />} />  {/* ← ADD ANIMALS ROUTE */}
          <Route path="/adopt" element={<div>Adopt Page</div>} />
          <Route path="/donate" element={<div>Donate Page</div>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;