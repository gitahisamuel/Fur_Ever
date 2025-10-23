import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Header from './components/Header';  
import Footer from './components/Footer';
import Home from './pages/Home';
import Animals from './pages/Animals';
import AdoptForm from './pages/AdoptForm';  // ← Import AdoptForm
import Success from './pages/Success';      // ← Import Success
import DonateForm from './pages/DonateForm';

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Header />  
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/animals" element={<Animals />} />
          <Route path="/adopt/:animalId" element={<AdoptForm />} />  {/* ← FIXED ROUTE */}
          <Route path="/success" element={<Success />} />            {/* ← Add Success route */}
          <Route path="/donate" element={<DonateForm />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;