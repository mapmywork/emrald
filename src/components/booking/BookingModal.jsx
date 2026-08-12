import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import BookingForm from './BookingForm';

const BookingModal = ({ isOpen, onClose, prefilledService, prefilledVehicle }) => {
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100]"
          />
          
          {/* Modal Container */}
          <div className="fixed inset-0 overflow-y-auto z-[101] pointer-events-none">
            <div className="min-h-full flex items-center justify-center p-4 text-center sm:p-0">
              {/* Modal Content */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="relative bg-primary border border-gray-800 rounded-sm w-full max-w-3xl p-6 md:p-10 text-left overflow-hidden pointer-events-auto"
              >
                {/* Close Button */}
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
                >
                  <X size={24} />
                </button>

                <div className="mb-8 text-center">
                  <h3 className="text-3xl font-playfair font-bold text-white mb-2">Book Your Vehicle</h3>
                  <p className="text-gray-400 font-inter">
                    Fill out the details below, and we'll check availability for you.
                  </p>
                </div>

                <BookingForm 
                  prefilledService={prefilledService} 
                  prefilledVehicle={prefilledVehicle} 
                  onSuccess={onClose}
                />
              </motion.div>
            </div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default BookingModal;
