import React, { useState } from 'react';
import { Home, Eye, EyeOff } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../components/Button';
import { NeonButton } from '../components/NeonButton';
import { NeonBorder } from '../components/NeonBorder';
import toast from 'react-hot-toast';
import { auth } from '../lib/api';

export function Login() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.id]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await auth.login(formData);
      localStorage.setItem('token', response.data.token);
      toast.success('Successfully logged in!');
      navigate('/dashboard');
    } catch (error: any) {
      toast.error(error.response?.data?.message || 'Failed to login');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,...')] dark:bg-[url('data:image/svg+xml;base64,...')] opacity-50" />
      
      <button 
        onClick={() => navigate('/')}
        className="absolute top-8 left-8 flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors px-4 py-2 rounded-full hover:bg-black/5 dark:hover:bg-white/5"
        style={{ zIndex: 1000 }}
      >
        <Home className="h-4 w-4" />
        Home
      </button>

      <div className="relative flex items-center justify-center min-h-screen py-[135px]">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-md mx-4"
        >
          <div className="relative bg-white/50 dark:bg-black/50 backdrop-blur-sm border border-black/10 dark:border-white/10 rounded-2xl p-8 shadow-xl">
            <NeonBorder />
            <h2 className="text-4xl font-bold text-black dark:text-white">Welcome back</h2>
            <p className="mt-3 text-base font-light text-gray-600 dark:text-gray-400">Sign in to continue your learning journey</p>

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
                    placeholder="Enter your password"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors rounded-full hover:bg-black/5 dark:hover:bg-white/5"
                  >
                    <motion.span
                      initial={false}
                      animate={{ rotate: showPassword ? 180 : 0 }}
                      transition={{ type: "spring", duration: 0.5 }}
                    >
                      {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                    </motion.span>
                  </button>
                </div>
              </div>

              <div className="space-y-4">
                <Button 
                  variant="primary" 
                  className="w-full py-3 font-medium"
                  type="submit"
                  disabled={loading}
                >
                  {loading ? 'Signing in...' : 'Sign In'}
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
              Don't have an account?{' '}
              <Link to="/signup" className="font-medium text-black dark:text-white hover:opacity-80 transition-opacity">
                Sign up
              </Link>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}