/**
 * Toast notification utility
 * Simple toast implementation for user feedback
 */
interface ToastOptions {
  duration?: number;
  position?: 'top' | 'bottom';
  type?: 'success' | 'error' | 'info' | 'warning';
}

class ToastManager {
  private container: HTMLDivElement | null = null;

  private createContainer() {
    if (!this.container) {
      this.container = document.createElement('div');
      this.container.className = 'fixed top-4 right-4 z-50 space-y-2';
      document.body.appendChild(this.container);
    }
    return this.container;
  }

  private createToast(message: string, options: ToastOptions = {}) {
    const { duration = 3000, type = 'info' } = options;
    const container = this.createContainer();

    const toast = document.createElement('div');
    
    const baseClasses = 'px-4 py-3 rounded-lg shadow-lg text-white font-medium transform transition-all duration-300 ease-in-out translate-x-full opacity-0';
    const typeClasses = {
      success: 'bg-green-500',
      error: 'bg-red-500',
      warning: 'bg-yellow-500',
      info: 'bg-blue-500',
    };
    
    toast.className = `${baseClasses} ${typeClasses[type]}`;
    toast.textContent = message;

    container.appendChild(toast);

    // Animate in
    requestAnimationFrame(() => {
      toast.classList.remove('translate-x-full', 'opacity-0');
    });

    // Auto remove
    setTimeout(() => {
      toast.classList.add('translate-x-full', 'opacity-0');
      setTimeout(() => {
        if (container.contains(toast)) {
          container.removeChild(toast);
        }
      }, 300);
    }, duration);
  }

  success(message: string, options?: Omit<ToastOptions, 'type'>) {
    this.createToast(message, { ...options, type: 'success' });
  }

  error(message: string, options?: Omit<ToastOptions, 'type'>) {
    this.createToast(message, { ...options, type: 'error' });
  }

  warning(message: string, options?: Omit<ToastOptions, 'type'>) {
    this.createToast(message, { ...options, type: 'warning' });
  }

  info(message: string, options?: Omit<ToastOptions, 'type'>) {
    this.createToast(message, { ...options, type: 'info' });
  }
}

export const toast = new ToastManager();