import React from 'react';
import './App.css';
import Header from './components/Header';
import NavBar from './components/NavBar.jsx';
import SortBar from './components/SortBar';
import AnimalCard from './components/AnimalCard';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Header />
      <SortBar />
      
      <div className="card-container">
        <AnimalCard />
        <AnimalCard />
        <AnimalCard />
      </div>

      <Footer />
    </div>
  );
}

export default App;