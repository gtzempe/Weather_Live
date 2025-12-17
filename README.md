# Weather Live

A modern, full-featured weather application built with React and TypeScript that provides real-time weather data, forecasts, and personalized weather tracking.

![React](https://img.shields.io/badge/React-19.2.0-61DAFB?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-3178C6?logo=typescript)
![TanStack Query](https://img.shields.io/badge/TanStack_Query-5.90.12-FF4154?logo=react-query)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1.18-06B6D4?logo=tailwind-css)

## Overview

Weather Live delivers comprehensive weather information with an intuitive, responsive interface. Built with modern web technologies including React, TypeScript, and TanStack Query for efficient data management.

## Live Demo

[View Live Demo](your-demo-link-here)

## Features

- **Real-Time Weather Data** - Current weather conditions with detailed metrics
- **5-Day Forecast** - Extended weather predictions with daily breakdowns
- **Interactive Temperature Charts** - Hourly temperature visualization using Recharts
- **Geolocation Support** - Automatic weather detection for user's location with fallback
- **City Search** - Search functionality to find weather for any city
- **Search History** - Track and quickly access previously searched locations
- **Favorites Management** - Save and manage favorite cities
- **Individual City Pages** - Dedicated pages for detailed city weather
- **Dark/Light Mode** - Theme toggle for comfortable viewing
- **Responsive Design** - Optimized for all device sizes

## Tech Stack

### Core Technologies
- **React 19.2.0** - Latest React version with improved performance
- **TypeScript 5.9.3** - Static typing for robust, maintainable code
- **Vite 7.2.4** - Lightning-fast build tool and dev server

### Styling & UI
- **Tailwind CSS 4.1.18** - Utility-first CSS framework
- **Shadcn/ui** - Built on top of Radix UI primitives
- **Radix UI** - Headless, accessible component primitives
- **Lucide React 0.561.0** - Icon library
- **next-themes 0.4.6** - Dark mode support

### Data Management
- **TanStack Query 5.90.12** - Powerful async state management with intelligent caching
- **TanStack Query DevTools 5.91.1** - Development tools for debugging queries

### Data Visualization
- **Recharts 3.6.0** - Composable charting library for React

### Routing
- **React Router DOM 7.10.1** - Declarative routing for React applications

### Utilities
- **date-fns 4.1.0** - Modern JavaScript date utility library
- **sonner 2.0.7** - Elegant toast notifications

### API
- **OpenWeather API 2.5** - Weather data provider with current weather, forecasts, and geocoding

## Getting Started


### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/weather-live.git
   cd weather-live
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env` file in the root directory:
   ```env
   VITE_OPENWEATHER_API_KEY=your_api_key_here
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   
   Navigate to `http://localhost:5173`

## Project Structure

```
weather-live/
├── src/
│   ├── api/
│   │   ├── config.ts           # API configuration
│   │   ├── types.ts            # TypeScript type definitions
│   │   └── weather.ts          # Weather API functions
│   ├── components/
│   │   ├── ui/                 # Reusable UI components
│   │   ├── City-search.tsx     # City search component
│   │   ├── Current-weather.tsx # Current weather display
│   │   ├── favorite-cities.tsx # Favorites management
│   │   ├── Header.tsx          # App header with navigation
│   │   ├── Hourly-temperature.tsx # Hourly chart component
│   │   ├── Layout.tsx          # Main layout wrapper
│   │   ├── loading-skeleton.tsx # Loading states
│   │   ├── Theme-toggle.tsx    # Dark/light mode toggle
│   │   ├── Weather-details.tsx # Detailed weather metrics
│   │   └── Weather-forecast.tsx # 5-day forecast
│   ├── context/                # React context providers
│   ├── hooks/
│   │   ├── use-favorite.ts     # Favorites management hook
│   │   ├── use-geolocation.ts  # Geolocation hook
│   │   ├── use-local-storage.ts # localStorage hook
│   │   ├── use-reverse-geocode.ts # Reverse geocoding hook
│   │   └── use-weather.ts      # Weather data hook
│   ├── lib/
│   │   └── utils.ts            # Utility functions
│   ├── pages/
│   │   ├── CityPage.tsx        # Individual city page
│   │   └── WeatherDashboard.tsx # Main dashboard
│   ├── App.tsx                 # Main app with routing
│   ├── App.css                 # App-specific styles
│   ├── index.css               # Global styles
│   └── main.tsx                # App entry point
├── public/
│   └── logo.png                # App logo
├── .env                        # Environment variables (not in git)
├── .gitignore
├── components.json             # Radix UI configuration
├── eslint.config.js            # ESLint configuration
├── package.json
├── tsconfig.app.json           # TypeScript config for app
├── tsconfig.node.json          # TypeScript config for Node
├── vite.config.ts              # Vite configuration
└── README.md
```

## API Integration

This application uses the OpenWeather API 2.5 (free tier) with the following endpoints:

- **Current Weather** (`/data/2.5/weather`) - Real-time weather data
- **5-Day Forecast** (`/data/2.5/forecast`) - Weather predictions with 3-hour intervals
- **Geocoding** (`/geo/1.0/direct`) - City name to coordinates conversion
- **Reverse Geocoding** (`/geo/1.0/reverse`) - Coordinates to city name

### API Features Used
- Temperature (current and feels-like)
- Weather conditions with descriptions
- Humidity, pressure, and visibility
- Wind speed and direction
- 5-day forecast data
- Sunrise and sunset times

## Key Components

### Weather Dashboard
Main landing page displaying current location weather with favorites and quick access to cities.

### Current Weather
Real-time weather display with temperature, conditions, and key metrics.

### Hourly Temperature Chart
Interactive Recharts visualization showing 24-hour temperature trends.

### Weather Details
Comprehensive panel showing humidity, wind speed, pressure, visibility, and more.

### 5-Day Forecast
Extended forecast with daily high/low temperatures and conditions.

### City Search
Modal popup for searching cities with autocomplete functionality.

### Search History
Quick access to recently searched locations.

### Favorites System
Save favorite cities and render them on the dashboard for quick access.

### City Page
Dedicated page for each city with complete weather information.

### Theme Toggle
Dark/light mode switcher integrated in the header.

## Responsive Breakpoints

- **Mobile**: 320px - 640px
- **Tablet**: 641px - 1024px
- **Desktop**: 1025px and above

## Theme Support

- Automatic system preference detection
- Manual dark/light mode toggle
- Persistent theme selection using localStorage

## Available Scripts

```bash
npm run dev     # Start development server
npm run build   # Build for production
npm run lint    # Run ESLint
```

## Deployment

```bash
npm run build
```

Output directory: `dist/`

Deploy to your preferred platform (Vercel, Netlify, etc.) and set the `VITE_OPENWEATHER_API_KEY` environment variable.

## Environment Variables

Create a `.env` file in the root directory:

```env
VITE_OPENWEATHER_API_KEY=your_api_key_here
```

Get your free API key from [OpenWeather](https://openweathermap.org/api).

## Technical Highlights

- Full TypeScript implementation with strict mode
- TanStack Query for optimized data fetching and caching
- Custom React hooks for reusable logic
- Comprehensive error handling
- Responsive design for all devices
- Accessible UI components with Radix UI

## Acknowledgments

- [OpenWeather API](https://openweathermap.org/) - Weather data provider
- [Shadcn/ui](https://ui.shadcn.com/) - UI components
- [TanStack Query](https://tanstack.com/query) - Data fetching
- [Recharts](https://recharts.org/) - Data visualization

---
