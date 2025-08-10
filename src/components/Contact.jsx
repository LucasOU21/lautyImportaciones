import './Contact.css'; // Import the CSS file
import React, { useState } from 'react';
import { 
  ArrowLeft, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send,
  MessageCircle,
  CheckCircle
} from 'lucide-react';

const Contact = ({ onNavigate }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    productInterest: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        productInterest: ''
      });
    }, 3000);
  };

  const productCategories = [
    { value: '', label: 'Selecciona una categoría' },
    { value: 'kiddies-cars', label: 'Kiddies Cars' },
    { value: 'montables', label: 'Montables' },
    { value: 'inflables', label: 'Inflables' },
    { value: 'mesas-basquet', label: 'Mesas y Basquet' },
    { value: 'cotizacion-general', label: 'Cotización General' }
  ];

  return (
    <div className="contact-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-container">
          <button 
            className="back-button"
            onClick={() => onNavigate('home')}
          >
            <ArrowLeft size={20} />
            Volver al Inicio
          </button>
          <h1 className="hero-title">Contáctanos</h1>
          <p className="hero-subtitle">
            Estamos aquí para ayudarte con cualquier consulta sobre nuestros productos
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="main-content">
        <div className="content-grid">
          {/* Contact Form - Takes 2/3 of the space */}
          <div className="form-container">
            <h2 className="form-title">Envíanos un Mensaje</h2>
            <p className="form-description">Completa el formulario y nos pondremos en contacto contigo lo antes posible</p>

            {isSubmitted ? (
              <div className="success-container">
                <CheckCircle size={48} className="success-icon" />
                <h3 className="success-title">¡Mensaje Enviado!</h3>
                <p className="success-message">Gracias por contactarnos. Te responderemos pronto.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="form-fields">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">
                      Nombre Completo *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="Tu nombre completo"
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email" className="form-label">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="tu@email.com"
                      className="form-input"
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone" className="form-label">
                      Teléfono
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Tu número de teléfono"
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="productInterest" className="form-label">
                      Producto de Interés
                    </label>
                    <select
                      id="productInterest"
                      name="productInterest"
                      value={formData.productInterest}
                      onChange={handleInputChange}
                      className="form-select"
                    >
                      {productCategories.map(category => (
                        <option key={category.value} value={category.value}>
                          {category.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="subject" className="form-label">
                    Asunto *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    placeholder="¿En qué podemos ayudarte?"
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">
                    Mensaje *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    placeholder="Describe tu consulta en detalle..."
                    className="form-textarea"
                  />
                </div>

                <button type="submit" className="submit-button">
                  <Send size={20} />
                  Enviar Mensaje
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Quick Contact Actions */}
      <section className="quick-contact-section">
        <div className="quick-contact-container">
          <h2 className="quick-contact-title">Contáctanos Directamente</h2>
          <p className="quick-contact-description">¿Prefieres hablar directamente? Elige tu método favorito</p>
          <div className="quick-actions">
            <a 
              href="tel:949728856" 
              className="quick-action-link phone"
            >
              <Phone size={24} className="quick-action-icon phone" />
              <div className="quick-action-content">
                <span className="quick-action-title">Llamar Ahora</span>
                <span className="quick-action-subtitle">949728856</span>
              </div>
            </a>

            <a 
              href="https://wa.me/34949728856" 
              className="quick-action-link whatsapp" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <MessageCircle size={24} className="quick-action-icon whatsapp" />
              <div className="quick-action-content">
                <span className="quick-action-title">WhatsApp</span>
                <span className="quick-action-subtitle">Chat directo</span>
              </div>
            </a>

            <a 
              href="mailto:info@lautykiddies.com" 
              className="quick-action-link email"
            >
              <Mail size={24} className="quick-action-icon email" />
              <div className="quick-action-content">
                <span className="quick-action-title">Enviar Email</span>
                <span className="quick-action-subtitle">info@lautykiddies.com</span>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-content">
            <div className="footer-section">
              <h4>Lauty Kiddies</h4>
              <p>
                Los mejores productos para niños con la más alta calidad y seguridad.
              </p>
            </div>
            
            <div className="footer-section">
              <h4>Contacto</h4>
              <p>📞 949728856</p>
              <p>✉️ info@lautykiddies.com</p>
            </div>
            
            <div className="footer-section">
              <h4>Productos</h4>
              <div className="footer-links">
                <a href="#" className="footer-link">Kiddies Cars</a>
                <a href="#" className="footer-link">Montables</a>
                <a href="#" className="footer-link">Inflables</a>
              </div>
            </div>
            
            <div className="footer-section">
              <h4>Síguenos</h4>
              <div className="social-links">
                <a href="#" className="footer-link">Instagram</a>
                <a href="#" className="footer-link">Facebook</a>
                <a href="#" className="footer-link">WhatsApp</a>
              </div>
            </div>
          </div>
          
          <div className="footer-bottom">
            © 2024 Lauty Kiddies. Todos los derechos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Contact;