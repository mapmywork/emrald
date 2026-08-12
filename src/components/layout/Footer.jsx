import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { CONTACT_INFO } from '../../utils/constants';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary border-t border-gray-800 text-cream pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand Info */}
          <div>
            <h3 className="text-3xl font-playfair font-bold text-white mb-6 tracking-wider">
              Emarald
            </h3>
            <p className="text-gray-400 mb-6 max-w-sm">
              Premium wedding cars, self-drive rentals, taxi services and tourist buses.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-playfair font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'Services', 'Wedding Cars', 'Fleet', 'Gallery', 'FAQ', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase().replace(' ', '-')}`} 
                    className="text-gray-400 hover:text-gold-400 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-playfair font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone className="w-5 h-5 text-gold-400 mr-3 mt-1" />
                <a href={`tel:${CONTACT_INFO.PHONE_NUMBER}`} className="text-gray-400 hover:text-white transition-colors">
                  {CONTACT_INFO.PHONE_NUMBER}
                </a>
              </li>
              <li className="flex items-start">
                <Mail className="w-5 h-5 text-gold-400 mr-3 mt-1" />
                <a href={`mailto:${CONTACT_INFO.EMAIL}`} className="text-gray-400 hover:text-white transition-colors">
                  {CONTACT_INFO.EMAIL}
                </a>
              </li>
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-gold-400 mr-3 mt-1" />
                <span className="text-gray-400">
                  {CONTACT_INFO.LOCATION}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
          <p>© {currentYear} Emarald Wedding Cars. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
