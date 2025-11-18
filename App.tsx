import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';

function App() {
  return (
    <div className="min-h-screen bg-cyber-black text-gray-100 selection:bg-cyber-primary selection:text-black font-sans flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <Home />
      </main>

      <Footer />
    </div>
  );
}

export default App;