# Private Property Rental 🏠

A professional-grade property listing and rental platform built with **React.js**. This application replicates the high-end user experience of modern travel platforms, featuring dynamic content filtering, interactive image galleries, and a fully responsive architecture.

## 🚀 Key Features

*   **Dynamic Search & Filter:** A dual-filtering system that allows users to search by location/title while simultaneously filtering by property categories (Cabins, Villas, Trending, etc.).
*   **Interactive Image Sliders:** Custom-built horizontal sliders within every property card using `scroll-snap` for a premium native feel on both web and mobile.
*   **Hero Grid Gallery:** A professional property detail page featuring a "Hero Grid" (1 large image, 4 small) and a sticky booking widget.
*   **Staggered Animations:** Optimized CSS keyframe animations that create a "pop-in" effect for property cards when categories are switched.
*   **Declarative Routing:** Implemented `react-router-dom` for seamless transitions between the main grid and individual property views.

## 🛠️ Tech Stack

- **Frontend:** React.js (Vite)
- **Routing:** React Router DOM v6
- **Icons:** React Icons (Lucide, FontAwesome, Ionicons)
- **Styling:** Advanced CSS3 (CSS Grid, Flexbox, Keyframe Animations)
- **Data Management:** JSON-based mock database (scalable for backend integration)

## 📦 Project Structure

```text
src/
 ├── components/
 │    ├── Nav/          # Navbar with search and category logic
 │    ├── Card/         # Reusable card with image slider & wishlist
 ├── pages/
 │    ├── Home/         # Grid logic and category filtering
 │    └── PropertyDetails/ # Grid gallery and booking widget
 ├── utils/
 │    └── data.js       # JSON data array (25-40 property entries)
 └── App.jsx            # Route definitions
