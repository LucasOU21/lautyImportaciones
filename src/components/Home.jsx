import React from 'react';
import { Star, Zap, Shield, Clock, Car, Battery, Users } from 'lucide-react';
import Navigation from './Navigation';
import Footer from './Footer';
import './Home.css';

const Home = ({ onNavigate }) => {
  // Popular products data
  const popularProducts = [
    {
      id: 'K-1',
      name: 'Naval RX 78',
      price: 4100,
      image: '/public/images/navalrx78.png',
      category: 'Kiddies Cars',
      features: ['Música MP3', 'Efectos de Sonido', 'Luces LED'],
      specs: {
        battery: '12V20AH*2',
        capacity: '150 KG, Dos Personas',
        runtime: '5-6 Horas'
      }
    },
    {
      id: 'K-2',
      name: 'Tigre Ride-On',
      price: 4300,
      image: '/public/images/tigreride.png',
      category: 'Kiddies Cars',
      features: ['Música MP3', 'Efectos de Sonido', 'Diseño de Tigre'],
      specs: {
        battery: '12V20AH*2',
        capacity: '150 KG, Dos Personas',
        runtime: '5-6 Horas'
      }
    },
    {
      id: 'K-7',
      name: 'Montable Fox',
      price: 2700,
      image: '/public/images/foxride.png',
      category: 'Montables',
      features: ['Pantalla MP5', 'Monedero Programable', 'Audio/Video'],
      specs: {
        connection: '220V',
        capacity: '35 KG',
        motor: '50W'
      }
    }
  ];

  return (
    <div className="home-container">
      {/* Navigation */}
      <Navigation onNavigate={onNavigate} currentPage="home" theme="light" />

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h2 className="hero-title">
              Diversión <span className="highlight">Premium</span> para Niños
            </h2>
            <p className="hero-subtitle">
              Descubre nuestra increíble colección de carros eléctricos, montables y juegos inflables 
              que llevarán la diversión de tus hijos a otro nivel
            </p>
            <div className="hero-buttons">
              <button 
                className="btn btn-primary"
                onClick={() => onNavigate('products')}
              >
                <Car className="btn-icon" />
                Ver Productos
              </button>
              <button 
                className="btn btn-secondary"
                onClick={() => onNavigate('contact')}
              >
                Contáctanos
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Products Section */}
      <section className="popular-products">
        <div className="container">
          <h3 className="section-title">Productos Populares</h3>
          <div className="products-grid">
            {popularProducts.map(product => (
              <div key={product.id} className="product-card">
                <div className="product-image">
                  <img src={product.image} alt={product.name} />
                  <div className="product-badge">Popular</div>
                </div>
                
                <div className="product-info">
                  <div className="product-category">{product.category}</div>
                  <h4 className="product-name">{product.name}</h4>
                  
                  <div className="product-specs">
                    <div className="spec-item">
                      <Battery size={16} />
                      <span>{product.specs.battery || product.specs.connection}</span>
                    </div>
                    <div className="spec-item">
                      <Users size={16} />
                      <span>{product.specs.capacity}</span>
                    </div>
                  </div>
                  
                  <div className="product-features">
                    {product.features.slice(0, 2).map((feature, index) => (
                      <span key={index} className="feature-tag">
                        {feature}
                      </span>
                    ))}
                  </div>
                  
                  <div className="product-footer">
                    <div className="product-price">
                      <span className="price-value">S/. {product.price.toLocaleString()}</span>
                    </div>
                    <button 
                      className="btn btn-primary product-btn"
                      onClick={() => onNavigate('products')}
                    >
                      Ver Detalles
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="products-cta">
          </div>
        </div>
      </section>

      {/* Features Section (moved from original position) */}
      <section className="features">
        <div className="container">
          <h3 className="section-title">¿Por qué elegir Lauty Kiddies?</h3>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <Shield />
              </div>
              <h4>Calidad Premium</h4>
              <p>Materiales PP reforzado y componentes de alta durabilidad para máxima seguridad</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <Zap />
              </div>
              <h4>Tecnología Avanzada</h4>
              <p>Motores potentes, baterías de larga duración y sistemas de audio integrados</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <Star />
              </div>
              <h4>Diseños Únicos</h4>
              <p>Diseños atractivos y coloridos que estimulan la imaginación infantil</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <Clock />
              </div>
              <h4>Diversión Duradera</h4>
              <p>Hasta 6 horas de funcionamiento continuo para días completos de diversión</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <div className="cta-content">
            <h3>¿Listo para la Aventura?</h3>
            <p>Contacta con nosotros y descubre toda nuestra gama de productos</p>
            <div className="cta-buttons">
              <button 
                className="btn btn-primary cta-btn"
                onClick={() => onNavigate('products')}
              >
                Ver Catálogo Completo
              </button>
              <div className="contact-info">
                <span>Teléfono: 949728856</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer theme="light" />
    </div>
  );
};

export default Home;