import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaSitemap, FaPencilRuler, FaCode, FaServer, FaRocket } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    id: '01',
    title: 'System Design & Architecture',
    icon: <FaSitemap />,
    description: 'We begin by mapping the DNA of your application. This involves database schema design (SQL/NoSQL), API contract definitions, and selecting the right cloud infrastructure (AWS/Azure) to ensure scalability from day one.',
    tags: ['DB Schema', 'Architecture', 'API Design']
  },
  {
    id: '02',
    title: 'UI/UX Design',
    icon: <FaPencilRuler />,
    description: 'Functionality meets aesthetics. We create high-fidelity wireframes and interactive prototypes. We focus on user journeys, accessibility, and creating a visual language that aligns with your brand identity.',
    tags: ['Figma', 'Prototyping', 'User Research']
  },
  {
    id: '03',
    title: 'Frontend Engineering',
    icon: <FaCode />,
    description: 'We bring designs to life using modern frameworks like React and Next.js. We implement responsive layouts, complex state management (Redux/Zustand), and smooth GSAP animations for an immersive user experience.',
    tags: ['React', 'TypeScript', 'Tailwind', 'GSAP']
  },
  {
    id: '04',
    title: 'Backend Development',
    icon: <FaServer />,
    description: 'The engine room. We build secure RESTful or GraphQL APIs, handle authentication (JWT/OAuth), manage database aggregations, and integrate third-party services like Stripe or Twilio.',
    tags: ['Node.js', 'Express', 'Python', 'Security']
  },
  {
    id: '05',
    title: 'QA & Deployment',
    icon: <FaRocket />,
    description: 'Rigorous testing ensures stability. We set up CI/CD pipelines for automated deployment, configure SSL certificates, and monitor performance metrics to guarantee a smooth launch.',
    tags: ['CI/CD', 'Testing', 'DevOps']
  }
];

const Workflow: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray('.workflow-item');
      
      items.forEach((item: any) => {
        gsap.from(item, {
          y: 40,
          opacity: 0,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="workflow" ref={containerRef} className="py-24 md:py-32 bg-zinc-950 border-t border-zinc-900 overflow-hidden relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-zinc-900/40 via-transparent to-transparent opacity-50"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-zinc-500 uppercase tracking-widest text-sm mb-4">Our Process</h2>
          <h3 className="text-3xl md:text-5xl font-bold uppercase brand-font text-white">
            The <span className="text-orange-500">Forge</span> Workflow
          </h3>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Vertical Line Desktop */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-zinc-800/80 to-transparent transform -translate-x-1/2 hidden md:block"></div>
          
          {/* Vertical Line Mobile - Adjusted to align perfectly with bubble center (32px from left relative to container inside padding) */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-zinc-800 via-zinc-700 to-zinc-800 md:hidden ml-[32px] md:ml-0"></div>

          <div className="flex flex-col gap-12 md:gap-24">
            {steps.map((step, index) => (
              <div 
                key={step.id} 
                className={`workflow-item flex gap-6 md:gap-0 items-start md:items-center ${
                  index % 2 !== 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                
                {/* Desktop Spacer */}
                <div className="hidden md:block flex-1"></div>

                {/* Number/Icon Bubble */}
                <div className="relative z-20 flex-shrink-0 group md:mx-10">
                  <div className="w-16 h-16 md:w-24 md:h-24 bg-zinc-950 border border-zinc-800 group-hover:border-orange-500 rounded-full flex items-center justify-center text-2xl md:text-3xl text-zinc-500 group-hover:text-orange-500 shadow-xl shadow-black/50 group-hover:shadow-[0_0_30px_rgba(249,115,22,0.2)] transition-all duration-300 relative">
                     {step.icon}
                  </div>
                  <div className="absolute top-0 right-0 md:-mt-2 md:-mr-2 w-8 h-8 bg-zinc-900 group-hover:bg-orange-600 rounded-full flex items-center justify-center text-xs font-bold text-white border border-zinc-700 group-hover:border-orange-500 transition-colors duration-300 shadow-md">
                    {step.id}
                  </div>
                </div>

                {/* Content Box */}
                <div className={`flex-1 w-full md:w-auto relative z-10 ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                  <div 
                    className={`
                      p-6 md:p-8 bg-zinc-900/40 backdrop-blur-sm border border-zinc-800 hover:border-zinc-700 
                      transition-all duration-300 rounded-xl shadow-lg group-hover:shadow-orange-900/10 
                      inline-block w-full md:w-auto md:max-w-xl text-left
                      ${index % 2 !== 0 ? 'md:text-right' : ''}
                    `}
                  >
                    <h4 className={`text-xl md:text-2xl font-bold text-white mb-4 group-hover:text-orange-400 transition-colors`}>{step.title}</h4>
                    <p className={`text-zinc-400 mb-6 leading-relaxed text-sm md:text-base`}>
                      {step.description}
                    </p>
                    <div className={`flex flex-wrap gap-2 ${index % 2 !== 0 ? 'md:justify-end' : ''}`}>
                      {step.tags.map(tag => (
                        <span key={tag} className="px-2 py-1 bg-black/60 border border-zinc-800 text-[10px] md:text-xs text-zinc-500 group-hover:text-zinc-300 uppercase tracking-wide rounded transition-colors">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Workflow;