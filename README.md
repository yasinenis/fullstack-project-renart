# renArt Product Listing App

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

## Deploy (Render.com & GitHub)

### 1. Projeyi GitHub'a Yükle
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin <repo-url>
git push -u origin main
```

### 2. Render.com'da Deploy
- Render.com'a giriş yapın.
- "New Web Service" seçin.
- GitHub reposunu bağlayın.
- **Backend için:**
  - Root directory: `backend`
  - Build Command: `npm install`
  - Start Command: `node index.js`
  - Environment: Node
  - Environment Variables kısmına `.env` içeriğini ekleyin (GOLD_API_KEY).
- **Frontend için:**
  - Root directory: `backend/frontend`
  - Build Command: `npm install && npm run build`
  - Start Command: `serve -s build` (gerekirse `npm install -g serve`)

### 3. Canlı Linkleri Alın
- Render.com size iki ayrı link verecek (backend ve frontend için).
- Frontend'de API adresini canlı backend linkine göre güncelleyin (örn. `.env` veya doğrudan kodda).

---

## Notlar
- API anahtarınızı asla repoya eklemeyin, sadece .env dosyasında tutun.
- node_modules, build, .env gibi dosyalar .gitignore ile korunuyor olmalı.
- Tasarım ve fonksiyonellik yönergeye tam uyumludur.

---

Herhangi bir sorunda veya deploy adımında takılırsanız bana ulaşabilirsiniz! 