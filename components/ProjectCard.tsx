import React, { useRef } from 'react';
import { Project } from '../types';
import { FaExternalLinkAlt, FaGithub, FaServer, FaShieldAlt, FaCode } from 'react-icons/fa';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const isEven = index % 2 === 0;

  return (
    <div className="project-card group relative min-h-[80vh] flex items-center py-20 border-t border-zinc-800">
      <div className={`container mx-auto px-6 flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}>
        
        {/* Content Side */}
        <div className="w-full lg:w-1/2 z-10">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-orange-500 font-mono text-xl">0{index + 1}</span>
            <span className="h-px w-12 bg-zinc-700"></span>
            <span className="uppercase tracking-widest text-sm text-zinc-400">{project.category}</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6 brand-font group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-zinc-500 transition-all duration-500">
            {project.title}
          </h2>
          
          <p className="text-zinc-400 text-lg leading-relaxed mb-8">
            {project.description}
          </p>

          {/* Tech Stack Tags */}
          <div className="flex flex-wrap gap-3 mb-8">
            {project.techStack.map(tech => (
              <span key={tech} className="px-3 py-1 bg-zinc-900 border border-zinc-800 text-xs uppercase tracking-wide text-zinc-300 rounded-sm">
                {tech}
              </span>
            ))}
          </div>

          {/* Detailed Points (if available) */}
          {project.details && (
            <div className="mb-8 p-6 bg-zinc-900/40 border-l-2 border-orange-500 backdrop-blur-sm">
              <h4 className="text-sm font-bold uppercase mb-4 flex items-center gap-2 text-orange-400">
                <FaCode /> Technical Highlights
              </h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3">
                {project.details.slice(0, 8).map((detail, i) => (
                  <li key={i} className="text-sm text-zinc-400 flex items-start gap-2">
                    <span className="mt-1.5 w-1 h-1 bg-zinc-500 rounded-full flex-shrink-0"></span>
                    <span className="leading-tight">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <a 
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 text-white border-b border-orange-500 pb-1 hover:text-orange-500 transition-colors"
          >
            Visit Live Site <FaExternalLinkAlt className="text-xs" />
          </a>
        </div>

        {/* Image Side */}
        <div className="w-full lg:w-1/2 relative">
          <div className="relative overflow-hidden rounded-lg border border-zinc-800 group-hover:border-zinc-600 transition-colors duration-500 aspect-video shadow-2xl">
            <div className="absolute inset-0 bg-orange-900/20 z-10 group-hover:bg-transparent transition-colors duration-500 mix-blend-multiply"></div>
            <img 
              src={project.imageUrl} 
              alt={project.title} 
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
            />
          </div>
          {/* Decorative Elements behind image */}
          <div className={`absolute -bottom-4 ${isEven ? '-right-4' : '-left-4'} w-24 h-24 bg-zinc-800/50 -z-10`}></div>
          <div className={`absolute -top-4 ${isEven ? '-left-4' : '-right-4'} w-full h-full border border-zinc-800 -z-10`}></div>
        </div>

      </div>
    </div>
  );
};

export default ProjectCard;