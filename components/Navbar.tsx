
import React, { useState, useEffect } from 'react';
import { NAV_ITEMS } from '../constants';
import { Menu, X, Recycle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-midnight/90 backdrop-blur-xl border-b border-white/10 py-4 shadow-2xl' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="flex items-center gap-3 group">
          <div className="p-2.5 bg-ecoGreen/10 rounded-xl group-hover:bg-ecoGreen/20 transition-colors">
            <Recycle className="w-8 h-8 text-ecoGreen" />
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-2xl leading-none tracking-tight">360 GLOBAL</span>
            <span className="text-[10px] text-ecoGreen font-bold tracking-[0.3em] uppercase">Plastic Solutions</span>
          </div>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          {NAV_ITEMS.map((item) => (
            <a 
              key={item.label} 
              href={item.href}
              className="relative text-sm font-semibold text-mutedGray hover:text-white transition-colors group"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-ecoGreen transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
          <a href="#contact" className="btn-primary px-7 py-3 text-midnight text-sm font-bold rounded-full">
            Get Quote
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 right-0 bg-midnight border-b border-white/10 overflow-hidden md:hidden"
          >
            <div className="flex flex-col gap-6 p-8">
              {NAV_ITEMS.map((item) => (
                <a 
                  key={item.label} 
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-xl font-display font-semibold text-softWhite hover:text-ecoGreen"
                >
                  {item.label}
                </a>
              ))}
              <a 
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="btn-primary mt-4 w-full py-4 text-midnight font-bold rounded-2xl text-center"
              >
                Get Quote
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
