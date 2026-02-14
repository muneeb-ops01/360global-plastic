
import React from 'react';
import { motion } from 'framer-motion';
import Globe3D from './Globe3D';
import { ArrowRight, Leaf, Shield, MessageCircle } from 'lucide-react';

const Hero: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: [0.4, 0, 0.2, 1] } }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden">
      <div className="absolute inset-0 hero-glow pointer-events-none opacity-50" />
      <Globe3D />
      
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-7xl mx-auto px-6 text-center"
      >
        <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-ecoGreen/10 border border-ecoGreen/20 text-ecoGreen text-[11px] font-bold uppercase tracking-[0.25em] mb-10">
          <Leaf className="w-4 h-4" />
          Closing the Loop. Powering the Future.
        </motion.div>
        
        <motion.h1 
          variants={itemVariants}
          className="font-display text-7xl md:text-[8rem] font-extrabold mb-10 leading-[0.85] tracking-[-0.05em] text-white"
        >
          360° Global <br />
          <span className="gradient-text">Plastic Solutions</span>
        </motion.h1>
        
        <motion.p 
          variants={itemVariants}
          className="text-xl md:text-2xl text-mutedGray max-w-3xl mx-auto mb-14 leading-relaxed font-medium"
        >
          High-performance recycled polymers from Somerton to the world. 
          Scientific precision meets sustainable integrity.
        </motion.p>

        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a 
            href="https://wa.me/61451166180" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-primary group relative px-12 py-5 rounded-full font-bold text-midnight overflow-hidden inline-flex items-center gap-3 text-lg"
          >
            <MessageCircle className="w-6 h-6" />
            Contact via WhatsApp
          </a>
          
          <a href="#products" className="group px-12 py-5 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full font-bold text-white transition-all hover:bg-white/10 flex items-center gap-3 text-lg">
            <Shield className="w-6 h-6 text-ecoGreen" />
            Explore Products
          </a>
        </motion.div>

        {/* Floating Stats */}
        <motion.div 
          variants={itemVariants}
          className="mt-28 grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto"
        >
          {[
            { label: 'Tonnes Recycled', val: '50K+' },
            { label: 'Supply Routes', val: '120+' },
            { label: 'Purity Standard', val: '99.9%' },
            { label: 'SLA Support', val: '24/7' }
          ].map((stat, i) => (
            <div key={i} className="p-6 rounded-[2rem] bg-white/5 border border-white/10 backdrop-blur-md">
              <div className="text-3xl font-display font-bold text-white mb-2">{stat.val}</div>
              <div className="text-[10px] text-mutedGray uppercase tracking-[0.2em] font-bold">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
