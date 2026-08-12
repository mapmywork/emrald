import React from 'react';
import { motion } from 'framer-motion';

const WeddingSection = ({ onBookClick }) => {
  return (
    <section id="wedding" className="py-24 bg-[#0a0d11]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left: Image */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
              <img 
                src="https://images.unsplash.com/photo-1544257121-692ab14d79a2?auto=format&fit=crop&q=80" 
                alt="Luxury Wedding Arrival" 
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
            </div>
            
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-b-2 border-r-2 border-gold-400/40 z-0" />
            <div className="absolute -top-6 -left-6 w-32 h-32 border-t-2 border-l-2 border-gold-400/40 z-0" />
          </motion.div>

          {/* Right: Content */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 flex flex-col justify-center"
          >
            <span className="text-gold-400 font-inter text-sm font-medium tracking-[0.2em] uppercase mb-4 block">
              For Your Special Day
            </span>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-white mb-6 leading-tight">
              Your Grand Entrance <br />
              <span className="text-gray-400 italic">Deserves a Grand Car.</span>
            </h2>
            
            <p className="text-gray-300 font-inter text-lg mb-10 leading-relaxed">
              Make every arrival memorable with premium wedding transportation designed to complement your special day. We provide an elegant experience tailored to your exact needs.
            </p>

            <ul className="space-y-4 mb-10">
              {[
                'Elegant presentation',
                'Comfortable travel',
                'Wedding-ready vehicles',
                'Professional service',
                'Flexible booking'
              ].map((feature, i) => (
                <li key={i} className="flex items-center text-gray-400 font-inter">
                  <span className="w-1.5 h-1.5 bg-gold-400 rounded-full mr-4" />
                  {feature}
                </li>
              ))}
            </ul>

            <div>
              <button 
                onClick={() => onBookClick('luxury-wedding')}
                className="bg-transparent border border-gold-600 text-gold-400 hover:bg-gold-600 hover:text-primary px-8 py-4 rounded-sm font-medium text-lg transition-all duration-300"
              >
                Enquire for Wedding Cars
              </button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default WeddingSection;
