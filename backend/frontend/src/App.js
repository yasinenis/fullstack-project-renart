import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import './App.css';

const COLORS = [
  { key: 'yellow', label: 'Yellow Gold', code: '#E6CA97' },
  { key: 'white', label: 'White Gold', code: '#D9D9D9' },
  { key: 'rose', label: 'Rose Gold', code: '#E1A4A9' },
];

function StarRating({ value }) {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= Math.floor(value)) {
      stars.push(<span key={i} style={{ color: '#F6B545', fontSize: 18 }}>★</span>);
    } else {
      stars.push(<span key={i} style={{ color: '#D9D9D9', fontSize: 18 }}>★</span>);
    }
  }
  return <span>{stars}</span>;
}

function ProductCard({ product }) {
  const [color, setColor] = useState('yellow');
  return (
    <div className="product-card">
      <div className="product-img-wrap">
        <img src={product.images[color]} alt={product.name} className="product-img" />
      </div>
      <div className="product-info">
        <div className="product-title">{product.name}</div>
        <div className="product-price">{product.priceFormatted}</div>
        <div className="color-picker">
          {COLORS.map(c => (
            <button
              key={c.key}
              className={`color-btn${color === c.key ? ' selected' : ''}`}
              style={{ background: '#fff', border: `2px solid ${c.code}` }}
              onClick={() => setColor(c.key)}
              aria-label={c.label}
            >
              <span className="color-dot" style={{ background: c.code }} />
            </button>
          ))}
        </div>
        <div className="color-label">{COLORS.find(c => c.key === color).label}</div>
        <div className="product-rating">
          <StarRating value={product.popularityScore5} />
          <span className="rating-text">{product.popularityScore5}/5</span>
        </div>
      </div>
    </div>
  );
}

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('https://fullstack-project-renart.onrender.com/api/products')
      .then(res => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch(err => {
        setError('Failed to load products');
        setLoading(false);
      });
  }, []);

  return (
    <div className="app-container">
      <h1 className="main-title">Product List</h1>
      {loading && <div>Loading...</div>}
      {error && <div style={{ color: 'red' }}>{error}</div>}
      {!loading && !error && (
        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={40}
          slidesPerView={4}
          breakpoints={{
            320: { slidesPerView: 1 },
            600: { slidesPerView: 2 },
            900: { slidesPerView: 3 },
            1200: { slidesPerView: 4 },
          }}
        >
          {products.map((product, idx) => (
            <SwiperSlide key={idx}>
              <ProductCard product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
}

export default App;
