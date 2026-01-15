import React from 'react';
import { FaDatabase, FaShieldAlt, FaMobileAlt, FaRocket } from 'react-icons/fa';

const services = [
  {
    icon: <FaDatabase className="text-3xl" />,
    title: 'Scalable Architecture',
    desc: 'Designing backend systems capable of handling millions of requests with Node.js and MongoDB aggregation pipelines.'
  },
  {
    icon: <FaShieldAlt className="text-3xl" />,
    title: 'Cyber Security',
    desc: 'Implementing secure authentication, JWT token rotation, and creating awareness platforms for digital safety.'
  },
  {
    icon: <FaMobileAlt className="text-3xl" />,
    title: 'Modern Frontend',
    desc: 'Responsive React.js applications with Redux state management and TanStack Query for seamless data fetching.'
  },
  {
    icon: <FaRocket className="text-3xl" />,
    title: 'E-Commerce Solutions',
    desc: 'Full-stack integration of payment gateways (Razorpay/PhonePe), inventory management, and CRM dashboards.'
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-zinc-900 border-t border-zinc-800">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-4 mb-8">
            <h2 className="text-sm text-orange-500 uppercase tracking-widest mb-2">Our Expertise</h2>
            <p className="text-3xl md:text-4xl font-bold max-w-2xl">
              We don't just build websites.<br />We build <span className="text-white">business engines</span>.
            </p>
          </div>

          {services.map((service, idx) => (
            <div key={idx} className="bg-black/50 p-8 border border-zinc-800 hover:border-orange-500/50 transition-colors group">
              <div className="mb-6 text-zinc-500 group-hover:text-orange-500 transition-colors">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;