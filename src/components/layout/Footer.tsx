/**
 * Application footer
 */
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Heart } from 'lucide-react';
import { ENV } from '@/config/env';

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
            <span>© 2025 {ENV.APP_NAME}. All rights reserved.</span>
          </div>
          
          <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400 mt-4 md:mt-0">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-red-500" />
            <span>using React & TypeScript</span>
          </div>
        </div>
        
        <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-600">
          <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 dark:text-gray-500">
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
                Support
              </a>
            </div>
            <div className="mt-2 md:mt-0">
              Version {ENV.APP_VERSION}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;