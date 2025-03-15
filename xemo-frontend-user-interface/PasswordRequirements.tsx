import React from 'react';
import { Check, X } from 'lucide-react';
import { motion } from 'framer-motion';

interface PasswordRequirementsProps {
  password: string;
  className?: string;
}

export function PasswordRequirements({ password, className = '' }: PasswordRequirementsProps) {
  const requirements = [
    {
      text: 'At least 8 characters',
      met: password.length >= 8,
    },
    {
      text: 'At least one uppercase letter',
      met: /[A-Z]/.test(password),
    },
    {
      text: 'At least one lowercase letter',
      met: /[a-z]/.test(password),
    },
    {
      text: 'At least one number',
      met: /\d/.test(password),
    },
    {
      text: 'At least one special character',
      met: /[!@#$%^&*(),.?":{}|<>]/.test(password),
    },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className={`space-y-2 ${className}`}
    >
      <p className="text-xs font-medium text-gray-600 dark:text-gray-400">Password requirements:</p>
      <div className="space-y-1.5">
        {requirements.map((req, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex items-center gap-2"
          >
            <div className={`p-0.5 rounded-full ${
              req.met 
                ? 'bg-green-500/10 text-green-500' 
                : 'bg-red-500/10 text-red-500'
            }`}>
              {req.met ? (
                <Check className="h-3 w-3" />
              ) : (
                <X className="h-3 w-3" />
              )}
            </div>
            <span className={`text-xs ${
              req.met
                ? 'text-green-600 dark:text-green-400'
                : 'text-red-600 dark:text-red-400'
            }`}>
              {req.text}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}