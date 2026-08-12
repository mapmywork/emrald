import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const HowItWorksSection = () => {
  const steps = [
    { num: '01', title: 'Choose Your Service' },
    { num: '02', title: 'Select Your Vehicle' },
    { num: '03', title: 'Share Your Travel Details' },
    { num: '04', title: 'Confirm Through WhatsApp' },
  ];

  return (
    <section className="py-24 bg-primary relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold-600/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-playfair font-bold text-white mb-6"
          >
            How It Works
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 font-inter"
          >
            A simple and seamless booking process.
          </motion.p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <React.Fragment key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="flex flex-col items-center text-center relative w-full md:w-1/4 my-4 md:my-0"
              >
                <div className="text-6xl font-playfair font-bold text-gray-800/50 mb-4 tracking-tighter">
                  {step.num}
                </div>
                <h3 className="text-xl font-playfair font-semibold text-gold-400">
                  {step.title}
                </h3>
              </motion.div>
              
              {/* Arrow separator (hidden on last item) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block text-gray-700 mx-4">
                  <ArrowDown className="w-6 h-6 -rotate-90" />
                </div>
              )}
              {/* Mobile down arrow */}
              {index < steps.length - 1 && (
                <div className="md:hidden text-gray-700 my-4">
                  <ArrowDown className="w-6 h-6" />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
