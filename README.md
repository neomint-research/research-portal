# NEOMINT Research Portal

A professional documentation platform showcasing cutting-edge research in AI, machine learning, and emerging technologies. Built with Docusaurus and designed with a clean, minimal aesthetic inspired by Linear.

## 🚀 Overview

The NEOMINT Research Portal serves as a centralized hub for:
- 📚 Research whitepapers and publications
- 🧠 AI and ML research findings
- 🔬 Technical documentation and insights
- 💡 Innovation in emerging technologies

## 🛠️ Tech Stack

- **Framework**: Docusaurus 3.8.1
- **UI Components**: React 19.0.0 with custom components
- **Styling**: CSS Modules with Linear-inspired design
- **Icons**: Iconoir React
- **Deployment**: Vercel-ready configuration

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/research-portal.git
cd research-portal

# Install dependencies
npm install
# or
npm ci # for clean install
```

## 🚀 Development

```bash
# Start development server
npm start

# Build for production
npm run build

# Serve production build locally
npm run serve

# Clean and rebuild
npm run clean-build
```

The development server runs at `http://localhost:3000` with hot reload enabled.

## 🏗️ Production Build

```bash
# Create optimized production build
npm run build

# Test production build locally
npm run production
```

## 🚢 Deployment

### Vercel Deployment

This project includes a `vercel.json` configuration for seamless deployment:

1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect the configuration
3. Deploy with zero configuration needed

### Manual Deployment

```bash
# Build the project
npm run build

# The 'build' directory contains the static files
# Deploy to any static hosting service
```

### GitHub Pages Deployment

```bash
# Using SSH
USE_SSH=true npm run deploy

# Using HTTPS
GIT_USER=<Your GitHub username> npm run deploy
```

## 📁 Project Structure

```
research-portal/
├── docs/                 # Documentation content
│   └── whitepapers/     # Research whitepapers
│       ├── 2024/        # 2024 publications
│       └── 2025/        # 2025 publications
├── src/
│   ├── components/      # React components
│   │   ├── HomepageFeatures/
│   │   ├── VerticalDivider/
│   │   └── WhitepaperCard/
│   ├── css/            # Global styles
│   └── pages/          # Page components
├── static/             # Static assets
├── docusaurus.config.js # Main configuration
├── sidebars.js         # Sidebar configuration
└── vercel.json         # Vercel deployment config
```

## 🎨 Design System

The portal features a professional, minimal design inspired by Linear:
- Clean typography with subtle animations
- Elegant card-based layouts
- Smooth hover effects and transitions
- Responsive design for all devices
- Dark mode support (configurable)

## 🔒 Security

Production deployments include security headers:
- `X-Frame-Options: DENY` - Prevents clickjacking
- `X-Content-Type-Options: nosniff` - Prevents MIME type sniffing

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is proprietary to NEOMINT. All rights reserved.

## 🔗 Links

- [NEOMINT Official Website](#)
- [Documentation](https://docs.neomint.io)
- [Research Publications](https://research.neomint.io)

---

Built with ❤️ by NEOMINT Research Team
