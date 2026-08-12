import React from 'react';
import { Users, Settings, Fuel } from 'lucide-react';
import { motion } from 'framer-motion';

const FleetCard = ({ vehicle, onEnquire }) => {
  return (
    <div className="bg-[#0f141a] border border-gray-800 rounded-sm overflow-hidden hover:border-gold-400/30 transition-all duration-300 group flex flex-col h-full">
      <div className="relative aspect-[16/10] overflow-hidden">
        <img 
          src={vehicle.image} 
          alt={vehicle.name} 
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4 bg-primary/80 backdrop-blur-sm text-gold-400 px-3 py-1 text-xs font-medium uppercase tracking-wider rounded-sm border border-gold-400/20">
          {vehicle.category}
        </div>
      </div>
      
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-xl font-playfair font-semibold text-white mb-4">
          {vehicle.name}
        </h3>
        
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="flex items-center text-gray-400 text-sm">
            <Users className="w-4 h-4 mr-2 text-gold-400/70" />
            {vehicle.seatingCapacity}
          </div>
          <div className="flex items-center text-gray-400 text-sm">
            <Settings className="w-4 h-4 mr-2 text-gold-400/70" />
            {vehicle.transmission}
          </div>
          <div className="flex items-center text-gray-400 text-sm">
            <Fuel className="w-4 h-4 mr-2 text-gold-400/70" />
            {vehicle.fuel}
          </div>
        </div>

        <div className="border-t border-gray-800 pt-4 mt-auto">
          <div className="flex justify-between items-center mb-4">
            <span className="text-xs text-gray-500 uppercase tracking-wide">Type</span>
            <span className="text-sm font-medium text-gray-300">{vehicle.rentalType}</span>
          </div>
          <button 
            onClick={() => onEnquire(vehicle.name)}
            className="w-full bg-transparent border border-gold-600/50 hover:bg-gold-600 text-gold-400 hover:text-primary py-3 rounded-sm font-medium transition-colors duration-300"
          >
            Enquire Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default FleetCard;
