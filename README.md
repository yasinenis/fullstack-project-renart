# Renart Product Listing App

## Özellikler
- Ürünler için RESTful API (Node.js + Express)
- Canlı altın fiyatı ile dinamik fiyat hesaplama
- Modern, responsive React arayüzü
- Carousel, renk seçici, yıldızlı puan
- Fiyat ve popülerliğe göre filtreleme
- Tasarıma uygun özel fontlar (Avenir, Montserrat)

---

## Kurulum

### 1. Backend
```bash
cd backend
npm install
```

#### .env Dosyası Oluşturma
`backend/.env` dosyasını oluşturun ve API anahtarınızı ekleyin:
```
GOLD_API_KEY=goldapi-1jlsbk17mcu8ldmi-io
```

### 2. Frontend
```bash
cd frontend
npm install
```

---

## Geliştirme Ortamında Çalıştırma

### Backend'i Başlat
```bash
cd backend
node index.js
```

### Frontend'i Başlat
```bash
cd backend/frontend
npm start
```

- Frontend: [http://localhost:3000](http://localhost:3000)
- Backend API: [http://localhost:3001/api/products](http://localhost:3001/api/products)

---
