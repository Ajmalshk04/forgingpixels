import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const texts = gsap.utils.toArray('.reveal-text');
      
      gsap.from(texts, {
        opacity: 0,
        y: 30,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 90%", // Updated to 90% for earlier animation
          toggleActions: "play none none reverse"
        }
      });

      gsap.from('.divider', {
        scaleX: 0,
        transformOrigin: "left center",
        duration: 1.5,
        ease: "expo.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 90%",
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={containerRef} className="py-24 md:py-32 bg-zinc-950 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent"></div>
      
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        <div className="reveal-text">
          <h2 className="text-zinc-500 uppercase tracking-widest text-sm mb-4">Who We Are</h2>
          <h3 className="text-4xl md:text-6xl font-bold uppercase brand-font mb-8 leading-tight">
            Engineers of the <span className="text-orange-500">Digital Age</span>
          </h3>
          <div className="divider w-20 h-1 bg-orange-600 mb-8"></div>
        </div>

        <div className="relative space-y-6">
          <p className="reveal-text text-lg md:text-xl text-zinc-300 leading-relaxed font-light">
            ForgingPixels is not just a software agency; we are a technical partner for growth. 
          </p>
          <p className="reveal-text text-lg md:text-xl text-zinc-300 leading-relaxed font-light">
            We specialize in translating complex business requirements into robust, scalable software. 
            From defining the initial <strong className="text-white font-medium">database schema</strong> to crafting the final <strong className="text-white font-medium">pixel-perfect UI</strong>, 
            we handle the entire lifecycle with engineering precision.
          </p>
          <p className="reveal-text text-lg md:text-xl text-zinc-300 leading-relaxed font-light">
            Our team is composed of senior developers and designers who believe that great software is forged in the details.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;