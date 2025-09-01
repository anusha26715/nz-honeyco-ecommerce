# New Zealand Honey Co. E-commerce Implementation

## Project Overview
A responsive e-commerce implementation for New Zealand Honey Co., featuring product showcase, UMF/MGO information display, and responsive image galleries.

## 🛠 Tech Stack
- React.js 18.x
- Bootstrap 5
- Swiper.js (for carousels)
- CSS3 (with media queries)

## 🎯 Key Features

### Responsive Layout
- Desktop (>1024px) and Mobile (<768px) optimized views
- Mobile-first approach using Bootstrap Grid System
- Flexible layouts using CSS Flexbox and Grid
- Dynamic image galleries with aspect ratio preservation

### Components
1. **Header**
   - Responsive navigation
   - Mobile hamburger menu
   - Fixed positioning with shadow
   - Brand logo and links

2. **Product Carousel**
   - Interactive product image showcase
   - Synchronized thumbnails navigation
   - Touch-enabled swiper functionality
   - Autoplay with pause on hover

3. **Image Grid**
   - Responsive 2-column layout
   - Full-width feature image
   - Optimized image loading and display
   - Hover effects and transitions

4. **Info Section**
   - UMF/MGO information popovers
   - Certificate showcase
   - Responsive image containers
   - Dynamic content arrangement

## 📱 Responsive Design Features
- Breakpoints:
  - Desktop: ≥992px
  - Tablet: 768px - 991px
  - Mobile: ≤767px
- Flexible image sizing
- Adaptive typography
- Responsive spacing system

## 🎨 UI/UX Implementations
- Consistent padding/margins (6% container padding)
- Interactive hover states
- Smooth transitions
- Accessible color contrasts
- Mobile-optimized touch targets

## 🔍 Accessibility Features
- Semantic HTML structure
- ARIA labels where needed
- Keyboard navigation support
- Legible font sizes (minimum 13px)
- Proper color contrast ratios

## 🚀 Setup and Installation
1. Clone the repository
```bash
git clone [https://github.com/anusha26715/nz-honeyco-ecommerce.git]
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm start
```

## 📋 Project Structure
```
src/
├── components/
│   ├── Header/
│   │   ├── Header.jsx
│   │   └── Header.css
│   ├── ProductCarousal/
│   │   ├── ProductCarousal.jsx
│   │   └── ProductCarousal.css
│   └── Home/
│       ├── Home.jsx
│       └── Home.css
├── App.js
└── index.js
```

## 🔍 Testing
- Responsive testing across multiple devices
- Cross-browser compatibility verification
- Touch interaction testing for mobile
- Performance optimization checks

## 🎯 Future Improvements
- [ ] Implement lazy loading for images
- [ ] Add animation transitions
- [ ] Enhance mobile navigation
- [ ] Optimize image loading performance

## 📝 Original Design Reference
- [Figma Design File](https://www.figma.com/design/KuTJztBgGAGZCKGbotH2nU/NZHC-UMF-MGO?node-id=1-2&t=rGX2823gt6Uba7uJ-0)