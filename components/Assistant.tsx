
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Send, X, Bot, Loader2 } from 'lucide-react';
import { getSustainabilityAdvice } from '../services/geminiService';
import { Message } from '../types';

const Assistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: "Welcome to 360 Global. I'm your Sustainability Architect. How can I assist with your polymer supply or circular strategy today?" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;
    
    const userMsg: Message = { role: 'user', content: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    const aiResponse = await getSustainabilityAdvice(input);
    setMessages(prev => [...prev, { role: 'assistant', content: aiResponse || "Communication relay delayed. Please attempt transmission again." }]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-10 right-10 z-[100]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.9, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: 40, scale: 0.9, filter: 'blur(10px)' }}
            className="mb-6 w-[380px] md:w-[450px] h-[600px] bg-midnight/90 backdrop-blur-3xl rounded-[2.5rem] overflow-hidden flex flex-col shadow-[0_30px_100px_rgba(0,0,0,0.6)] border border-white/10"
          >
            {/* Header */}
            <div className="p-8 bg-ecoGreen/5 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-ecoGreen rounded-2xl shadow-[0_0_15px_rgba(0,255,136,0.3)]">
                  <Bot className="w-6 h-6 text-midnight" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-lg leading-none mb-1">Architecture AI</h4>
                  <p className="text-[10px] text-ecoGreen font-bold uppercase tracking-[0.2em]">Operational • Melbourne</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-mutedGray hover:text-white transition-colors">
                <X size={24} />
              </button>
            </div>

            {/* Chat Body */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-8 space-y-6 hide-scrollbar">
              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] p-5 rounded-3xl text-sm leading-relaxed ${
                    m.role === 'user' 
                      ? 'bg-ecoGreen text-midnight font-semibold rounded-tr-none' 
                      : 'bg-white/5 text-softWhite rounded-tl-none border border-white/5'
                  }`}>
                    {m.content}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white/5 p-5 rounded-3xl rounded-tl-none border border-white/5">
                    <Loader2 className="w-6 h-6 text-ecoGreen animate-spin" />
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="p-6 bg-charcoal/50 border-t border-white/10">
              <div className="relative">
                <input 
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Inquire about polymer engineering..."
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-ecoGreen/50 transition-all pr-16 text-white placeholder:text-mutedGray/50"
                />
                <button 
                  onClick={handleSend}
                  disabled={isLoading}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-3 text-ecoGreen hover:scale-110 disabled:opacity-50 transition-transform"
                >
                  <Send size={24} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-20 h-20 bg-ecoGreen rounded-full flex items-center justify-center text-midnight shadow-[0_10px_40px_rgba(0,255,136,0.4)] relative"
      >
        <div className="absolute inset-0 bg-ecoGreen rounded-full animate-ping opacity-20" />
        {isOpen ? <X size={32} /> : <MessageCircle size={32} />}
      </motion.button>
    </div>
  );
};

export default Assistant;
