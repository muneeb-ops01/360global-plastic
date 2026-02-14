
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Recycle, 
  Globe, 
  ShieldCheck, 
  FlaskConical,
  Scale,
  ArrowRight
} from 'lucide-react';

const SERVICES_LIST = [
  {
    title: 'Plastic Collection',
    desc: 'Industrial-scale plastic recovery and processing programs tailored for massive enterprise operations.',
    icon: <Recycle className="w-7 h-7 text-ecoGreen" />,
  },
  {
    title: 'Polymer Supply',
    desc: 'Supply of premium grade HDPE, PP, and rPET pellets optimized for high-speed injection molding.',
    icon: <FlaskConical className="w-7 h-7 text-electricBlue" />,
  },
  {
    title: 'Global Trade',
    desc: 'End-to-end international logistics and customs brokerage from our Somerton strategic hub.',
    icon: <Globe className="w-7 h-7 text-white" />,
  },
  {
    title: 'Quality Assurance',
    desc: 'Scientific lab verification for every single batch to ensure perfect mechanical consistency.',
    icon: <ShieldCheck className="w-7 h-7 text-ecoGreen" />,
  },
  {
    title: 'Certified Weighing',
    desc: 'Trade-certified weighbridge operations for precise bulk material accounting and transit.',
    icon: <Scale className="w-7 h-7 text-white" />,
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-40 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between mb-24 gap-10">
          <div className="max-w-3xl">
            <h2 className="text-ecoGreen font-bold uppercase tracking-[0.4em] text-xs mb-6">Capabilities</h2>
            <h3 className="font-display text-5xl md:text-7xl font-bold tracking-tight leading-none">
              Reshaping the <br /><span className="gradient-text">Polymer Economy</span>
            </h3>
          </div>
          <p className="text-mutedGray max-w-sm mb-2 font-medium text-lg leading-relaxed">
            From logistics to lab testing, we provide the industrial backbone for a zero-waste manufacturing world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {SERVICES_LIST.map((s, i) => (
            <motion.div
              key={s.title}
              whileHover={{ 
                rotateX: 8, 
                rotateY: 8, 
                scale: 1.05,
                transition: { type: "spring", stiffness: 300, damping: 20 }
              }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              className="glass-card group p-12 rounded-[3rem] flex flex-col items-start h-full"
            >
              <div className="p-6 bg-white/5 rounded-2xl mb-10 group-hover:scale-125 group-hover:bg-ecoGreen/10 transition-all duration-700">
                {s.icon}
              </div>
              <h4 className="font-display text-3xl font-bold mb-6 tracking-tight">{s.title}</h4>
              <p className="text-mutedGray leading-relaxed text-base mb-10">
                {s.desc}
              </p>
              <div className="mt-auto pt-6 flex items-center gap-3 text-sm font-bold text-ecoGreen uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                Explore Detail <ArrowRight className="w-5 h-5" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
