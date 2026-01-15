import React, { useState, useEffect } from 'react';
import { NavItem } from '../types';

const navItems: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'Work', href: '#projects' },
  { label: 'About', href: '#about' },
  { label: 'Expertise', href: '#services' },
  { label: 'Process', href: '#workflow' },
  { label: 'Contact', href: '#contact' },
];

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-40 transition-all duration-300 ${scrolled ? 'py-4 bg-black/90 backdrop-blur-md border-b border-zinc-800' : 'py-8 bg-transparent'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center relative z-50">
        <a href="#home" className="text-xl md:text-2xl font-bold tracking-widest uppercase brand-font flex items-center gap-2 relative z-50">
          <span className="w-4 h-4 bg-orange-500 inline-block animate-pulse"></span>
          ForgingPixels
        </a>
        
        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 lg:gap-12">
          {navItems.map((item) => (
            <li key={item.label}>
              <a 
                href={item.href} 
                className="text-xs lg:text-sm uppercase tracking-widest hover:text-orange-500 transition-colors relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white z-50 relative focus:outline-none" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Menu"
        >
          {mobileMenuOpen ? (
             <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
             </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-black z-40 flex items-center justify-center md:hidden transition-opacity duration-300 ${mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <ul className="flex flex-col gap-8 text-center">
          {navItems.map((item) => (
            <li key={item.label}>
              <a 
                href={item.href} 
                className="text-2xl uppercase tracking-widest hover:text-orange-500 transition-colors brand-font block p-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;