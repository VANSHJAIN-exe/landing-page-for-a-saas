import React from 'react';
import { Menu } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeToggle } from './ThemeToggle';
import { Link } from 'react-router-dom';

interface MobileMenuProps {
  isOpen: boolean;
  onToggle: () => void;
}

export function MobileMenu({ isOpen, onToggle }: MobileMenuProps) {
  return (
    <div className="md:hidden">
      <button
        onClick={onToggle}
        className="p-2 text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white"
        aria-label="Toggle menu"
      >
        <Menu className="h-6 w-6" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/20 dark:bg-white/20 backdrop-blur-sm z-40"
              onClick={onToggle}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: "spring", damping: 20 }}
              className="fixed right-0 top-0 bottom-0 w-64 bg-white dark:bg-black border-l border-black/10 dark:border-white/10 z-50 p-6"
            >
              <div className="flex flex-col gap-6">
                <nav className="flex flex-col gap-4">
                  <a 
                    href="#features" 
                    className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors"
                    onClick={onToggle}
                  >
                    Features
                  </a>
                  <a 
                    href="#how-it-works" 
                    className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors"
                    onClick={onToggle}
                  >
                    How It Works
                  </a>
                  <a 
                    href="#pricing" 
                    className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors"
                    onClick={onToggle}
                  >
                    Pricing
                  </a>
                  <Link 
                    to="/contact"
                    className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors"
                    onClick={onToggle}
                  >
                    Contact
                  </Link>
                </nav>
                <div className="flex items-center gap-4">
                  <ThemeToggle />
                  <span className="text-sm text-gray-600 dark:text-gray-400">Toggle theme</span>
                </div>
                <div className="flex flex-col gap-3">
                  <Link 
                    to="/login"
                    className="w-full px-4 py-2 text-sm font-medium text-center text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors border border-black/10 dark:border-white/10 rounded-full"
                    onClick={onToggle}
                  >
                    Log in
                  </Link>
                  <Link 
                    to="/signup"
                    className="w-full px-4 py-2 text-sm font-medium text-center text-white dark:text-black bg-black dark:bg-white rounded-full hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
                    onClick={onToggle}
                  >
                    Sign up
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}