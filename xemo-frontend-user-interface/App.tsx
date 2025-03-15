import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { HowItWorks } from './components/HowItWorks';
import { Features } from './components/Features';
import { Testimonials } from './components/Testimonials';
import { Pricing } from './components/Pricing';
import { Footer } from './components/Footer';
import { ThemeProvider } from './contexts/ThemeContext';
import { Login } from './pages/Login';
import { SignUp } from './pages/SignUp';
import { Contact } from './pages/Contact';
import { Heart } from 'lucide-react';

function App() {
  return (
    <Router>
      <ThemeProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/contact" element={
            <>
              <Header />
              <Contact />
              <Footer />
              <div className="bg-white dark:bg-black border-t border-black/10 dark:border-white/10">
                <div className="max-w-7xl mx-auto px-6 py-4">
                  <div className="flex items-center justify-center gap-3">
                    <span className="text-sm font-light tracking-wide">MADE WITH</span>
                    <Heart 
                      className="h-4 w-4 text-red-500 animate-[pulse_1.5s_ease-in-out_infinite]" 
                      fill="currentColor" 
                    />
                    <span className="text-sm font-light tracking-wide">BY</span>
                    <a 
                      href="https://github.com/vansh" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-sm font-medium relative group"
                    >
                      <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-purple-400 bg-clip-text text-transparent animate-gradient">
                        VANSH
                      </span>
                      <span className="absolute -bottom-px left-0 w-full h-px bg-gradient-to-r from-purple-400 via-pink-500 to-purple-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                    </a>
                  </div>
                </div>
              </div>
            </>
          } />
          <Route
            path="/"
            element={
              <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white">
                <Header />
                <main>
                  <Hero />
                  <HowItWorks />
                  <Features />
                  <Testimonials />
                  <Pricing />
                </main>
                <Footer />
                <div className="bg-white dark:bg-black border-t border-black/10 dark:border-white/10">
                  <div className="max-w-7xl mx-auto px-6 py-4">
                    <div className="flex items-center justify-center gap-3">
                      <span className="text-sm font-light tracking-wide">MADE WITH</span>
                      <Heart 
                        className="h-4 w-4 text-red-500 animate-[pulse_1.5s_ease-in-out_infinite]" 
                        fill="currentColor" 
                      />
                      <span className="text-sm font-light tracking-wide">BY</span>
                      <a 
                        href="https://github.com/vansh" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-sm font-medium relative group"
                      >
                        <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-purple-400 bg-clip-text text-transparent animate-gradient">
                          VANSH
                        </span>
                        <span className="absolute -bottom-px left-0 w-full h-px bg-gradient-to-r from-purple-400 via-pink-500 to-purple-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            }
          />
        </Routes>
      </ThemeProvider>
    </Router>
  );
}

export default App;