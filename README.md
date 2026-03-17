# Scroll-Driven Hero Section Animation 🚗

This project recreates a **scroll-driven hero section animation** inspired by modern interactive landing pages.
The animation demonstrates smooth motion, scroll-based interactions, and performance-focused UI animations using **React, GSAP, and TailwindCSS**.

## 🌐 Live Demo

https://intern-assignment-qrg4.onrender.com/

## 📂 GitHub Repository

https://github.com/Piyush-Mishra-IIITB/intern1

---

# 📌 Project Objective

The goal of this project is to build a **scroll-responsive hero section** where elements animate smoothly as the user scrolls.

The implementation focuses on:

* Smooth UI animations
* Scroll-triggered motion
* Performance optimization using transform properties
* Clean and modular React structure

---

# ⚙️ Tech Stack

* **React (Vite)** – Frontend framework
* **GSAP** – High-performance animation library
* **GSAP ScrollTrigger** – Scroll-based animation control
* **Tailwind CSS (CDN)** – Utility-first styling
* **Render** – Deployment platform

---

# ✨ Features

## 1. Animated Hero Headline

The headline appears with a **staggered letter animation** when the page loads.

Animation behavior:

* Fade-in effect
* Vertical motion
* Staggered letter reveal

---

## 2. Statistics Reveal Animation

Three statistics appear sequentially with smooth motion.

Example:

```
95% Performance
80% Efficiency
120+ Speed Tests
```

Each statistic animates with:

* Vertical movement
* Opacity transition
* Delay between elements

---

## 3. Scroll-Driven Car Animation 🚗

The main visual element (car) moves **based on the user's scroll progress**.

Key behavior:

* Animation synced with scroll
* Smooth interpolation
* GPU-accelerated transforms
* Responsive movement across the viewport

Example implementation:

```
scrollTrigger: {
  trigger: heroRef.current,
  start: "top top",
  end: "+=1200",
  scrub: true
}
```

---

# 🚀 Performance Optimization

To ensure smooth animation performance:

* Animations use **transform properties**
* Avoids layout recalculation
* Uses **GSAP's optimized animation engine**
* Scroll-based animation uses **scrub synchronization**

---

# 📁 Project Structure

```
intern1
│
├── public
│   └── car.png
│
├── src
│   ├── components
│   │   └── Hero.jsx
│   │
│   ├── App.jsx
│   └── main.jsx
│
├── index.html
├── package.json
└── vite.config.js
```

---

# 🧠 Key Concepts Demonstrated

* Scroll-driven UI animation
* GSAP animation sequencing
* React component structure
* GPU-accelerated motion
* Interactive landing page design

---

# ▶️ Running the Project Locally

Clone the repository:

```
git clone https://github.com/Piyush-Mishra-IIITB/intern1.git
```

Install dependencies:

```
npm install
```

Start development server:

```
npm run dev
```

Build for production:

```
npm run build
```

---

# 📦 Deployment

The project is deployed using **Render Static Hosting**.

Deployment steps:

1. Push project to GitHub
2. Connect repository to Render
3. Configure build settings
4. Deploy the production build

---

# 📚 Inspiration

Reference animation:

https://paraschaturvedi.github.io/car-scroll-animation

---

# 👨‍💻 Author

**Piyush Mishra**

B.Tech – IIIT Bhopal
Interested in AI Engineering, Machine Learning, and Full-Stack Development.
