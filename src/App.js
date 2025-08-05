import React from 'react';
import Header from './components/Header/Header';
import Features from './components/Features/Features';
import Screenshots from './components/Screenshots/Screenshots';
import Benefits from './components/Benefits/Benefits';
import Download from './components/Download/Download';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Features />
        <Screenshots />
        <Benefits />
        <Download />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;