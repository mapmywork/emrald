import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import { CONTACT_INFO } from '../../utils/constants';
import { generateGeneralEnquiryMessage, generateWhatsAppLink } from '../../utils/whatsapp';

const ContactSection = () => {
  const whatsappUrl = generateWhatsAppLink(generateGeneralEnquiryMessage());

  return (
    <section id="contact" className="py-24 bg-primary border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16">
          
          <div className="w-full lg:w-1/2">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-gold-400 font-inter text-sm font-medium tracking-[0.2em] uppercase mb-4 block"
            >
              Get In Touch
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-playfair font-bold text-white mb-6"
            >
              Contact Us
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-400 font-inter text-lg mb-12"
            >
              Ready to book your premium vehicle or have questions about our services? Reach out to us today.
            </motion.p>

            <div className="space-y-8">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-[#0f141a] border border-gray-800 rounded-sm flex items-center justify-center mr-6 flex-shrink-0">
                  <Phone className="w-5 h-5 text-gold-400" />
                </div>
                <div>
                  <h4 className="text-white font-playfair font-semibold text-xl mb-1">Phone</h4>
                  <a href={`tel:${CONTACT_INFO.PHONE_NUMBER}`} className="text-gray-400 hover:text-white transition-colors">
                    {CONTACT_INFO.PHONE_NUMBER}
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-[#0f141a] border border-gray-800 rounded-sm flex items-center justify-center mr-6 flex-shrink-0">
                  <Mail className="w-5 h-5 text-gold-400" />
                </div>
                <div>
                  <h4 className="text-white font-playfair font-semibold text-xl mb-1">Email</h4>
                  <a href={`mailto:${CONTACT_INFO.EMAIL}`} className="text-gray-400 hover:text-white transition-colors">
                    {CONTACT_INFO.EMAIL}
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-[#0f141a] border border-gray-800 rounded-sm flex items-center justify-center mr-6 flex-shrink-0">
                  <MapPin className="w-5 h-5 text-gold-400" />
                </div>
                <div>
                  <h4 className="text-white font-playfair font-semibold text-xl mb-1">Location</h4>
                  <p className="text-gray-400">
                    {CONTACT_INFO.LOCATION}
                  </p>
                  <p className="text-gold-400/80 text-sm mt-1">
                    {CONTACT_INFO.DISPLAY_LOCATION}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2 bg-[#0f141a] border border-gray-800 p-8 md:p-12 rounded-sm flex flex-col justify-center text-center"
          >
            <h3 className="text-3xl font-playfair font-bold text-white mb-4">Fastest Response</h3>
            <p className="text-gray-400 mb-8 max-w-sm mx-auto">
              For immediate bookings and enquiries, we recommend contacting us via WhatsApp or a direct phone call.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center bg-[#25D366] hover:bg-[#20b858] text-white px-8 py-4 rounded-sm font-medium text-lg transition-colors"
              >
                <MessageCircle className="mr-2" />
                WhatsApp
              </a>
              <a
                href={`tel:${CONTACT_INFO.PHONE_NUMBER}`}
                className="flex items-center justify-center bg-transparent border border-gold-600 hover:bg-gold-600 text-gold-400 hover:text-primary px-8 py-4 rounded-sm font-medium text-lg transition-colors"
              >
                <Phone className="mr-2" />
                Call Now
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;
