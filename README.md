# Renart Product Listing App

## Features
- RESTful API for products (Node.js + Express)
- Dynamic price calculation with live gold price
- Modern, responsive React interface
- Carousel, color picker, star rating
- Filtering by price and popularity
- Custom fonts matching the design (Avenir, Montserrat)

---

## Setup

### 1. Backend
```bash
cd backend
npm install
```

#### Creating .env file
create `backend/.env` file and add your API key:
```
GOLD_API_KEY= **
```

### 2. Frontend
```bash
cd frontend
npm install
```

---

## Running in Development Environment

### Start Backend
```bash
cd backend
node index.js
```

### Start Frontend
```bash
cd backend/frontend
npm start
```

- Frontend: [http://localhost:3000](http://localhost:3000)
- Backend API: [http://localhost:3001/api/products](http://localhost:3001/api/products)

---
