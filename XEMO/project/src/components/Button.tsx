import React from 'react';
import { cn } from '../utils/cn';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
}

export function Button({ children, className, variant = 'primary', ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        'relative px-8 py-4 text-lg font-medium rounded-full overflow-hidden transition-all duration-300 transform hover:scale-105',
        'before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/0 before:via-white/10 before:to-white/0 before:translate-x-[-100%] before:hover:translate-x-[100%] before:transition-transform before:duration-500',
        variant === 'primary' 
          ? 'bg-white text-black hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]' 
          : 'border border-white/20 text-white hover:border-white/40 hover:bg-white/5',
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}