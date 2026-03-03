# 🍔 Swiggy Clone – React Food Delivery App

A fully responsive Swiggy-inspired food delivery web application built using modern React architecture, Redux Toolkit, and Parcel bundler.

---

## 🚀 Tech Stack

- React 19
- Redux Toolkit
- React Router DOM
- Tailwind CSS
- Parcel Bundler
- Jest
- React Testing Library

---

## ✨ Features

- 🔍 Search Restaurants
- 🛒 Add to Cart
- ❌ Remove from Cart
- 🧹 Clear Cart Functionality
- 🔄 Real-time UI Updates
- ⚡ Client-Side Routing
- 📱 Fully Responsive Design
- 🧪 Unit & Component Testing

---

## 🏗️ Project Architecture

### 🔹 Header
- Logo
- Navigation Items

### 🔹 Body
- Search Bar
- Restaurant Container
  - Restaurant Card
    - Image
    - Restaurant Name
    - Star Rating
    - Cuisine
    - Delivery Time

---

## ⚛️ React Concepts Used

### React Hooks
- `useState()` – State management
- `useEffect()` – Handling side effects

### Routing
- Client-Side Routing using React Router

---

## 🗂️ Redux Toolkit Implementation

- Installed `@reduxjs/toolkit` and `react-redux`
- Created centralized Redux Store
- Built `cartSlice`
- Used `dispatch(action)` for state updates
- Used `useSelector` to access store data

---

## 📦 Parcel Bundler Features

Parcel provides:

- Development Build
- Local Development Server
- Hot Module Replacement (HMR)
- File Watching Algorithm (written in C++)
- Caching for Faster Builds
- Image Optimization
- Minification
- Bundling & Compression
- Code Splitting
- Tree Shaking (removes unused code)
- Differential Bundling (supports older browsers)
- Error Handling & Diagnostics
- HTTPS Support
- Separate Dev & Production Builds

---

## 📤 Export & Import Types

### Default Export
```js
export default Component;
import Component from "./path";
