import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const ServiceCard = ({ service, index, onEnquire }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-primary border border-gray-800 p-8 hover:border-gold-400/50 transition-colors duration-300 flex flex-col h-full"
    >
      <div className="mb-6">
        <service.icon className="w-12 h-12 text-gold-400 group-hover:scale-110 transition-transform duration-300" strokeWidth={1.5} />
      </div>
      
      <h3 className="text-2xl font-playfair font-semibold text-white mb-4">
        {service.title}
      </h3>
      
      <p className="text-gray-400 font-inter mb-8 flex-grow leading-relaxed">
        {service.description}
      </p>
      
      <button 
        onClick={() => onEnquire(service.id)}
        className="flex items-center text-gold-400 hover:text-white font-medium uppercase tracking-wider text-sm transition-colors mt-auto w-max group/btn"
      >
        <span className="mr-2">{service.ctaText}</span>
        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-2 transition-transform" />
      </button>

      {/* Decorative corner */}
      <div className="absolute top-0 right-0 w-16 h-16 border-t border-r border-gold-400/0 group-hover:border-gold-400/30 transition-colors duration-300" />
    </motion.div>
  );
};

export default ServiceCard;
