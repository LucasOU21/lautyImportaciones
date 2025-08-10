import React from 'react';
import { ShoppingCart, User } from 'lucide-react';
import './Navigation.css';

const Navigation = ({ onNavigate, currentPage }) => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">
          <img src="src/assets/images/RocketLogo.png" alt="Lauty Logo" className="logo-image" />
          <h1>Lauty Importaciones</h1>
        </div>
        
        <nav className="main-nav">
          <button 
            className={`nav-link ${currentPage === 'home' ? 'active' : ''}`}
            onClick={() => onNavigate('home')}
          >
            Home
          </button>
          <button 
            className={`nav-link ${currentPage === 'products' ? 'active' : ''}`}
            onClick={() => onNavigate('products')}
          >
            Products
          </button>
          <button 
            className={`nav-link ${currentPage === 'contact' ? 'active' : ''}`}
            onClick={() => onNavigate('contact')}
          >
            Contact
          </button>
        </nav>
        
        <div className="header-actions">
          <button className="icon-btn cart-btn">
            <ShoppingCart size={20} />
            <span className="cart-count">0</span>
          </button>
          <button className="icon-btn user-btn">
            <User size={20} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navigation;