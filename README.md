# 🌞 SunCart – Summer Essentials Store

A modern summer eCommerce web application built with **Next.js**, where users can explore, view, and purchase seasonal products like sunglasses, summer outfits, skincare items, beach accessories, and more.

---

## 🚀 Live Demo
👉 [Your Live URL Here]

---

## 📌 Project Purpose

SunCart is designed as a learning + real-world eCommerce project where users can:
- Browse summer products
- View detailed product information
- Authenticate using email/password or Google
- Access protected product details page
- Update profile information

---

## ✨ Key Features

- 🌅 Modern Summer UI Design
- 📦 Product listing from JSON data (6+ products)
- 🔐 Authentication (Login/Register)
- 🔒 Protected Product Details Page
- 👤 My Profile Page (user info display & update)
- 📱 Fully Responsive (Mobile, Tablet, Desktop)
- ⚡ Route-based navigation (Next.js App Router)
- 🎨 Clean UI with Tailwind CSS + DaisyUI/HeroUI
- 🔥 Google Social Login Support
- 💾 Environment Variables for security

---

## 🧱 Tech Stack

- **Next.js**
- **React.js**
- **Tailwind CSS**
- **HeroUI**
- **BetterAuth**
- **React Icons**

---

## 📂 Project Structure

suncart/
│
├── public/
│   ├── images/
│   │   ├── hero1.jpg
│   │   ├── hero2.jpg
│   │   ├── product1.png
│   │   └── brands/
│   │       ├── brand1.png
│   │       ├── brand2.png
│   │
│   └── favicon.ico
│
├── src/
│   ├── app/
│   │   ├── layout.jsx
│   │   ├── page.jsx                // Home Page
│   │
│   │   ├── products/
│   │   │   ├── page.jsx           // All products page
│   │   │   └── [id]/
│   │   │       └── page.jsx       // Product Details (Protected)
│   │
│   │   ├── login/
│   │   │   └── page.jsx
│   │
│   │   ├── register/
│   │   │   └── page.jsx
│   │
│   │   ├── profile/
│   │   │   ├── page.jsx           // My Profile
│   │   │   └── update/
│   │   │       └── page.jsx       // Update Profile
│   │
│   │   └── not-found.jsx
│
│   ├── components/
│   │   ├── shared/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Footer.jsx
│   │   │   └── Container.jsx
│   │
│   │   ├── home/
│   │   │   ├── Hero.jsx
│   │   │   ├── PopularProducts.jsx
│   │   │   ├── ProductCard.jsx
│   │   │   ├── SummerTips.jsx
│   │   │   └── TopBrands.jsx
│   │
│   │   ├── products/
│   │   │   ├── ProductDetails.jsx
│   │   │   └── ProductList.jsx
│   │
│   │   ├── auth/
│   │   │   ├── LoginForm.jsx
│   │   │   └── RegisterForm.jsx
│   │
│   │   └── ui/
│   │       ├── Button.jsx
│   │       ├── Input.jsx
│   │       └── Loader.jsx
│
│   ├── lib/
│   │   ├── auth.js                // BetterAuth config
│   │   └── utils.js
│
│   ├── hooks/
│   │   ├── useAuth.js
│   │   └── useProducts.js
│
│   ├── data/
│   │   └── products.json         // Static product data
│
│   ├── middleware.js             // Route protection
│
│   └── styles/
│       └── globals.css
│
├── .env.local                    // Environment variables
├── .gitignore
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── next.config.js
├── README.md
