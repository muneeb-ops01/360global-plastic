
import React from 'react';
// Added ArrowRight to the lucide-react import
import { Recycle, Twitter, Linkedin, Github, ExternalLink, MessageCircle, ArrowRight } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#030706] pt-24 pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <a href="#" className="flex items-center gap-2 mb-8">
              <Recycle className="w-10 h-10 text-ecoGreen" />
              <div className="flex flex-col">
                <span className="font-bold text-2xl leading-none tracking-tight">360 GLOBAL</span>
                <span className="text-[10px] text-ecoGreen font-semibold tracking-[0.2em] uppercase">Plastic Solutions</span>
              </div>
            </a>
            <p className="text-slate-400 leading-relaxed mb-8 max-w-sm">
              Closing the Loop. Powering the Future. <br />
              Revolutionizing the polymer lifecycle through innovation.
            </p>
            <div className="flex gap-4">
              <a href="https://wa.me/61451166180" className="p-3 bg-white/5 rounded-xl hover:bg-ecoGreen/20 hover:text-ecoGreen transition-all">
                <MessageCircle className="w-5 h-5" />
              </a>
              <a href="#" className="p-3 bg-white/5 rounded-xl hover:bg-ecoGreen/20 hover:text-ecoGreen transition-all">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="p-3 bg-white/5 rounded-xl hover:bg-ecoGreen/20 hover:text-ecoGreen transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-8 text-white uppercase text-xs tracking-widest">Solutions</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><a href="#" className="hover:text-ecoGreen transition-colors font-medium">HDPE Supply</a></li>
              <li><a href="#" className="hover:text-ecoGreen transition-colors font-medium">PP Resins</a></li>
              <li><a href="#" className="hover:text-ecoGreen transition-colors font-medium">rPET Flakes</a></li>
              <li><a href="#" className="hover:text-ecoGreen transition-colors font-medium">Custom Compounding</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-8 text-white uppercase text-xs tracking-widest">Somerton Hub</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><a href="#" className="hover:text-ecoGreen transition-colors font-medium">Contact Us</a></li>
              <li><a href="https://wa.me/61451166180" className="hover:text-ecoGreen transition-colors font-medium flex items-center gap-2">WhatsApp Direct <ExternalLink size={12}/></a></li>
              <li><a href="#" className="hover:text-ecoGreen transition-colors font-medium">Logistics Centre</a></li>
              <li><a href="#" className="hover:text-ecoGreen transition-colors font-medium">Lab Services</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-8 text-white uppercase text-xs tracking-widest">Global Insights</h4>
            <p className="text-slate-400 text-xs mb-6 leading-relaxed">
              Stay ahead in the circular economy. Receive market updates.
            </p>
            <div className="flex gap-2">
              <input type="email" placeholder="Business Email" className="flex-1 bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-xs focus:outline-none focus:border-ecoGreen" />
              <button className="p-2 bg-ecoGreen rounded-lg hover:brightness-110 transition-all">
                <ArrowRight className="w-4 h-4 text-midnight" />
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 text-[10px] text-slate-600 font-bold uppercase tracking-widest">
          <p>© 2024 360 GLOBAL PLASTIC SOLUTIONS. MELBOURNE, AUSTRALIA.</p>
          <div className="flex gap-8 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Safety</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
