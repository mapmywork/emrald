import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { fleet } from '../../data/fleet';
import FleetCard from './FleetCard';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const FleetSection = ({ onBookClick }) => {
  return (
    <section id="fleet" className="py-24 bg-primary relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gold-400 font-inter text-sm font-medium tracking-[0.2em] uppercase mb-4 block"
          >
            Premium Vehicles
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-playfair font-bold text-white mb-6"
          >
            Explore Our Fleet
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 max-w-2xl mx-auto text-lg"
          >
            From luxury sedans for weddings to spacious tourist buses for group travel, we have the perfect vehicle for your journey.
          </motion.p>
        </div>

        {/* Swiper Carousel for Mobile, Grid for Desktop */}
        <div className="block md:hidden pb-12">
          <Swiper
            modules={[Pagination]}
            spaceBetween={20}
            slidesPerView={1.1}
            pagination={{ clickable: true }}
            className="fleet-swiper"
          >
            {fleet.map((vehicle) => (
              <SwiperSlide key={vehicle.id}>
                <FleetCard vehicle={vehicle} onEnquire={onBookClick} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-6">
          {fleet.map((vehicle, index) => (
            <motion.div
              key={vehicle.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <FleetCard vehicle={vehicle} onEnquire={onBookClick} />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Global styles for swiper pagination dots */}
      <style dangerouslySetInnerHTML={{__html: `
        .fleet-swiper .swiper-pagination-bullet {
          background-color: #4b5563;
          opacity: 1;
        }
        .fleet-swiper .swiper-pagination-bullet-active {
          background-color: #C9A227;
        }
        .fleet-swiper .swiper-pagination {
          bottom: 0px;
        }
      `}} />
    </section>
  );
};

export default FleetSection;
