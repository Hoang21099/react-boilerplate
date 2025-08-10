# Enterprise React Boilerplate

A production-ready, enterprise-grade React application boilerplate built with TypeScript, featuring modern development tools, best practices, and comprehensive functionality.

## 🚀 Features

### Core Technologies
- **React 18** with TypeScript
- **Vite** for fast development and optimized builds
- **Tailwind CSS** for utility-first styling
- **React Router v6** with lazy loading and code splitting
- **Redux Toolkit** with RTK Query for state management
- **Axios** with interceptors for HTTP client

### Development Experience
- **ESLint + Prettier** for code quality
- **Husky + lint-staged** for git hooks
- **Conventional Commits** with commitlint
- **Vitest + React Testing Library** for testing
- **TypeScript** with strict configuration

### Enterprise Features
- 🔐 **Authentication & Authorization** with JWT tokens
- 🌍 **Internationalization (i18n)** with react-i18next
- 🎨 **Dark/Light Theme** switching
- 📱 **Responsive Design** with mobile-first approach
- 🛡️ **Error Boundaries** for graceful error handling
- 🔄 **Loading States** and error handling
- 🚦 **Protected Routes** with role-based access
- 📊 **Professional Dashboard** with statistics
- 👥 **User Management** interface

### Performance & Optimization
- **Code Splitting** with dynamic imports
- **Tree Shaking** for optimal bundle size
- **Image Optimization** with proper formats
- **Caching Strategies** with RTK Query
- **Bundle Analysis** tools

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # Basic UI components (Button, Input, etc.)
│   ├── layout/         # Layout components (Header, Footer, etc.)
│   └── common/         # Common components (ErrorBoundary, etc.)
├── pages/              # Page components
├── hooks/              # Custom React hooks
├── services/           # API services and HTTP client
├── store/              # Redux store and slices
├── types/              # TypeScript type definitions
├── utils/              # Utility functions
├── config/             # Configuration files
├── i18n/               # Internationalization
├── router/             # Routing configuration
└── assets/             # Static assets
```

## 🛠️ Quick Start

1. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

2. **Environment Setup**
   ```bash
   cp .env.example .env
   ```
   Update the environment variables in `.env` file.

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## 📋 Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |
| `npm run lint:fix` | Fix ESLint issues |
| `npm run format` | Format code with Prettier |
| `npm run test` | Run tests |
| `npm run test:coverage` | Run tests with coverage |
| `npm run type-check` | TypeScript type checking |

## 🔧 Configuration

### Environment Variables
```env
VITE_APP_NAME=Enterprise React App
VITE_API_BASE_URL=http://localhost:3001/api
VITE_APP_VERSION=1.0.0
VITE_NODE_ENV=development
```

### Theme Configuration
The application supports dark/light theme switching. Themes are configured in `src/config/theme.ts` and use Tailwind CSS classes.

### Internationalization
Languages are configured in `src/i18n/locales/`. Currently supports:
- English (en)
- Vietnamese (vi)

## 🏗️ Architecture Patterns

### State Management
- **Redux Toolkit** for global state
- **RTK Query** for API data fetching and caching
- **Local state** for component-specific state
- **Custom hooks** for reusable stateful logic

### Component Design
- **Composition over inheritance**
- **Props interface** with TypeScript
- **Forwarded refs** for form components
- **Consistent naming** conventions

### Error Handling
- **Error boundaries** for component errors
- **HTTP interceptors** for API errors
- **Toast notifications** for user feedback
- **Graceful degradation** for offline states

## 🧪 Testing Strategy

### Unit Testing
- **Vitest** as test runner
- **React Testing Library** for component testing
- **User-centric testing** approach
- **Mocked dependencies** for isolation

### Test Coverage
Run tests with coverage reporting:
```bash
npm run test:coverage
```

## 🚀 Deployment

### Build Optimization
The build process includes:
- Code splitting for optimal loading
- Tree shaking for smaller bundles
- Asset optimization
- Source maps for debugging

### Production Checklist
- [ ] Environment variables configured
- [ ] API endpoints updated
- [ ] Error tracking configured
- [ ] Performance monitoring setup
- [ ] Security headers configured

## 📱 Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'feat: add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

### Commit Convention
This project uses [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` new feature
- `fix:` bug fix
- `docs:` documentation changes
- `style:` formatting changes
- `refactor:` code refactoring
- `test:` adding tests
- `chore:` maintenance tasks

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

For support and questions:
- Create an issue in this repository
- Check the documentation
- Review existing issues

## 🙏 Acknowledgments

- React team for the amazing framework
- Tailwind CSS for the utility-first approach
- Redux team for state management
- All open source contributors

---

**Happy coding! 🎉**