
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Products from './components/Products';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Assistant from './components/Assistant';
import Globe3D from './components/Globe3D';
import { motion, useScroll, useSpring } from 'framer-motion';

const App: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative selection:bg-ecoGreen selection:text-midnight">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-ecoGreen origin-left z-[100]"
        style={{ scaleX }}
      />
      
      <Navbar />
      
      <main>
        <Hero />
        
        {/* About Section */}
        <section id="about" className="py-32 bg-midnight/50 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-xs font-bold text-ecoGreen uppercase tracking-[0.4em] mb-6">Identity</h2>
                <h3 className="font-display text-5xl md:text-6xl font-bold mb-10 tracking-tight leading-none">
                  Closing the Loop. <br />
                  <span className="gradient-text">Powering the Future.</span>
                </h3>
                <p className="text-mutedGray text-lg leading-relaxed mb-8">
                  Based in Somerton, the heart of Melbourne's industrial core, 360 Global Plastic Solutions operates at the intersection of material science and global logistics.
                </p>
                <p className="text-mutedGray text-lg leading-relaxed mb-12">
                  We architect sustainable loops for manufacturers worldwide. Our rigorous quality control ensures that recycled materials perform identically to virgin resins, reducing environmental impact without compromising performance.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="glass-card p-8 rounded-3xl">
                    <h4 className="text-ecoGreen font-display text-xl font-bold mb-3">Sustainable</h4>
                    <p className="text-sm text-mutedGray">100% PCR & PIR materials sourced ethically and verified by lab testing.</p>
                  </div>
                  <div className="glass-card p-8 rounded-3xl">
                    <h4 className="text-electricBlue font-display text-xl font-bold mb-3">Scalable</h4>
                    <p className="text-sm text-mutedGray">Infrastructure and logistics hub capable of handling massive global demand.</p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="relative"
              >
                <div className="aspect-square rounded-[4rem] overflow-hidden border border-white/10 shadow-2xl relative group">
                  <div className="absolute inset-0 bg-ecoGreen/5 group-hover:bg-transparent transition-colors duration-700 z-10 pointer-events-none" />
                  <img 
                    src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?q=80&w=2070&auto=format&fit=crop" 
                    alt="Industrial polymer recycling facility" 
                    className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                  />
                </div>
                {/* Floating Badge */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  className="absolute -bottom-12 -left-12 glass-card p-10 rounded-[3rem] border border-ecoGreen/20 shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                >
                  <div className="text-5xl font-display font-black text-ecoGreen mb-2">20+</div>
                  <div className="text-[11px] font-bold text-mutedGray uppercase tracking-[0.3em]">Years Expertise</div>
                </motion.div>
              </motion.div>
            </div>
          </div>
          {/* Decorative Elements */}
          <div className="absolute top-1/2 left-0 w-96 h-96 bg-ecoGreen/5 rounded-full blur-[120px] -z-0" />
        </section>

        <Services />
        <Products />
        
        {/* Sustainability Highlight */}
        <section id="sustainability" className="py-60 relative overflow-hidden bg-midnight">
          {/* Background Earth Animation */}
          <div className="absolute inset-0 opacity-40 mix-blend-screen pointer-events-none">
             <Globe3D />
          </div>
          
          <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="font-display text-6xl md:text-8xl font-bold mb-10">Earth <span className="gradient-text">Focused</span></h2>
              <p className="text-xl md:text-2xl text-mutedGray mb-16 leading-relaxed">
                Every tonne of polymer we recirculate saves approximately 1.5 tonnes of CO2. 
                Our mission is simple: eliminate the concept of waste.
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                {['Carbon Neutral 2030', 'ISCC PLUS Certified', 'EU Tax Compliant', 'Ethically Sourced'].map((badge) => (
                  <div key={badge} className="px-8 py-4 bg-white/5 border border-white/10 rounded-full text-xs font-bold uppercase tracking-[0.2em] text-ecoGreen backdrop-blur-md">
                    {badge}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-px bg-gradient-to-r from-transparent via-ecoGreen/30 to-transparent" />
        </section>

        <Contact />
      </main>

      <Footer />
      
      <Assistant />
    </div>
  );
};

export default App;
