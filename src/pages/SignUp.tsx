import React, { useState } from 'react';
import { ArrowLeft, Eye, EyeOff } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../components/Button';
import { NeonButton } from '../components/NeonButton';
import { NeonBorder } from '../components/NeonBorder';
import { PasswordRequirements } from '../components/PasswordRequirements';
import toast from 'react-hot-toast';
import { auth } from '../lib/api';

export function SignUp() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.id]: e.target.value
    }));
  };

  const validatePassword = (password: string) => {
    const requirements = [
      password.length >= 8,
      /[A-Z]/.test(password),
      /[a-z]/.test(password),
      /\d/.test(password),
      /[!@#$%^&*(),.?":{}|<>]/.test(password),
    ];
    return requirements.every(Boolean);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }

    if (!validatePassword(formData.password)) {
      toast.error('Please meet all password requirements');
      return;
    }

    setLoading(true);

    try {
      const response = await auth.register({
        email: formData.email,
        password: formData.password,
      });
      localStorage.setItem('token', response.data.token);
      toast.success('Account created successfully!');
      navigate('/dashboard');
    } catch (error: any) {
      toast.error(error.response?.data?.message || 'Failed to create account');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-black/5 dark:bg-grid-white/5" />
      
      <Link 
        to="/" 
        className="absolute top-8 left-8 flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors px-4 py-2 rounded-full hover:bg-black/5 dark:hover:bg-white/5"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Home
      </Link>

      <div className="relative flex items-center justify-center min-h-screen py-[100px]">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-md mx-4"
        >
          <div className="relative bg-white/50 dark:bg-black/50 backdrop-blur-sm border border-black/10 dark:border-white/10 rounded-2xl p-8 shadow-xl">
            <NeonBorder />
            <h2 className="text-4xl font-bold text-black dark:text-white">Create account</h2>
            <p className="mt-3 text-base font-light text-gray-600 dark:text-gray-400">Join thousands of learners worldwide</p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-2 block w-full px-4 py-3 bg-white/50 dark:bg-black/50 border border-black/10 dark:border-white/10 rounded-lg focus:ring-2 focus:ring-black/5 dark:focus:ring-white/5 text-black dark:text-white font-light"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Password
                </label>
                <div className="mt-2 relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="block w-full px-4 py-3 bg-white/50 dark:bg-black/50 border border-black/10 dark:border-white/10 rounded-lg focus:ring-2 focus:ring-black/5 dark:focus:ring-white/5 text-black dark:text-white pr-12 font-light"
                    placeholder="Create a password"
                    required
                  />
                  <motion.button
                    type="button"
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors rounded-full hover:bg-black/5 dark:hover:bg-white/5"
                  >
                    <div className="w-5 h-5 relative">
                      <motion.div
                        initial={false}
                        animate={{ rotate: showPassword ? 180 : 0 }}
                        transition={{ type: "spring", duration: 0.5 }}
                        className="absolute inset-0"
                      >
                        {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                      </motion.div>
                    </div>
                  </motion.button>
                </div>
                <PasswordRequirements 
                  password={formData.password} 
                  className="mt-3"
                />
              </div>

              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Confirm Password
                </label>
                <div className="mt-2 relative">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    id="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className="block w-full px-4 py-3 bg-white/50 dark:bg-black/50 border border-black/10 dark:border-white/10 rounded-lg focus:ring-2 focus:ring-black/5 dark:focus:ring-white/5 text-black dark:text-white pr-12 font-light"
                    placeholder="Confirm your password"
                    required
                  />
                  <motion.button
                    type="button"
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors rounded-full hover:bg-black/5 dark:hover:bg-white/5"
                  >
                    <div className="w-5 h-5 relative">
                      <motion.div
                        initial={false}
                        animate={{ rotate: showConfirmPassword ? 180 : 0 }}
                        transition={{ type: "spring", duration: 0.5 }}
                        className="absolute inset-0"
                      >
                        {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                      </motion.div>
                    </div>
                  </motion.button>
                </div>
                {formData.confirmPassword && formData.password !== formData.confirmPassword && (
                  <p className="mt-2 text-xs text-red-500">Passwords do not match</p>
                )}
              </div>

              <div className="space-y-4">
                <Button 
                  variant="primary" 
                  className="w-full py-3 font-medium"
                  type="submit"
                  disabled={loading}
                >
                  {loading ? 'Creating Account...' : 'Create Account'}
                </Button>

                <NeonButton
                  onClick={() => navigate('/')}
                  className="w-full"
                  type="button"
                >
                  Explore Platform
                </NeonButton>
              </div>
            </form>

            <p className="mt-6 text-center text-sm font-light text-gray-600 dark:text-gray-400">
              Already have an account?{' '}
              <Link to="/login" className="font-medium text-black dark:text-white hover:opacity-80 transition-opacity">
                Sign in
              </Link>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}