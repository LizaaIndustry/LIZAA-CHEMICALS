
import './App.css';

const products = [
  {
    name: 'Dishwashing Liquid',
    category: 'Kitchen Care',
    description: 'Powerful grease removal for sparkling clean utensils.',
    size: '500 ml',
    price: 99,
    icon: '🍋',
  },
  {
    name: 'Bathroom Cleaner',
    category: 'Bathroom Care',
    description: 'Deep cleaning power for bathroom surfaces.',
    size: '500 ml',
    price: 89,
    icon: '🚿',
  },
  {
    name: 'Toilet Cleaner',
    category: 'Bathroom Care',
    description: 'Everyday toilet cleaning and freshness.',
    size: '500 ml',
    price: 79,
    icon: '🧴',
  },
  {
    name: 'Phenyl',
    category: 'Floor Care',
    description: 'Keep your floors fresh and clean.',
    size: '1 Litre',
    price: 99,
    icon: '✨',
  },
  {
    name: 'Pitambari Liquid',
    category: 'Special Care',
    description: 'Liquid cleaning care for shining surfaces.',
    size: '250 ml',
    price: 110,
    icon: '💧',
  },
];

function App() {
  return (
    <div className="website">

      {/* ANNOUNCEMENT */}
      <div className="announcement">
        A Cleaner Home. A Better Life.
      </div>

      {/* NAVIGATION */}
      <header className="navbar">
        <a className="brand" href="#home">
          <span className="brand-icon">L</span>
          <strong>LIZAA</strong>
        </a>

        <nav>
          <a href="#home">Home</a>
          <a href="#products">Products</a>
          <a href="#about">About Us</a>
          <a href="#contact">Contact</a>
        </nav>

        <a className="cart-button" href="#products">
          🛒 Shop Now
        </a>
      </header>

      <main>

        {/* HERO SECTION */}
        <section className="hero" id="home">
          <div className="hero-content">
            <span className="eyebrow">WELCOME TO LIZAA</span>

            <h1>
              A Cleaner Home.
              <span>A Better Life.</span>
            </h1>

            <p>
              Discover everyday cleaning essentials made to
              bring freshness, cleanliness and care into your home.
            </p>

            <a className="primary-button" href="#products">
              Explore Our Products →
            </a>

            <div className="hero-note">
              Quality Products · Everyday Cleaning · Better Living
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-circle">
              <div className="hero-bottle">🧴</div>
              <div className="floating-leaf">🌿</div>
              <div className="floating-sparkle">✦</div>

              <div className="hero-label">
                <strong>LIZAA</strong>
                <span>PURE CLEANING CARE</span>
              </div>
            </div>
          </div>
        </section>

        {/* BENEFITS */}
        <section className="benefits">
          <div>🌿 Quality Cleaning Products</div>
          <div>🏠 Everyday Home Care</div>
          <div>✨ Freshness & Cleanliness</div>
        </section>

        {/* PRODUCTS */}
        <section className="products-section" id="products">
          <div className="section-heading">
            <span className="eyebrow">OUR COLLECTION</span>
            <h2>Cleaning Essentials</h2>
            <p>
              Everything your home needs for everyday cleaning.
            </p>
          </div>

          <div className="product-grid">
            {products.map((product) => (
              <article className="product-card" key={product.name}>
                <div className="product-image">
                  <span>{product.icon}</span>
                  <small>{product.category}</small>
                </div>

                <div className="product-info">
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>

                  <div className="product-bottom">
                    <div>
                      <strong>₹{product.price}</strong>
                      <small>{product.size}</small>
                    </div>

                    <button type="button" className="add-button">
                      View Product
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ABOUT */}
        <section className="about-section" id="about">
          <span className="eyebrow">ABOUT OUR BRAND</span>
          <h2>Making Everyday Cleaning Better</h2>

          <p>
            LIZAA brings practical household cleaning solutions
            designed for everyday cleanliness, freshness and care.
          </p>
        </section>

        {/* CONTACT */}
        <section className="contact-section" id="contact">
          <h2>Let's Keep Your Home Clean</h2>
          <p>Discover the LIZAA collection.</p>

          <a href="#products" className="primary-button">
            Shop Our Products →
          </a>
        </section>

      </main>

      {/* FOOTER */}
      <footer>
        <div className="footer-brand">LIZAA</div>

        <p>A Cleaner Home. A Better Life.</p>

        <div className="business-details">
          <strong>LIZAA Chemical Industry</strong>
          <p>Business Address: [Add Your Full Business Address]</p>
          <p>Mobile: [Add Your Business Mobile Number]</p>
        </div>

        <small>
          © {new Date().getFullYear()} LIZAA Chemical Industry.
          All rights reserved.
        </small>
      </footer>

    </div>
  );
}

export default App;
