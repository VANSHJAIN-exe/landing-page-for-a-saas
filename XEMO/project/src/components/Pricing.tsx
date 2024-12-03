import React from 'react';
import { Check, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from './Button';

const plans = [
  {
    name: 'Starter',
    price: 'Free',
    description: 'Perfect for getting started',
    features: [
      'Interactive Short Notes',
      'Basic Quizzes',
      'Community Access',
      'Study Progress Tracking',
    ],
  },
  {
    name: 'Pro',
    price: '$9',
    description: 'Most popular choice',
    features: [
      'All Starter Features',
      'Audio Notes',
      'Study Streaks',
      'Personalized Study Roadmap',
      'Important Questions Bank',
      'AI-Powered Oral Exam Practice',
    ],
    featured: true,
  },
  {
    name: 'Team',
    price: '$19',
    description: 'For serious learners',
    features: [
      'All Pro Features',
      'Team Collaboration',
      'Advanced Analytics',
      'Priority Support',
      'Custom Study Plans',
      'Unlimited Practice Tests',
    ],
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold tracking-tight">Simple Pricing</h2>
          <p className="mt-4 text-lg text-gray-400">Choose the plan that works best for you</p>
        </motion.div>
        
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative p-8 rounded-2xl backdrop-blur-sm ${
                plan.featured
                  ? 'bg-white/10 border-2 border-white'
                  : 'bg-white/5 border border-white/10'
              }`}
            >
              {plan.featured && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-white text-black px-4 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                  <Sparkles className="h-4 w-4" />
                  Most Popular
                </div>
              )}
              
              <div className="text-center">
                <h3 className="text-xl font-bold">{plan.name}</h3>
                <p className="mt-2 text-sm text-gray-400">{plan.description}</p>
                <div className="mt-6">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.price !== 'Free' && (
                    <span className="text-gray-400">/month</span>
                  )}
                </div>
              </div>
              
              <ul className="mt-8 space-y-4">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm">
                    <Check className="h-5 w-5 text-white/70" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-8">
                <Button
                  variant={plan.featured ? 'primary' : 'secondary'}
                  className="w-full"
                >
                  Get Started
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}