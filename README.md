# Portfolio - Przemysław Leksa

Modern portfolio website built with React 19, TypeScript, SCSS modules, and Vite.

## Features

- 🌐 **Bilingual** - Polish and English support
- 🌙 **Dark/Light Theme** - Automatic system theme detection
- 📱 **Responsive Design** - Mobile-first approach
- 🎨 **Modern UI** - Glassmorphism effects and smooth animations
- 🚀 **Performance** - Optimized with Vite and React 19
- ♿ **Accessible** - Semantic HTML and keyboard navigation

## Tech Stack

- **React 19** - Latest React with concurrent features
- **TypeScript** - Type safety and better DX
- **SCSS Modules** - Scoped styling with CSS modules
- **Vite** - Fast build tool and dev server
- **Biome** - Fast linter and formatter
- **GitHub Pages** - Hosting

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint and format code
npm run check
```

## Deployment

This project is automatically deployed to GitHub Pages using GitHub Actions.

### Manual Deployment

```bash
# Install gh-pages if not already installed
npm install --save-dev gh-pages

# Deploy to GitHub Pages
npm run deploy
```

### GitHub Actions

The project uses GitHub Actions for automatic deployment:

1. **Trigger**: Push to `main` branch
2. **Build**: TypeScript compilation + Vite build
3. **Deploy**: Automatic deployment to GitHub Pages

## Project Structure

```
src/
├── components/          # React components
│   ├── HeroSection/     # Landing section with topbar
│   ├── Projects/        # Project showcase with modals
│   ├── Skills/          # Skills categories
│   ├── About/           # About me section
│   ├── Courses/         # Courses list
│   ├── Languages/       # Language proficiency
│   └── Contact/         # Contact information
├── contexts/            # React contexts
│   ├── LanguageContext.tsx
│   └── ThemeContext.tsx
├── i18n/               # Internationalization
│   └── translations.ts
├── styles/             # Global styles
└── types/              # TypeScript declarations
```

## GitHub Pages Configuration

The project is configured for GitHub Pages deployment:

- **Base URL**: `/showcase/` (for production)
- **Workflow**: `.github/workflows/deploy.yml`
- **Branch**: `gh-pages` (automatically created)

## Live Demo

🌐 **[View Live Portfolio](https://yourusername.github.io/showcase/)**

## License

MIT License - feel free to use this template for your own portfolio.
