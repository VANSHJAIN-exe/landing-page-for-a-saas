import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Phone, MapPin, MessageSquare } from 'lucide-react';
import { Button } from '../components/Button';
import { NeonBorder } from '../components/NeonBorder';
import toast from 'react-hot-toast';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.id]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast.success('Message sent successfully!');
    setFormData({ name: '', email: '', subject: '', message: '' });
    setLoading(false);
  };

  return (
    <div className="min-h-screen pt-32 pb-20 bg-white dark:bg-black">
      <div className="absolute inset-0 bg-grid-black/5 dark:bg-grid-white/5" />
      
      <div className="max-w-7xl mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <h1 className="text-4xl font-bold tracking-tight text-black dark:text-white">Get in Touch</h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Have questions? We'd love to hear from you.
          </p>
        </motion.div>

        <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative bg-white/50 dark:bg-black/50 backdrop-blur-sm border border-black/10 dark:border-white/10 rounded-2xl p-8 shadow-xl">
              <NeonBorder />
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-2 block w-full px-4 py-3 bg-white/50 dark:bg-black/50 border border-black/10 dark:border-white/10 rounded-lg focus:ring-2 focus:ring-black/5 dark:focus:ring-white/5 text-black dark:text-white"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-2 block w-full px-4 py-3 bg-white/50 dark:bg-black/50 border border-black/10 dark:border-white/10 rounded-lg focus:ring-2 focus:ring-black/5 dark:focus:ring-white/5 text-black dark:text-white"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="mt-2 block w-full px-4 py-3 bg-white/50 dark:bg-black/50 border border-black/10 dark:border-white/10 rounded-lg focus:ring-2 focus:ring-black/5 dark:focus:ring-white/5 text-black dark:text-white"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Message
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="mt-2 block w-full px-4 py-3 bg-white/50 dark:bg-black/50 border border-black/10 dark:border-white/10 rounded-lg focus:ring-2 focus:ring-black/5 dark:focus:ring-white/5 text-black dark:text-white resize-none"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  className="w-full flex items-center justify-center gap-2"
                  disabled={loading}
                >
                  {loading ? (
                    'Sending...'
                  ) : (
                    <>
                      Send Message
                      <Send className="h-4 w-4" />
                    </>
                  )}
                </Button>
              </form>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-12"
          >
            <div className="relative bg-white/50 dark:bg-black/50 backdrop-blur-sm border border-black/10 dark:border-white/10 rounded-2xl p-8 shadow-xl">
              <NeonBorder />
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-black/5 dark:bg-white/5">
                    <Mail className="h-6 w-6 text-black dark:text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-black dark:text-white">Email</h3>
                    <p className="mt-1 text-gray-600 dark:text-gray-400">contact@xemo.io</p>
                    <p className="text-gray-600 dark:text-gray-400">support@xemo.io</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-black/5 dark:bg-white/5">
                    <Phone className="h-6 w-6 text-black dark:text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-black dark:text-white">Phone</h3>
                    <p className="mt-1 text-gray-600 dark:text-gray-400">+1 (555) 123-4567</p>
                    <p className="text-gray-600 dark:text-gray-400">Mon-Fri from 8am to 6pm</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-black/5 dark:bg-white/5">
                    <MapPin className="h-6 w-6 text-black dark:text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-black dark:text-white">Address</h3>
                    <p className="mt-1 text-gray-600 dark:text-gray-400">
                      123 Innovation Drive<br />
                      San Francisco, CA 94107
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative bg-white/50 dark:bg-black/50 backdrop-blur-sm border border-black/10 dark:border-white/10 rounded-2xl p-8 shadow-xl">
              <NeonBorder />
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-black/5 dark:bg-white/5">
                  <MessageSquare className="h-6 w-6 text-black dark:text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-black dark:text-white">Live Chat</h3>
                  <p className="mt-1 text-gray-600 dark:text-gray-400">
                    Our friendly team is here to help.<br />
                    Available 24/7
                  </p>
                  <Button variant="secondary" className="mt-4">
                    Start Chat
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}