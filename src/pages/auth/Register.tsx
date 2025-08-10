/**
 * Register page component
 */
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Eye, EyeOff, Mail, Lock, User } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import Card from '@/components/ui/Card';
import { validation } from '@/utils/validation';

const Register: React.FC = () => {
  const { t } = useTranslation();
  const { register, isLoading, error, isAuthenticated, clearAuthError } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/dashboard', { replace: true });
    }
  }, [isAuthenticated, navigate]);

  useEffect(() => {
    clearAuthError();
  }, [clearAuthError]);

  const validateForm = () => {
    const errors: Record<string, string> = {};

    if (!validation.required(formData.name)) {
      errors.name = t('validation.required');
    }

    if (!validation.required(formData.email)) {
      errors.email = t('validation.required');
    } else if (!validation.email(formData.email)) {
      errors.email = t('validation.invalidEmail');
    }

    if (!validation.required(formData.password)) {
      errors.password = t('validation.required');
    } else if (formData.password.length < 8) {
      errors.password = t('validation.passwordTooShort');
    }

    if (!validation.required(formData.confirmPassword)) {
      errors.confirmPassword = t('validation.required');
    } else if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = t('validation.passwordsNotMatch');
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
      await register(formData);
    } catch (error) {
      // Error is handled by the auth slice
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear specific field error when user starts typing
    if (formErrors[name]) {
      setFormErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <div className="mx-auto h-12 w-12 bg-blue-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">EA</span>
          </div>
          <h2 className="mt-6 text-3xl font-bold text-gray-900 dark:text-white">
            {t('auth.createAccount')}
          </h2>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            {t('auth.hasAccount')}{' '}
            <Link
              to="/login"
              className="font-medium text-blue-600 hover:text-blue-500 dark:text-blue-400"
            >
              {t('auth.signIn')}
            </Link>
          </p>
        </div>

        <Card>
          <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <div className="p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
                <p className="text-sm text-red-600 dark:text-red-400">{error}</p>
              </div>
            )}

            <div>
              <Input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                required
                label={t('auth.name')}
                value={formData.name}
                onChange={handleInputChange}
                error={formErrors.name}
                leftIcon={<User className="h-4 w-4" />}
                placeholder="John Doe"
              />
            </div>

            <div>
              <Input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                label={t('auth.email')}
                value={formData.email}
                onChange={handleInputChange}
                error={formErrors.email}
                leftIcon={<Mail className="h-4 w-4" />}
                placeholder="you@example.com"
              />
            </div>

            <div>
              <Input
                id="password"
                name="password"
                type={showPassword ? 'text' : 'password'}
                autoComplete="new-password"
                required
                label={t('auth.password')}
                value={formData.password}
                onChange={handleInputChange}
                error={formErrors.password}
                leftIcon={<Lock className="h-4 w-4" />}
                rightIcon={
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </button>
                }
                placeholder="Create a strong password"
              />
            </div>

            <div>
              <Input
                id="confirmPassword"
                name="confirmPassword"
                type={showConfirmPassword ? 'text' : 'password'}
                autoComplete="new-password"
                required
                label={t('auth.confirmPassword')}
                value={formData.confirmPassword}
                onChange={handleInputChange}
                error={formErrors.confirmPassword}
                leftIcon={<Lock className="h-4 w-4" />}
                rightIcon={
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    {showConfirmPassword ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </button>
                }
                placeholder="Confirm your password"
              />
            </div>

            <Button
              type="submit"
              className="w-full"
              size="lg"
              isLoading={isLoading}
            >
              {t('auth.signUp')}
            </Button>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default Register;