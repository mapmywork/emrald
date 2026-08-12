import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDownRight, Car, Gem, Briefcase, Users } from 'lucide-react';
import { generateGeneralEnquiryMessage, generateWhatsAppLink } from '../../utils/whatsapp';

const Hero = ({ onBookClick }) => {
  const whatsappUrl = generateWhatsAppLink(generateGeneralEnquiryMessage());

  const trustIndicators = [
    { icon: Gem, text: "Premium Wedding Cars" },
    { icon: Car, text: "Self Drive Available" },
    { icon: Briefcase, text: "Taxi Services" },
    { icon: Users, text: "Tourist Buses" },
  ];

  return (
    <section id="home" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80"
          alt="Luxury Wedding Car"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/60 to-primary/95" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center mt-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-gold-400 font-inter text-sm md:text-base font-medium tracking-[0.2em] uppercase mb-4 block">
            Premium Car Rental · Thiruvalla, Kerala
          </span>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-playfair font-bold text-white mb-4 leading-tight">
            Arrive in <span className="text-gold-400 italic">Style.</span>
          </h1>
          
          <h2 className="text-2xl md:text-4xl font-playfair font-medium text-gray-200 mb-8">
            Make Every Journey Memorable.
          </h2>
          
          <p className="max-w-2xl mx-auto text-gray-300 font-inter text-lg md:text-xl mb-10 leading-relaxed">
            Premium wedding cars, self-drive rentals, taxi services and tourist buses — 
            available for your special occasions, everyday journeys and travel needs.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <button
              onClick={onBookClick}
              className="w-full sm:w-auto bg-gold-600 hover:bg-gold-400 text-primary px-8 py-4 rounded-sm font-medium text-lg transition-all transform hover:-translate-y-1"
            >
              Book Your Car
            </button>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-transparent border border-white hover:border-gold-400 hover:text-gold-400 text-white px-8 py-4 rounded-sm font-medium text-lg transition-all"
            >
              WhatsApp Us
            </a>
          </div>

          <a 
            href="#fleet" 
            className="inline-flex items-center text-gray-400 hover:text-gold-400 transition-colors group"
          >
            <span className="mr-2 uppercase tracking-widest text-sm font-medium">Explore Our Fleet</span>
            <ArrowDownRight className="w-5 h-5 group-hover:translate-y-1 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>

      {/* Floating Trust Indicators */}
      <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-primary to-transparent pt-32 pb-8 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-4 gap-6">
            {trustIndicators.map((indicator, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="flex items-center justify-center space-x-3 bg-white/5 backdrop-blur-sm border border-white/10 p-4 rounded-sm hover:border-gold-400/50 transition-colors"
              >
                <indicator.icon className="w-5 h-5 text-gold-400" />
                <span className="text-sm font-medium text-gray-200 tracking-wider uppercase">
                  {indicator.text}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
