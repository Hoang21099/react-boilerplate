/**
 * Home page component
 */
import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowRight, Shield, Zap, Users, Globe } from 'lucide-react';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';

const Home: React.FC = () => {
  const { t } = useTranslation();

  const features = [
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Built-in authentication, authorization, and data protection features.',
    },
    {
      icon: Zap,
      title: 'High Performance',
      description: 'Optimized for speed with code splitting, lazy loading, and caching.',
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'User management, role-based access, and team features.',
    },
    {
      icon: Globe,
      title: 'Global Ready',
      description: 'Multi-language support and internationalization built-in.',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Enterprise React
              <span className="text-blue-600 dark:text-blue-400 block">
                Boilerplate
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              A production-ready React application with TypeScript, featuring authentication,
              state management, internationalization, and modern development tools.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link to="/dashboard">
                <Button size="lg" rightIcon={<ArrowRight className="h-5 w-5" />}>
                  Get Started
                </Button>
              </Link>
              <Link to="/login">
                <Button variant="outline" size="lg">
                  View Demo
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Background decoration */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white dark:bg-gray-800 shadow-xl shadow-blue-600/10 ring-1 ring-indigo-50 dark:ring-gray-700 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Everything you need
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Built with modern technologies and best practices for enterprise applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} hover className="text-center">
                <div className="flex flex-col items-center space-y-4">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900/20 rounded-lg">
                    <Icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Technology Stack */}
      <div className="bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Modern Technology Stack
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Built with the latest tools and frameworks
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {[
              'React 18',
              'TypeScript',
              'Redux Toolkit',
              'React Router',
              'Tailwind CSS',
              'Vite',
              'React Query',
              'i18next',
              'Axios',
              'Jest',
              'ESLint',
              'Prettier'
            ].map((tech) => (
              <div
                key={tech}
                className="flex items-center justify-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg"
              >
                <span className="text-sm font-medium text-gray-900 dark:text-white">
                  {tech}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600 dark:bg-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to start building?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Get started with our enterprise-grade React boilerplate today.
            </p>
            <Link to="/dashboard">
              <Button
                size="lg"
                variant="secondary"
                rightIcon={<ArrowRight className="h-5 w-5" />}
              >
                Start Building
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;