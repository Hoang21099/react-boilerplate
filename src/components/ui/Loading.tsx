/**
 * Loading component with different variants
 */
import React from 'react';
import { cn } from '@/utils/cn';

interface LoadingProps {
  variant?: 'spinner' | 'dots' | 'bars';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  text?: string;
}

const Loading: React.FC<LoadingProps> = ({ 
  variant = 'spinner', 
  size = 'md', 
  className,
  text 
}) => {
  const sizes = {
    sm: { spinner: 'h-4 w-4', dots: 'h-1 w-1', bars: 'h-3' },
    md: { spinner: 'h-6 w-6', dots: 'h-2 w-2', bars: 'h-4' },
    lg: { spinner: 'h-8 w-8', dots: 'h-3 w-3', bars: 'h-6' },
  };

  const renderSpinner = () => (
    <div className={cn('animate-spin rounded-full border-2 border-gray-300 border-t-blue-600', sizes[size].spinner)} />
  );

  const renderDots = () => (
    <div className="flex space-x-1">
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className={cn('bg-blue-600 rounded-full animate-pulse', sizes[size].dots)}
          style={{
            animationDelay: `${i * 0.2}s`,
            animationDuration: '1.4s',
          }}
        />
      ))}
    </div>
  );

  const renderBars = () => (
    <div className="flex items-end space-x-1">
      {[0, 1, 2, 3].map((i) => (
        <div
          key={i}
          className={cn('bg-blue-600 w-1 animate-pulse', sizes[size].bars)}
          style={{
            animationDelay: `${i * 0.1}s`,
            animationDuration: '1s',
            height: `${Math.random() * 100 + 50}%`,
          }}
        />
      ))}
    </div>
  );

  const renderLoading = () => {
    switch (variant) {
      case 'dots':
        return renderDots();
      case 'bars':
        return renderBars();
      default:
        return renderSpinner();
    }
  };

  return (
    <div className={cn('flex flex-col items-center justify-center space-y-2', className)}>
      {renderLoading()}
      {text && (
        <p className="text-sm text-gray-600 dark:text-gray-400 animate-pulse">
          {text}
        </p>
      )}
    </div>
  );
};

export default Loading;