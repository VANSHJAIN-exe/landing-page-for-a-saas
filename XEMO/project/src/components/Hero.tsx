import React from 'react';
import { Scene } from './3d/Scene';
import { Button } from './Button';
import { AnimatedText } from './AnimatedText';
import { motion } from 'framer-motion';

export function Hero() {
  return (
    <section className="relative min-h-screen pt-32 pb-20 bg-black overflow-hidden">
      <Scene />
      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="flex flex-col items-center text-center gap-12">
          <div className="max-w-3xl">
            <AnimatedText 
              text="Learn Smarter Not Harder"
              className="text-5xl md:text-7xl font-bold text-white leading-tight tracking-tighter"
            />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="mt-8 text-xl text-gray-400 leading-relaxed"
            >
              Revolutionary AI-powered learning platform with immersive visualization and personalized study paths.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.8 }}
              className="mt-12 flex flex-col sm:flex-row gap-6 justify-center"
            >
              <Button variant="primary">Start Learning</Button>
              <Button variant="secondary">Watch Demo</Button>
            </motion.div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </section>
  );
}