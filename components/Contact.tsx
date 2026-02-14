
import React, { useState } from 'react';
import { Mail, MapPin, Phone, Send, Loader2, CheckCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setTimeout(() => setStatus('success'), 1500);
  };

  return (
    <section id="contact" className="py-32 relative bg-[#050a08]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          <div className="lg:col-span-5">
            <h2 className="text-emerald-500 font-bold uppercase tracking-[0.3em] text-xs mb-4">Global Reach</h2>
            <h3 className="text-5xl md:text-6xl font-black mb-8 leading-tight">Connect with our <span className="gradient-text">Somerton Hub</span></h3>
            <p className="text-slate-400 text-lg mb-12 font-medium leading-relaxed">
              Strategically located in Melbourne's industrial core, we manage domestic recycling and international logistics for the world's largest manufacturers.
            </p>

            <div className="space-y-6">
              {[
                { icon: <MapPin className="text-emerald-500" />, label: 'Melbourne Hub', val: '408 Industrial Dr, Somerton VIC 3062' },
                { icon: <Mail className="text-blue-500" />, label: 'Direct Support', val: 'contact@360globalplastic.com.au' },
                { icon: <Phone className="text-purple-500" />, label: 'Head Office', val: '+61 451 166 180' }
              ].map((item, i) => (
                <div key={i} className="flex gap-6 p-6 glass-card rounded-2xl">
                  <div className="w-12 h-12 flex-shrink-0 bg-white/5 rounded-xl flex items-center justify-center">
                    {item.icon}
                  </div>
                  <div>
                    <h5 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 mb-1">{item.label}</h5>
                    <p className="font-bold text-white">{item.val}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7 bg-[#0a110e] border border-white/5 p-8 md:p-16 rounded-[3rem] relative overflow-hidden">
            {status === 'success' ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-20">
                <div className="w-20 h-20 bg-emerald-500/20 rounded-full flex items-center justify-center mb-8 animate-bounce">
                  <CheckCircle className="w-10 h-10 text-emerald-500" />
                </div>
                <h4 className="text-3xl font-black mb-4">Message Transmitted</h4>
                <p className="text-slate-400 max-w-sm">Our logistics experts will review your request and contact you within the next standard business cycle.</p>
                <button 
                  onClick={() => setStatus('idle')}
                  className="mt-8 text-sm font-black text-emerald-500 uppercase tracking-widest hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">Corporate Name</label>
                    <input required className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-emerald-500 transition-colors text-white placeholder:text-slate-700" placeholder="Acme Polymers Ltd" />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">Business Email</label>
                    <input required type="email" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-emerald-500 transition-colors text-white placeholder:text-slate-700" placeholder="procurement@acme.com" />
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">Interest Area</label>
                  <select className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-emerald-500 transition-colors text-white appearance-none">
                    <option className="bg-[#0a110e]">Polymer Procurement (HDPE/PP/PET)</option>
                    <option className="bg-[#0a110e]">Industrial Recycling Partnership</option>
                    <option className="bg-[#0a110e]">Global Trade & Logistics</option>
                  </select>
                </div>

                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">Requirement Details</label>
                  <textarea required rows={5} className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-emerald-500 transition-colors text-white placeholder:text-slate-700" placeholder="Specify grades, volumes, or logistical needs..."></textarea>
                </div>

                <button 
                  disabled={status === 'loading'}
                  className="w-full group px-10 py-5 bg-emerald-600 rounded-2xl font-black text-white transition-all hover:bg-emerald-500 active:scale-95 flex items-center justify-center gap-3 disabled:opacity-50"
                >
                  {status === 'loading' ? (
                    <Loader2 className="w-6 h-6 animate-spin" />
                  ) : (
                    <>
                      Transmit Request <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </>
                  )}
                </button>
              </form>
            )}
            {/* Background Accent */}
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-[80px] -z-0" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
