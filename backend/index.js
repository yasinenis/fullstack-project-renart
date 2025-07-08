require('dotenv').config();
const express = require('express');
const cors = require('cors');
const axios = require('axios');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());

const PRODUCTS_PATH = path.join(__dirname, 'products.json');
const GOLD_API_URL = 'https://www.goldapi.io/api/XAU/USD'; // örnek endpoint
const GOLD_API_KEY = process.env.GOLD_API_KEY;

async function getGoldPrice() {
  try {
    const response = await axios.get(GOLD_API_URL, {
      headers: {
        'x-access-token': GOLD_API_KEY,
        'Content-Type': 'application/json'
      }
    });
    return response.data.price_gram_24k;
  } catch (error) {
    console.error('Gold price fetch error:', error.message);
    // fallback: default value
    return 70; // USD/gram
  }
}

app.get('/api/products', async (req, res) => {
  try {
    const products = JSON.parse(fs.readFileSync(PRODUCTS_PATH, 'utf8'));
    const goldPrice = await getGoldPrice();
    let result = products.map(product => {
      const price = ((product.popularityScore + 1) * product.weight * goldPrice).toFixed(2);
      return {
        ...product,
        price: Number(price),
        priceFormatted: `$${price} USD`,
        popularityScore5: (product.popularityScore * 5).toFixed(1)
      };
    });

    // Filtreleme
    const { minPrice, maxPrice, minPopularity, maxPopularity } = req.query;
    if (minPrice) result = result.filter(p => p.price >= Number(minPrice));
    if (maxPrice) result = result.filter(p => p.price <= Number(maxPrice));
    if (minPopularity) result = result.filter(p => p.popularityScore5 >= Number(minPopularity));
    if (maxPopularity) result = result.filter(p => p.popularityScore5 <= Number(maxPopularity));

    res.json(result);
  } catch (err) {
    res.status(500).json({ error: 'Failed to load products.' });
  }
});

app.listen(PORT, () => {
  console.log(`Backend API running on http://localhost:${PORT}`);
}); 