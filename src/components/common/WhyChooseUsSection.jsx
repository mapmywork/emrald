import React from 'react';
import { motion } from 'framer-motion';
import { Star, Clock, Heart, Shield, MapPin, CheckCircle2 } from 'lucide-react';

const WhyChooseUsSection = () => {
  const benefits = [
    { icon: Star, title: 'Premium Experience', desc: 'Elegant vehicles for memorable occasions.' },
    { icon: Clock, title: 'Flexible Rentals', desc: 'Options for different travel requirements.' },
    { icon: Heart, title: 'Wedding Specialists', desc: 'Transportation designed for your special day.' },
    { icon: Shield, title: 'Comfortable Travel', desc: 'Clean and comfortable vehicles.' },
    { icon: MapPin, title: 'Local Service', desc: 'Based in Thiruvalla, Kerala.' },
    { icon: CheckCircle2, title: 'Easy Booking', desc: 'Quick enquiry through WhatsApp or phone.' },
  ];

  return (
    <section className="py-24 bg-[#0a0d11]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-playfair font-bold text-white mb-6"
          >
            Why Choose Us
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-24 h-1 bg-gold-600 mx-auto"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-start p-6 bg-primary/50 border border-gray-800 rounded-sm hover:border-gold-400/30 transition-colors"
            >
              <div className="flex-shrink-0 mr-4">
                <benefit.icon className="w-8 h-8 text-gold-400" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-xl font-playfair font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-400 font-inter text-sm leading-relaxed">{benefit.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
