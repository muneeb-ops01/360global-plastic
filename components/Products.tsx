
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Package, ArrowUpRight, CheckCircle2 } from 'lucide-react';

const CATEGORIES = ['All', 'PET', 'HDPE', 'LDPE', 'PP'];

const PRODUCT_DATA = [
  { id: 1, cat: 'PET', name: 'Premium rPET Flakes', desc: 'Medical-grade washed flakes optimized for precision thermoforming.', tags: ['Food Grade', 'High IV'] },
  { id: 2, cat: 'HDPE', name: 'HDPE Natural Regrind', desc: 'Sourced from industrial scrap, processed for pipe and container extrusion.', tags: ['Virgin-Like', 'Natural'] },
  { id: 3, cat: 'LDPE', name: 'Film Grade Pellets', desc: 'High-clarity pellets for flexible packaging and shrink films.', tags: ['Transparent', 'Flex'] },
  { id: 4, cat: 'PP', name: 'PP Co-Polymer Resins', desc: 'Engineered for extreme impact resistance in automotive components.', tags: ['Automotive', 'Tough'] },
  { id: 5, cat: 'HDPE', name: 'Color Batch HDPE', desc: 'Color-sorted and compounded for durable industrial crates.', tags: ['Bulk', 'Mixed Color'] },
  { id: 6, cat: 'PET', name: 'Preform Clear Regrind', desc: 'Ideal for sheet extrusion with consistent thermal properties.', tags: ['Clarity', 'Recycled'] },
];

const Products: React.FC = () => {
  const [activeTab, setActiveTab] = useState('All');

  const filtered = activeTab === 'All' 
    ? PRODUCT_DATA 
    : PRODUCT_DATA.filter(p => p.cat === activeTab);

  return (
    <section id="products" className="py-40 bg-midnight/40">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <h2 className="text-ecoGreen font-bold uppercase tracking-[0.4em] text-xs mb-6">The Inventory</h2>
          <h3 className="font-display text-6xl font-extrabold mb-14 tracking-tight">Sustainable <span className="gradient-text">Raw Materials</span></h3>
          
          <div className="flex flex-wrap justify-center gap-6 mb-16">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`relative px-10 py-4 rounded-full text-sm font-bold transition-all overflow-hidden group ${
                  activeTab === cat 
                    ? 'text-midnight' 
                    : 'bg-white/5 text-mutedGray hover:text-white'
                }`}
              >
                {activeTab === cat && (
                  <motion.div 
                    layoutId="activeTab" 
                    className="absolute inset-0 bg-ecoGreen" 
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{cat}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <AnimatePresence mode="popLayout">
            {filtered.map((product) => (
              <motion.div
                layout
                key={product.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                className="glass-card group p-10 rounded-[3rem] border border-white/10 hover:border-ecoGreen/30"
              >
                <div className="flex items-center justify-between mb-8">
                  <div className="px-4 py-1.5 bg-ecoGreen/10 rounded-lg text-[10px] font-black uppercase text-ecoGreen tracking-[0.2em] border border-ecoGreen/20">
                    {product.cat}
                  </div>
                  <div className="p-3 bg-white/5 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 hover:bg-ecoGreen/20">
                    <ArrowUpRight className="w-5 h-5 text-ecoGreen" />
                  </div>
                </div>
                
                <h4 className="font-display text-3xl font-bold mb-6 group-hover:text-ecoGreen transition-colors duration-500">{product.name}</h4>
                <p className="text-mutedGray text-base leading-relaxed mb-10">
                  {product.desc}
                </p>
                
                <div className="flex flex-wrap gap-3 mb-10">
                  {product.tags.map(t => (
                    <span key={t} className="text-[10px] font-bold text-softWhite/70 bg-white/5 px-3 py-1.5 rounded-full border border-white/5">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="pt-8 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs font-semibold text-mutedGray flex items-center gap-2">
                    <Package className="w-4 h-4 text-electricBlue" /> Standard 1.2T Bags
                  </span>
                  <button className="text-sm font-bold text-white uppercase tracking-[0.2em] hover:text-ecoGreen transition-colors flex items-center gap-2">
                    Specs <CheckCircle2 className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <motion.div 
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 40 }}
          viewport={{ once: true }}
          className="mt-28 p-16 rounded-[4rem] bg-gradient-to-br from-midnight via-charcoal to-midnight border border-white/10 flex flex-col lg:flex-row items-center justify-between gap-16 relative overflow-hidden"
        >
          <div className="flex-1 relative z-10">
            <h4 className="font-display text-4xl font-bold mb-6">Compound Customization</h4>
            <p className="text-mutedGray text-lg max-w-2xl leading-relaxed">
              Our Melbourne lab enables custom filtration, de-volatilization, and masterbatching to meet the most exacting specifications of the global manufacturing industry.
            </p>
          </div>
          <a href="#contact" className="btn-primary px-12 py-6 text-midnight font-black rounded-full text-lg whitespace-nowrap relative z-10 text-center">
            Partner With Us
          </a>
          <div className="absolute top-0 right-0 w-96 h-96 bg-electricBlue/5 rounded-full blur-[100px] -z-0" />
        </motion.div>
      </div>
    </section>
  );
};

export default Products;
