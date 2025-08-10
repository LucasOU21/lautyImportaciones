import React, { useState } from 'react';
import { ArrowLeft, Battery, Zap, Users, Clock, ShoppingCart } from 'lucide-react';
import Navigation from './Navigation';
import Footer from './Footer';
import './Products.css';

const Products = ({ onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Complete product data from the catalog
  const products = [
    // Kiddies Cars
    {
      id: 'K-1',
      name: 'Naval RX 78',
      price: 4100,
      category: 'kiddies-cars',
      image: '/images/navalrx78.png',
      specs: {
        material: 'PP Reforzado',
        battery: '12V20AH*2',
        motor: '250W',
        capacity: '150 KG, Dos Personas',
        runtime: '5-6 Horas Continuo',
        dimensions: '156*75*85 CM'
      },
      features: ['Música MP3', 'Efectos de Sonido', 'Luces LED']
    },
    {
      id: 'K-2',
      name: 'Tigre Ride-On',
      price: 4300,
      category: 'kiddies-cars',
      image: '/images/tigreride.png',
      specs: {
        material: 'PP Reforzado',
        battery: '12V20AH*2',
        motor: '250W',
        capacity: '150 KG, Dos Personas',
        runtime: '5-6 Horas Continuo',
        dimensions: '149*77*91 CM'
      },
      features: ['Música MP3', 'Efectos de Sonido', 'Diseño de Tigre']
    },
    {
      id: 'K-3',
      name: 'Explorador Jeep',
      price: 4500,
      category: 'kiddies-cars',
      image: 'src/assets/images/exploradorjeep.png',
      specs: {
        material: 'PP Reforzado',
        battery: '12V20AH*2',
        motor: '300W',
        capacity: '150 KG, Dos Personas',
        runtime: '5-6 Horas Continuo',
        dimensions: '160*80*90 CM'
      },
      features: ['Control Remoto', 'Música MP3', 'Luces LED', 'Tracción 4x4']
    },
    {
      id: 'K-4',
      name: 'Super Car Racing',
      price: 3900,
      category: 'kiddies-cars',
      image: 'src/assets/images/supercarracing.png',
      specs: {
        material: 'PP Reforzado',
        battery: '12V15AH*2',
        motor: '200W',
        capacity: '120 KG, Dos Personas',
        runtime: '4-5 Horas Continuo',
        dimensions: '145*70*80 CM'
      },
      features: ['Diseño Deportivo', 'Música MP3', 'Efectos de Sonido']
    },
    {
      id: 'K-5',
      name: 'Adventure Truck',
      price: 4700,
      category: 'kiddies-cars',
      image: 'src/assets/images/adventuretruck.png',
      specs: {
        material: 'PP Reforzado',
        battery: '12V20AH*2',
        motor: '350W',
        capacity: '150 KG, Dos Personas',
        runtime: '6-7 Horas Continuo',
        dimensions: '165*85*95 CM'
      },
      features: ['Control Remoto', 'Música MP3', 'Luces LED', 'Suspensión']
    },
    {
      id: 'K-6',
      name: 'Police Patrol',
      price: 4200,
      category: 'kiddies-cars',
      image: 'src/assets/images/policepatrol.png',
      specs: {
        material: 'PP Reforzado',
        battery: '12V20AH*2',
        motor: '250W',
        capacity: '150 KG, Dos Personas',
        runtime: '5-6 Horas Continuo',
        dimensions: '155*78*88 CM'
      },
      features: ['Sirena de Policía', 'Música MP3', 'Luces LED', 'Radio FM']
    },

    // Montables
    {
      id: 'M-1',
      name: 'Montable Fox',
      price: 2700,
      category: 'montables',
      image: '/images/foxride.png',
      specs: {
        material: 'Fibra de Vidrio',
        connection: '220V',
        motor: '50W',
        capacity: '35 KG',
        dimensions: '120*60*85 CM'
      },
      features: ['Pantalla MP5', 'Monedero Programable', 'Audio/Video']
    },
    {
      id: 'M-2',
      name: 'Racing Bike',
      price: 2500,
      category: 'montables',
      image: 'src/assets/images/racingbike.png',
      specs: {
        material: 'Fibra de Vidrio',
        connection: '220V',
        motor: '45W',
        capacity: '30 KG',
        dimensions: '115*55*80 CM'
      },
      features: ['Efectos de Sonido', 'Monedero', 'Luces LED']
    },
    {
      id: 'M-3',
      name: 'Space Rocket',
      price: 2900,
      category: 'montables',
      image: 'src/assets/images/spacerocket.png',
      specs: {
        material: 'Fibra de Vidrio',
        connection: '220V',
        motor: '60W',
        capacity: '40 KG',
        dimensions: '125*65*90 CM'
      },
      features: ['Pantalla LCD', 'Efectos Espaciales', 'Monedero Digital']
    },
    {
      id: 'M-4',
      name: 'Ocean Adventure',
      price: 2800,
      category: 'montables',
      image: 'src/assets/images/oceanadventure.png',
      specs: {
        material: 'Fibra de Vidrio',
        connection: '220V',
        motor: '55W',
        capacity: '38 KG',
        dimensions: '120*62*87 CM'
      },
      features: ['Sonidos del Mar', 'Pantalla Digital', 'Monedero']
    },

    // Inflables
    {
      id: 'I-1',
      name: 'Castillo Medieval',
      price: 0, // Precio a consultar
      category: 'inflables',
      image: 'src/assets/images/castillomedieval.png',
      specs: {
        material: 'PVC Reforzado',
        dimensions: '6*4*4 M',
        capacity: '15-20 Niños',
        setup: '15 Minutos'
      },
      features: ['Tobogán Gigante', 'Área de Salto', 'Torres de Vigilancia']
    },
    {
      id: 'I-2',
      name: 'Parque Acuático',
      price: 0,
      category: 'inflables',
      image: 'src/assets/images/parqueacuatico.png',
      specs: {
        material: 'PVC Reforzado',
        dimensions: '8*5*4 M',
        capacity: '20-25 Niños',
        setup: '20 Minutos'
      },
      features: ['Tobogán de Agua', 'Piscina', 'Aspersores', 'Área de Juegos']
    },
    {
      id: 'I-3',
      name: 'Aventura en la Selva',
      price: 0,
      category: 'inflables',
      image: 'src/assets/images/aventuraselva.png',
      specs: {
        material: 'PVC Reforzado',
        dimensions: '7*4*4 M',
        capacity: '18-22 Niños',
        setup: '18 Minutos'
      },
      features: ['Obstáculos', 'Tobogán Temático', 'Área de Escalada']
    },
    {
      id: 'I-4',
      name: 'Planeta Espacial',
      price: 0,
      category: 'inflables',
      image: 'src/assets/images/planetaespacial.png',
      specs: {
        material: 'PVC Reforzado',
        dimensions: '6*5*5 M',
        capacity: '16-20 Niños',
        setup: '16 Minutos'
      },
      features: ['Diseño Espacial', 'Múltiples Niveles', 'Tobogán Curvo']
    },
    {
      id: 'I-5',
      name: 'Reino de Princesas',
      price: 0,
      category: 'inflables',
      image: 'src/assets/images/reinoprincesas.png',
      specs: {
        material: 'PVC Reforzado',
        dimensions: '5*4*4 M',
        capacity: '12-16 Niñas',
        setup: '14 Minutos'
      },
      features: ['Castillo Rosa', 'Tobogán Elegante', 'Área de Baile']
    },

    // Mesas y Basquet
    {
      id: 'MB-1',
      name: 'Mesa de Ping Pong Pro',
      price: 1800,
      category: 'mesas-basquet',
      image: 'src/assets/images/mesapingpong.png',
      specs: {
        material: 'MDF Laminado',
        dimensions: '274*152*76 CM',
        thickness: '18mm',
        setup: 'Plegable'
      },
      features: ['Superficie Antirreflejante', 'Ruedas', 'Red Incluida']
    },
    {
      id: 'MB-2',
      name: 'Canasta de Basquet Ajustable',
      price: 1200,
      category: 'mesas-basquet',
      image: 'src/assets/images/canastabasquet.png',
      specs: {
        material: 'Acero Reforzado',
        height: '2.3-3.05 M Ajustable',
        base: 'Rellenable con Agua/Arena',
        dimensions: '110*75*230-305 CM'
      },
      features: ['Altura Ajustable', 'Base Estable', 'Tablero Oficial']
    },
    {
      id: 'MB-3',
      name: 'Mesa de Billar Familiar',
      price: 2500,
      category: 'mesas-basquet',
      image: 'src/assets/images/mesabillar.png',
      specs: {
        material: 'MDF + Fieltro',
        dimensions: '213*122*81 CM',
        accessories: 'Completos',
        players: '2-4 Jugadores'
      },
      features: ['Fieltro Profesional', 'Accesorios Completos', 'Estructura Sólida']
    },
    {
      id: 'MB-4',
      name: 'Futbolín Profesional',
      price: 1900,
      category: 'mesas-basquet',
      image: 'src/assets/images/futbolin.png',
      specs: {
        material: 'MDF Reforzado',
        dimensions: '145*75*87 CM',
        players: '2-4 Jugadores',
        rods: '8 Barras Cromadas'
      },
      features: ['Barras Cromadas', 'Marcador', 'Pelotas Incluidas']
    },
    {
      id: 'MB-5',
      name: 'Mesa de Hockey de Aire',
      price: 2200,
      category: 'mesas-basquet',
      image: 'src/assets/images/mesahockey.png',
      specs: {
        material: 'MDF + Sistema de Aire',
        dimensions: '183*91*81 CM',
        power: '220V Motor',
        accessories: 'Paletas y Discos'
      },
      features: ['Sistema de Aire', 'Marcador Digital', 'Sonidos']
    },
    {
      id: 'MB-6',
      name: 'Canasta Mini Basquet',
      price: 800,
      category: 'mesas-basquet',
      image: './public/images/minibasquet.png',
      specs: {
        material: 'Plástico Reforzado',
        height: '1.2-1.8 M Ajustable',
        base: 'Rellenable',
        dimensions: '70*50*120-180 CM'
      },
      features: ['Para Niños', 'Altura Ajustable', 'Fácil Montaje']
    }
  ];

  const categories = [
    { id: 'all', name: 'Todos los Productos', icon: '🎮' },
    { id: 'kiddies-cars', name: 'Kiddies Cars', icon: '🚗' },
    { id: 'montables', name: 'Montables', icon: '🎮' },
    { id: 'inflables', name: 'Inflables', icon: '🏰' },
    { id: 'mesas-basquet', name: 'Mesas y Basquet', icon: '🏀' }
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="products-container">
      {/* Navigation */}
      <Navigation onNavigate={onNavigate} currentPage="products" />

      {/* Products Content */}
      <main className="products-main">
        {/* Hero Section */}
        <section className="products-hero">
          <div className="container">
            <button 
              className="back-btn"
              onClick={() => onNavigate('home')}
            >
              <ArrowLeft size={20} />
              Volver al Inicio
            </button>
            <h1 className="products-title">Nuestro Catálogo</h1>
            <p className="products-subtitle">
              Descubre toda nuestra gama de productos para la diversión infantil
            </p>
          </div>
        </section>

        {/* Category Filter */}
        <section className="category-filter">
          <div className="container">
            <div className="filter-buttons">
              {categories.map(category => (
                <button
                  key={category.id}
                  className={`filter-btn ${selectedCategory === category.id ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(category.id)}
                >
                  <span className="filter-icon">{category.icon}</span>
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="products-grid-section">
          <div className="container">
            <div className="products-count">
              <p>Mostrando {filteredProducts.length} productos</p>
            </div>
            <div className="products-grid">
              {filteredProducts.map(product => (
                <div key={product.id} className="product-card">
                  <div className="product-image">
                    <img src={product.image} alt={product.name} />
                    <div className="product-overlay">
                      <button className="overlay-btn">Ver Detalles</button>
                    </div>
                  </div>
                  
                  <div className="product-info">
                    <div className="product-header">
                      <h3 className="product-name">{product.name}</h3>
                      <span className="product-sku">SKU: {product.id}</span>
                    </div>
                    
                    <div className="product-specs">
                      <div className="spec-item">
                        <Battery size={16} />
                        <span>{product.specs.battery || product.specs.motor || product.specs.connection || product.specs.material}</span>
                      </div>
                      <div className="spec-item">
                        <Users size={16} />
                        <span>{product.specs.capacity || 'Consultar'}</span>
                      </div>
                      {product.specs.runtime && (
                        <div className="spec-item">
                          <Clock size={16} />
                          <span>{product.specs.runtime}</span>
                        </div>
                      )}
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
                        <span className="price-label">Precio:</span>
                        <span className="price-value">
                          {product.price > 0 ? `S/. ${product.price.toLocaleString()}` : 'Consultar'}
                        </span>
                      </div>
                      
                      <div className="product-actions">
                        <button className="btn btn-secondary">
                          <Zap size={16} />
                          Comprar
                        </button>
                        <button 
                          className="btn btn-primary"
                          onClick={() => onNavigate('contact')}
                        >
                          <ShoppingCart size={16} />
                          Contactar
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="contact-cta">
          <div className="container">
            <div className="cta-content">
              <h3>¿Necesitas más información?</h3>
              <p>Contacta con nosotros para cotizaciones personalizadas y asesoramiento</p>
              <div className="cta-actions">
                <a 
                  href="https://wa.me/34949728856" 
                  className="btn btn-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  📱 WhatsApp: 949728856
                </a>
                <button 
                  className="btn btn-secondary"
                  onClick={() => onNavigate('contact')}
                >
                  📧 Enviar Email
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer theme="dark" />
    </div>
  );
};

export default Products;