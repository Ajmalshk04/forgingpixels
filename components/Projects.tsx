import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ProjectCard from './ProjectCard';
import { Project } from '../types';

gsap.registerPlugin(ScrollTrigger);

const projectsData: Project[] = [
  {
    id: 'numberwale',
    title: 'Numberwale',
    category: 'E-Commerce Platform',
    description: 'Developed a complete e-commerce platform for premium telecom numbers using MERN stack with 2+ lakh product listings. Engineered for high performance with advanced search capabilities and automated inventory management.',
    techStack: ['React', 'Redux', 'TanStack Query', 'Node.js', 'MongoDB', 'Nginx', 'AWS'],
    link: 'https://www.numberwale.com/',
    imageUrl: '/assets/numberwale-preview.png',
    details: [
      'Built responsive app with Redux & TanStack Query for data fetching',
      'Designed RESTful APIs with pagination, sorting & advanced search',
      'Implemented secure auth with JWT, refresh rotation & HTTP-only cookies',
      'Integrated Razorpay/PhonePe with webhooks & automated refunds',
      'Created Admin CRM for real-time analytics & order tracking',
      'Deployed on VPS with Nginx reverse proxy, GitHub automation & SSL',
      'Built OTP integration (Gallabox) & automated email/SMS alerts',
      'Developed automated UPC generation & bulk product operations'
    ]
  },
  {
    id: 'xofah',
    title: 'Xofah',
    category: 'B2B Fastener Platform',
    description: 'A specialized B2B platform connecting clients with suppliers for custom project quotes. Features a complex multi-role dashboard system for real-time production tracking and workflow management.',
    techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Redux'],
    link: 'https://xofah-dev.netlify.app/',
    imageUrl: '/assets/xofah-preview.png',
    details: [
      'Developed tracked workflows: Quoted, In Production, Shipped, Cancelled',
      'Implemented multi-role dashboards for Users, Admins, and Suppliers',
      'Created automated approval processes and daily progress tracking',
      'Built instant quote request system with real-time status updates'
    ]
  },
  {
    id: 'brance',
    title: 'Brance Ecommerce',
    category: 'Fashion Retail App',
    description: 'A fully functional clothing e-commerce application built on the MERN stack. Features a secure, scalable backend with integrated payment gateways and comprehensive admin controls.',
    techStack: ['MERN Stack', 'Material-UI', 'Stripe', 'Razorpay', 'Swagger', 'JWT'],
    link: 'https://brance-dev.netlify.app/',
    imageUrl: '/assets/estore-preview.png',
    details: [
      'Integrated Stripe and Razorpay for robust payment processing',
      'Documented RESTful APIs with Swagger for optimized workflow',
      'Implemented secure auth system with JWT and Nodemailer notifications',
      'Built admin panels for inventory and Cloudinary image management'
    ]
  },
  {
    id: 'bpm',
    title: 'BPM Tech Solutions',
    category: 'Digital Support & Safety',
    description: 'U.S.-focused technical support provider dedicated to education and digital safety. Offering patient guidance for device care and scam awareness.',
    techStack: ['Web Development', 'UI/UX', 'Digital Security'],
    link: 'https://bpmtechsolutions.com/',
    imageUrl: '/assets/BPM.png',
    details: [
      'Comprehensive digital safety educational platform',
      'Patient-centric user interface design',
      'Optimized for accessibility and ease of use'
    ]
  },
  {
    id: 'vrsafe',
    title: 'VR Safe',
    category: 'Cybersecurity App',
    description: 'A cross-platform web and mobile application dedicated to citizen cybersecurity awareness, focusing on fraud prevention and account security.',
    techStack: ['PWA', 'React Native', 'Firebase', 'Security'],
    link: 'https://vrsafe-website.web.app/',
    imageUrl: '/assets/VR.png',
    details: [
      'Real-time scam alerts and awareness modules',
      'Play Store application deployment',
      'Interactive educational content for fraud prevention'
    ]
  }
];

const Projects: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray('.project-card');
      
      cards.forEach((card: any) => {
        gsap.from(card, {
          y: 50,
          opacity: 0,
          duration: 0.6,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top bottom", // Starts immediately when top enters viewport
            toggleActions: "play none none reverse"
          }
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="projects" ref={containerRef} className="py-24 bg-black relative">
      <div className="container mx-auto px-6 mb-20">
        <h2 className="text-zinc-500 uppercase tracking-widest text-sm mb-4">Selected Works</h2>
        <h3 className="text-4xl md:text-7xl font-bold text-white uppercase brand-font">
          Forged <span className="text-stroke text-transparent stroke-white" style={{WebkitTextStroke: "1px white"}}>Projects</span>
        </h3>
      </div>

      <div className="flex flex-col">
        {projectsData.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Projects;