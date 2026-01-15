import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';

const Hero: React.FC = () => {
  const comp = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subTitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLAnchorElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.from(titleRef.current, {
        y: 100,
        opacity: 0,
        duration: 1.5,
        ease: "power4.out",
        skewY: 7,
      })
      .from(subTitleRef.current, {
        y: 20,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
      }, "-=1")
      .from(ctaRef.current, {
        scale: 0.9,
        opacity: 0,
        duration: 1,
        ease: "back.out(1.7)"
      }, "-=0.5");

    }, comp);

    return () => ctx.revert();
  }, []);

  return (
    <section id="home" ref={comp} className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-800/30 via-black to-black z-0"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 z-0 pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="overflow-hidden mb-4">
            <h1 ref={titleRef} className="text-5xl md:text-8xl lg:text-9xl font-bold uppercase tracking-tighter leading-none">
            Forging <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">Reality</span>
            <br />
            Pixels <span className="text-zinc-600">Defined</span>
            </h1>
        </div>
        
        <p ref={subTitleRef} className="text-xl md:text-2xl text-zinc-400 max-w-2xl mx-auto mb-12 font-light">
          We craft high-performance digital infrastructure for ambitious brands. From cyber-security to enterprise e-commerce.
        </p>
        
        <div className="flex justify-center">
            <a 
            ref={ctaRef}
            href="#projects" 
            className="group relative px-8 py-4 bg-transparent border border-zinc-700 overflow-hidden rounded-none hover:border-orange-500 transition-colors duration-300"
            >
            <div className="absolute inset-0 w-0 bg-orange-600 transition-all duration-[250ms] ease-out group-hover:w-full opacity-10"></div>
            <span className="relative flex items-center gap-3 text-lg uppercase tracking-widest font-bold">
                View Our Work
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transform group-hover:translate-y-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
            </span>
            </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;