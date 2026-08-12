import React from 'react';
import { Phone, MessageCircle, Calendar } from 'lucide-react';
import { CONTACT_INFO } from '../../utils/constants';
import { generateGeneralEnquiryMessage, generateWhatsAppLink } from '../../utils/whatsapp';
import { motion } from 'framer-motion';

const FloatingActions = ({ onBookClick }) => {
  const whatsappUrl = generateWhatsAppLink(generateGeneralEnquiryMessage());

  return (
    <>
      {/* Desktop Floating Actions */}
      <div className="hidden md:flex fixed bottom-8 right-8 flex-col space-y-4 z-50">
        <a
          href={`tel:${CONTACT_INFO.PHONE_NUMBER}`}
          className="bg-primary hover:bg-gray-800 text-cream p-4 rounded-full shadow-lg transition-transform hover:scale-110 border border-gray-700"
          title="Call Us"
        >
          <Phone size={24} />
        </a>
        <motion.a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#25D366] hover:bg-[#20b858] text-white p-4 rounded-full shadow-lg flex items-center justify-center relative"
          title="WhatsApp Us"
          whileHover={{ scale: 1.1 }}
          animate={{
            boxShadow: [
              "0 0 0 0 rgba(37, 211, 102, 0.7)",
              "0 0 0 15px rgba(37, 211, 102, 0)",
            ],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
          }}
        >
          <MessageCircle size={28} />
        </motion.a>
      </div>

      {/* Mobile Sticky Bottom Bar */}
      <div className="md:hidden fixed bottom-0 left-0 w-full bg-primary/95 backdrop-blur-md border-t border-gray-800 z-50 flex justify-around items-center p-3 safe-area-bottom">
        <a
          href={`tel:${CONTACT_INFO.PHONE_NUMBER}`}
          className="flex flex-col items-center justify-center text-cream hover:text-gold-400"
        >
          <Phone size={20} className="mb-1" />
          <span className="text-[10px] font-medium uppercase tracking-wider">Call</span>
        </a>
        
        <button
          onClick={onBookClick}
          className="flex flex-col items-center justify-center text-cream hover:text-gold-400"
        >
          <Calendar size={20} className="mb-1" />
          <span className="text-[10px] font-medium uppercase tracking-wider">Book</span>
        </button>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center text-[#25D366]"
        >
          <MessageCircle size={20} className="mb-1" />
          <span className="text-[10px] font-medium uppercase tracking-wider">WhatsApp</span>
        </a>
      </div>
    </>
  );
};

export default FloatingActions;
