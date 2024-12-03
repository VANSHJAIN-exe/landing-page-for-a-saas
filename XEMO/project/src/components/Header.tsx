import React from 'react';
import { Pencil } from 'lucide-react';

export function Header() {
  return (
    <header className="fixed w-full top-0 z-50 border-b border-white/10 backdrop-blur-md bg-black/50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Pencil className="h-6 w-6 text-white" />
            <span className="text-xl font-bold text-white tracking-tight">xemo</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm text-gray-400 hover:text-white transition-colors">Features</a>
            <a href="#how-it-works" className="text-sm text-gray-400 hover:text-white transition-colors">How It Works</a>
            <a href="#pricing" className="text-sm text-gray-400 hover:text-white transition-colors">Pricing</a>
          </nav>
          <button className="px-4 py-2 text-sm font-medium text-black bg-white rounded-full hover:bg-gray-100 transition-colors">
            Get Started
          </button>
        </div>
      </div>
    </header>
  );
}