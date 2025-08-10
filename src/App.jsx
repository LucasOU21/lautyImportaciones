import React, { useState } from 'react';
import Products from './components/Products.jsx';
import Contact from './components/Contact.jsx';
import Home from './components/Home.jsx';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('Home');

  const renderPage = () => {
    switch (currentPage) {
      case 'Home':
        return <Home onNavigate={setCurrentPage} />;
      case 'Products':
        return <Products onNavigate={setCurrentPage} />;
      case 'Contact':
        return <Contact onNavigate={setCurrentPage} />;
      default:
        return <Home onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="App">
      {renderPage()}
    </div>
  );
}

export default App;