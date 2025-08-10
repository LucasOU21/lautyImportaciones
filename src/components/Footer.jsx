import React from 'react';

const Footer = ({ theme = 'light' }) => {
  return (
    <footer className={`footer ${theme === 'dark' ? 'footer-dark' : ''}`}>
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h4>Lauty Kiddies</h4>
            <p>Importadores de diversión y aventura para niños</p>
          </div>
          
          <div className="footer-section">
            <h4>Contacto</h4>
            <p>Teléfono: 949728856</p>
            <p>Ubicación: N/A </p>
          </div>
          
          <div className="footer-section">
            <h4>Síguenos</h4>
            <div className="social-links">
              <a href="#" className="social-link">Facebook</a>
              <a href="#" className="social-link">Instagram</a>
              <a href="#" className="social-link">WhatsApp</a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2025 Kiddies Importaciones. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;