import React from 'react';
import { FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';

const Contact: React.FC = () => {
  return (
    <footer id="contact" className="bg-black pt-32 pb-12 relative overflow-hidden">
        {/* Abstract Background Shape */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-zinc-900 to-transparent opacity-50 pointer-events-none"></div>

      {/* Watermark */}
      <div className="absolute inset-0 w-full h-full flex justify-center items-center pointer-events-none select-none z-0">
          <h1 className="text-[20vw] md:text-[25vw] leading-none font-bold text-zinc-900/60 uppercase brand-font whitespace-nowrap tracking-tighter blur-[2px] opacity-70">
            PIXELS
          </h1>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start mb-24 gap-12">
          <div className="max-w-2xl">
            <h2 className="text-5xl md:text-8xl font-bold uppercase brand-font mb-8">
              Let's <span className="text-orange-600">Forge</span><br />
              The Future.
            </h2>
            <p className="text-xl text-zinc-400 mb-12">
              Have a complex technical challenge? Need a robust e-commerce platform or a security-focused application? We are ready.
            </p>
            
            <div className="space-y-6">
                <a 
                href="mailto:moizshaikh0786@gmail.com" 
                className="flex items-center gap-4 text-2xl md:text-3xl border-b-2 border-zinc-800 hover:border-orange-500 hover:text-orange-500 transition-all pb-2 w-fit"
                >
                <FaEnvelope className="text-xl md:text-2xl" />
                moizshaikh0786@gmail.com
                </a>
                
                <div className="flex items-center gap-4 text-zinc-400 text-lg">
                    <FaMapMarkerAlt className="text-orange-500" />
                    <span>Mira Road(E), Thane, Mumbai, Maharashtra, India</span>
                </div>
            </div>
          </div>
        </div>

        <div className="border-t border-zinc-800 pt-8 flex flex-col md:flex-row justify-between items-center text-zinc-600 text-sm">
          <p>&copy; {new Date().getFullYear()} <span className="font-bold text-zinc-400">ForgingPixels Agency</span>. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;