import React from 'react';
import { Brain, Zap, Trophy, Map, FileQuestion, Users } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: Brain,
    title: 'AI Learning',
    description: 'Adaptive algorithms that evolve with your progress.',
  },
  {
    icon: Zap,
    title: 'Quick Mastery',
    description: 'Master complex topics in record time.',
  },
  {
    icon: Trophy,
    title: 'Achievement System',
    description: 'Track progress with meaningful milestones.',
  },
  {
    icon: Map,
    title: 'Custom Paths',
    description: 'Personalized roadmaps for your goals.',
  },
  {
    icon: FileQuestion,
    title: 'Smart Tests',
    description: 'Adaptive assessments that challenge you.',
  },
  {
    icon: Users,
    title: 'Community',
    description: 'Learn and grow with peers worldwide.',
  },
];

export function Features() {
  return (
    <section id="features" className="py-24 bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="text-3xl font-bold tracking-tight">Features</h2>
          <p className="mt-4 text-gray-400">Tools that adapt to your learning style</p>
        </motion.div>
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group p-6 rounded-2xl border border-white/10 hover:border-white/40 transition-all duration-300 hover:bg-white/5"
            >
              <feature.icon className="h-8 w-8 text-white mb-4 transition-transform duration-300 group-hover:scale-110" />
              <h3 className="text-lg font-semibold">{feature.title}</h3>
              <p className="mt-2 text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}